import React from 'react';

import styles from '../styles/home/Cart.module.css';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { isOpenCart, setIsOpenCart, containerRef, modalRef } =
    React.useContext(CartContext);

  function handleClickOutside(event) {
    if (event.target === containerRef.current) {
      setIsOpenCart(!isOpenCart);
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  if (!isOpenCart) return null;
  return (
    <section ref={containerRef} className={styles.cartContainer}>
      <div ref={modalRef} className={styles.cart}>
        <div className={styles.header}>
          <ShoppingCartSimple size={32} weight="duotone" />
          <h1 className={styles.title}>Carrinho</h1>
        </div>

        <ul className={styles.products}>
          <li className={styles.product}>
            <div className={styles.content}>
              <div className={styles.image}>
                <img
                  src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                  alt="Imagem do produto"
                />
              </div>

              <div className={styles.info}>
                <h2 className={styles.name}>2x Pizza de Farofa</h2>
                <p className={styles.price}>R$ 12, 70</p>
              </div>
            </div>

            <div className={styles.quantity}>
              <button>-</button>
              <p className={styles.count}>5</p>
              <button>+</button>
            </div>
          </li>

          <li className={styles.product}>
            <div className={styles.content}>
              <div className={styles.image}>
                <img
                  src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
                  alt="Imagem do produto"
                />
              </div>

              <div className={styles.info}>
                <h2 className={styles.name}>2x Pizza de Farofa</h2>
                <p className={styles.price}>R$ 12, 70</p>
              </div>
            </div>

            <div className={styles.quantity}>
              <button>-</button>
              <p className={styles.count}>5</p>
              <button>+</button>
            </div>
          </li>
        </ul>

        <div className={styles.footer}>
          <h3 className={styles.total}>Total R$ 30,62</h3>
          <Link className={styles.closeOrder} to={'/order'}>
            Fechar pedido
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
