import { useRef } from 'react';
import styles from './ProductGrid.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductGrid = ({
  children,
}: {
  children: React.ReactElement[];
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!listRef.current) return;

    const scrollAmount = 300;

    listRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.grid}>
      <div className={styles.header}>
        <h2 className='heading-md'>Popular Mangas</h2>

        <div className={styles.controls}>
          <button
            aria-label='Scroll left'
            className='btn-icon'
            onClick={() => scroll('left')}
          >
            <ChevronLeft />
          </button>
          <button
            aria-label='Scroll right'
            className='btn-icon'
            onClick={() => scroll('right')} 
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <ul ref={listRef} className={styles.carousel}>
        {children}
      </ul>
    </section>
  );
};
