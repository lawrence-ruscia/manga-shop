import { Hero } from '../components/Hero/Hero';
import { useProducts } from '../hooks/useProducts';
import styles from './HomePage.module.css';

export const HomePage = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.page}>
      <Hero />

      {/* Product Grid */}
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.genre}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
