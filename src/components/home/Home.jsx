import React from 'react';
import Hero from './Hero';
import MenuProducts from './MenuProducts';

import Cart from './Cart';

import { CartStorage } from '../contexts/CartContext';
import CartButton from './CartButton';

import styles from '../styles/home/Home.module.css';

const Home = () => {
  return (
    <>
      <Hero />

      <CartStorage>
        <main className={`${styles.main} sectionContainer`}>
          <MenuProducts />
          <Cart />

          <CartButton className={styles.cartButton} />
        </main>
      </CartStorage>
    </>
  );
};

export default Home;
