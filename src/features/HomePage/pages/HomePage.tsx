import { Hero } from '../components/Hero/Hero';
import { useProducts } from '@/shared/hooks/useProducts';
import styles from './HomePage.module.css';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import { useMemo } from 'react';
import type { FetchProductsParams } from '@/shared/types/FetchProductsParams';

export const HomePage = () => {
  const params: FetchProductsParams = useMemo(() => {
    return { limit: 12, order_by: 'popularity' };
  }, []);

  const { products, isLoading, error } = useProducts(params);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.page}>
      <Hero />

      {/* Popular Mangas */}
      <ProductGrid products={products} />
    </div>
  );
};
