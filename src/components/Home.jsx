import React from 'react';
import Hero from './Hero';
import Menu from './Menu';

import Cart from './Cart';
import { ShoppingCartSimple } from '@phosphor-icons/react';

import styles from './style/Home.module.css';

const Home = () => {
  return (
    <>
      <Hero />

      <main className={`${styles.main} sectionContainer`}>
        <Menu />
        <Cart />

        <button className={styles.cartButton}>
          <ShoppingCartSimple size={32} weight="duotone" />
        </button>
      </main>
    </>
  );
};

export default Home;
