import { HeaderNav } from '@/shared/components/HeaderNav/HeaderNav';
import { MobileMenu } from '@/shared/components/MobileMenu';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNoScroll } from './hooks/useNoScroll';
import type { MangaProduct } from '@/features/HomePage/types/MangaProduct';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<MangaProduct[]>([]);

  useNoScroll(isMenuOpen);

  const onAddMangaItem = (manga: MangaProduct) => {
    setCartItems((prev) => [...prev, manga]);
  };

  const outletContext = {
    cartItems,
    onAddMangaItem,
  };

  return (
    <div>
      <HeaderNav
        onMenuOpen={() => setIsMenuOpen(true)}
        cartItemsCount={cartItems.length}
      />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <Outlet context={outletContext} />
    </div>
  );
}

export default App;
