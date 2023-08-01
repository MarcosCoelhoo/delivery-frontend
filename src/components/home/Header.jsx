import React from 'react';
import styles from '../styles/home/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to={'/'} className={styles.logo}>
          Logo
        </Link>
      </div>
    </header>
  );
};

export default Header;
