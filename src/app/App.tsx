import { HeaderNav } from '@/shared/components/HeaderNav/HeaderNav';
import { MobileMenu } from '@/shared/components/MobileMenu';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const body = document.body;
    body.classList.add('no-scroll');

    return () => {
      body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div>
      <HeaderNav onMenuOpen={() => setIsMenuOpen(true)} />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />
      <Outlet />
    </div>
  );
}

export default App;
