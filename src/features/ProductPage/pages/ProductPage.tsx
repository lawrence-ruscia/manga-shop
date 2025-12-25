import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';
import { useMangaData } from '../hooks/useMangaData';

export const ProductPage = () => {
  const { mangaId } = useParams();

  const { mangaData, isLoading, error } = useMangaData(Number(mangaId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.name}</div>;
  }

  return (
    <main className={styles.page}>
      <section className={styles.product}>
        {/* Media + Core Info */}
        <div className={styles.top}>
          {/* Image */}
          <div className={styles.media}>
            <img src={mangaData?.imageUrl} alt='Manga cover' />
          </div>

          {/* Product Info */}
          <div className={styles.info}>
            <h1 className={styles.title}>{mangaData?.title}</h1>

            <div className={styles.meta}>
              <span>⭐ {mangaData?.rating}</span>
              <span>{mangaData?.genre}</span>
            </div>

            <p>${mangaData?.price}</p>

            <div className={styles.actions}>
              <button className='btn-primary btn-md'>Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={styles.description}>
          <h2>About this manga</h2>
          <p>{mangaData?.description}</p>
        </div>
      </section>
    </main>
  );
};
