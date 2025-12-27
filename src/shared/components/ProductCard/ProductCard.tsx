import type { MangaProduct } from '@/features/HomePage/types/MangaProduct';
import styles from './ProductCard.module.css';
import type { MouseEvent } from 'react';
import { useCart } from '@/app/context/CartProvider';

export const ProductCard = ({ product }: { product: MangaProduct }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevents the Link navigation
    e.stopPropagation(); // Stops event from bubbling to Link

    addToCart(product);
  };

  return (
    <article key={product.id} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.imageUrl} alt={product.title} loading='lazy' />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.meta}>
          <span className={styles.genre}>{product.genre}</span>
          <span className={styles.rating}>★ {product.rating}</span>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>${product.price}</span>
          <button
            className='btn-md btn-primary'
            type='button'
            onClick={(e) => handleAddToCart(e)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};
