import React from 'react';
import styles from '../styles/helper/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loading}></span>
      <p className={styles.text}>Carregando...</p>
    </div>
  );
};

export default Loading;
