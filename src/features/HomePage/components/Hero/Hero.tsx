import styles from './Hero.module.css';
import heroImg from './hero-img.webp';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h1 className={`${styles.title} heading-xl`}>Yoru Manga</h1>
          <p className='body-md'>Discover manga worth reading at night</p>
          <button
            type='button'
            className={`${styles.button} btn-primary btn-md`}
          >
            Browse Manga
          </button>
        </div>

        <div className={styles.imageBlock}>
          <img src={heroImg} alt='John smith from eminence in shadow' />
        </div>
      </div>
    </section>
  );
};
