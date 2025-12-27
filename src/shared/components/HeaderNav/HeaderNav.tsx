import { Link, useNavigate } from 'react-router-dom';
import styles from './HeaderNav.module.css';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { navData } from '@/shared/data/navData';
import { Logo } from '../Logo';
import toast from 'react-hot-toast';
import { useCart } from '@/app/context/CartProvider';

type HeaderNavProps = {
  onMenuOpen: () => void;
};
export const HeaderNav = ({ onMenuOpen }: HeaderNavProps) => {
  const navigate = useNavigate();

  const { cartItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <button
            className={`${styles.menu} btn-icon`}
            aria-label='Menu'
            onClick={() => onMenuOpen()}
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
          <button
            aria-label='Search'
            className='btn-icon'
            onClick={() =>
              toast('Search coming soon!', {
                icon: '🔍',
                duration: 2500,
              })
            }
          >
            <Search />
          </button>
          <button
            type='button'
            aria-label='Cart'
            className={`${styles.cart} btn-icon`}
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart />
            {cartItems.length > 0 && (
              <span className={styles.badge}>{cartItems.length}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
