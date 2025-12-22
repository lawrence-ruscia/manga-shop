import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.css';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { navData } from '@/shared/data/navData';
import { Logo } from '../Logo';

type HeaderNavProps = {
  onMenuOpen: () => void;
};
export const HeaderNav = ({ onMenuOpen }: HeaderNavProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <button
            className={`${styles.menu} btn-icon`}
            aria-label='Menu'
            onClick={onMenuOpen}
          >
            <Menu />
          </button>
          <Logo />
        </div>

        <div className={styles.nav}>
          {navData &&
            navData.map((data) => (
              <Link key={data.title} to={data.url}>
                {data.title}
              </Link>
            ))}
        </div>

        <div className={styles.actions}>
          <button aria-label='Search' className='btn-icon'>
            <Search />
          </button>
          <button
            type='button'
            aria-label='Cart'
            className={`${styles.cart} btn-icon`}
          >
            <ShoppingCart />
            <span className={styles.badge}>2</span>
          </button>
        </div>
      </div>
    </header>
  );
};
