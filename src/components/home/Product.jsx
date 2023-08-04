import React from 'react';

import styles from '../styles/home/Product.module.css';
import { ProductModalContext } from '../contexts/ProductModalContext';

const Product = ({ data, key }) => {
  const { setProduct } = React.useContext(ProductModalContext);

  function handleClickOutside() {
    setProduct(data);
  }

  return (
    <li key={key} className={styles.item} onClick={handleClickOutside}>
      <div className={styles.image}>
        <img src={data.image_url} alt={`Imagem do produto ${data.product}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.name}>{data.product}</h2>
          <p className={styles.description}>
            Carne de alce, espinafre, azeitona, queijo parmesão, calabresa frita
          </p>
        </div>

        <p className={styles.price}>R$ {data.price.toFixed(2)}</p>
      </div>
    </li>
  );
};

export default Product;
