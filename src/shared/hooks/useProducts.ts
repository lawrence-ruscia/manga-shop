import { useState, useEffect } from 'react';
import type { MangaProduct } from '../../features/HomePage/types/MangaProduct';
import { mapMangaToProduct } from '../../features/HomePage/utils/mapMangaToProduct';
import type { JikanManga } from '../../features/HomePage/types/JikanManga';
import { productsService } from '../services/productsService';
import type { FetchProductsParams } from '../types/FetchProductsParams';

export const useProducts = (params: FetchProductsParams = {}) => {
  const [products, setProducts] = useState<MangaProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // refetch version
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMangaProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await productsService.fetchProducts(params, signal);

        const mappedProducts = data.data.map((manga: JikanManga) =>
          mapMangaToProduct(manga)
        );

        setProducts(mappedProducts);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError(err as Error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMangaProducts();

    return () => {
      controller.abort();
    };
  }, [params, version]);

  const refetch = () => {
    setVersion((prev) => prev + 1);
  };

  return { products, isLoading, error, refetch };
};
