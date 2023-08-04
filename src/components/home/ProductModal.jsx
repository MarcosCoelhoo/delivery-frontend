import React from 'react';

import styles from '../styles/home/ProductModal.module.css';
import { ProductModalContext } from '../contexts/ProductModalContext';

const ProductModal = () => {
  const { product, setProduct } = React.useContext(ProductModalContext);
  const containerRef = React.useRef();

  function handleClickOutside({ target }) {
    if (target === containerRef.current) {
      setProduct(null);
    }
  }

  React.useEffect(() => {
    const body = document.body;
    if (product) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;
  return (
    <section
      onClick={handleClickOutside}
      className={styles.container}
      ref={containerRef}
    >
      <div className={`${styles.modal} animeModal`}>
        <div className={styles.content}>
          <div className={styles.product}>
            <div className={styles.image}>
              <img
                src={product.image_url}
                alt={`Imagem do produto ${product.product}`}
              />
            </div>

            <div className={styles.info}>
              <h1 className={styles.name}>{product.product}</h1>
              <p className={styles.description}>
                Carne de alce, espinafre, azeitona, queijo parmesão, calabresa
                frita
              </p>
            </div>
          </div>

          <div className={styles.payment}>
            <h2 className={styles.price}>R$ {product.price.toFixed(2)}</h2>

            <div className={styles.quantity}>
              <button>-</button>
              <p className={styles.count}>5</p>
              <button>+</button>
            </div>
          </div>
        </div>

        <button className={styles.button}>Adicionar ao carrinho</button>
      </div>
    </section>
  );
};

export default ProductModal;
