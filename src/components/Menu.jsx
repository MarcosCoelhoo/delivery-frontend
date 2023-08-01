import React from 'react';
import styles from './style/Menu.module.css';

const Menu = () => {
  return (
    <section className={styles.menu}>
      <h1 className={styles.title}>Cardápio</h1>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
              alt="Imagem do produto"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.name}>Hambuguer de Padaria</h2>
              <p className={styles.description}>
                Carne de alce, espinafre, azeitona, queijo parmesão, calabresa
                frita
              </p>
            </div>

            <p className={styles.price}>R$ 12,70</p>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
              alt="Imagem do produto"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.name}>Hambuguer de Padaria</h2>
              <p className={styles.description}>
                Carne de alce, espinafre, azeitona, queijo parmesão, calabresa
                frita
              </p>
            </div>

            <p className={styles.price}>R$ 12,70</p>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.image}>
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
              alt="Imagem do produto"
            />
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <h2 className={styles.name}>Hambuguer de Padaria</h2>
              <p className={styles.description}>
                Carne de alce, espinafre, azeitona, queijo parmesão, calabresa
                frita
              </p>
            </div>

            <p className={styles.price}>R$ 12,70</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
