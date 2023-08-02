import React from 'react';
import styles from '../styles/home/MenuProducts.module.css';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_GET } from '../../../Api';
import Loading from '../helper/Loading';

const MenuProducts = () => {
  const { data, request, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { url, options } = PRODUCT_GET();
      const { json } = await request(url, options);

      console.log(json);
    }
    fetchData();
  }, [request]);

  if (!data) return null;
  return (
    <section className={styles.menu}>
      <h1 className={styles.title}>Cardápio</h1>

      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img
                src={item.image_url}
                alt={`Imagem do produto ${item.product}`}
              />
            </div>

            <div className={styles.content}>
              <div className={styles.info}>
                <h2 className={styles.name}>{item.product}</h2>
                <p className={styles.description}>
                  Carne de alce, espinafre, azeitona, queijo parmesão, calabresa
                  frita
                </p>
              </div>

              <p className={styles.price}>R$ {item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
        {loading && <Loading />}
      </ul>
    </section>
  );
};

export default MenuProducts;
