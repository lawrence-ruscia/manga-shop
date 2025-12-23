import styles from './ProductPage.module.css';
export const ProductPage = () => {
  return (
    <main>
      <section>
        {/* Media + Core Info */}
        <div>
          {/* Image */}
          <div>
            <img src='' alt='Manga cover' />
          </div>

          {/* Product Info */}
          <div>
            <h1>Solo Leveling</h1>

            <div>
              <span>⭐ 8.9</span>
              <span>Action</span>
            </div>

            <p>$12.99</p>

            <button>Add to Cart</button>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2>About this manga</h2>
          <p>
            In a world where hunters battle deadly monsters, Sung Jin-Woo begins
            as the weakest...
          </p>
        </div>
      </section>
    </main>
  );
};
