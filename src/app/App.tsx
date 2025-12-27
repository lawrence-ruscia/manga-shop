import { HeaderNav } from '@/shared/components/HeaderNav/HeaderNav';
import { MobileMenu } from '@/shared/components/MobileMenu';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNoScroll } from './hooks/useNoScroll';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartProvider';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useNoScroll(isMenuOpen);

  return (
    <div>
      <Toaster
        position='bottom-center'
        toastOptions={{
          duration: 2000,
          style: {
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            padding: '12px 16px',
            fontSize: '0.9375rem',
            fontWeight: '500',
          },
        }}
      />

      <CartProvider>
        <HeaderNav onMenuOpen={() => setIsMenuOpen(true)} />

        <Outlet />
      </CartProvider>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}

export default App;
