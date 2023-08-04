import React from 'react';
import Hero from './Hero';
import MenuProducts from './MenuProducts';

import Cart from './Cart';

import { CartStorage } from '../contexts/CartContext';
import CartButton from './CartButton';

import styles from '../styles/home/Home.module.css';
import ProductModal from './ProductModal';
import { ProductModalStorage } from '../contexts/ProductModalContext';

const Home = () => {
  return (
    <>
      <Hero />

      <CartStorage>
        <main className={`${styles.main} sectionContainer`}>
          <ProductModalStorage>
            <ProductModal />
            <MenuProducts />
            <Cart />
          </ProductModalStorage>

          <CartButton className={styles.cartButton} />
        </main>
      </CartStorage>
    </>
  );
};

export default Home;
