import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export const Logo = ({ size = 40 }: { size?: number }) => {
  return (
    <Link
      to={'/'}
      className={styles.logo}
      style={{ '--logo-size': `${size}px` } as React.CSSProperties}
    >
      <span className={styles.kanji}>夜</span>
      <div className={styles.brandName}>
        <span className={styles.highlight}>Yoru</span> Manga
      </div>
    </Link>
  );
};
