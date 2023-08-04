import React from 'react';
import useFetch from '../../hooks/useFetch';
import { PRODUCT_GET } from '../../../Api';
import Loading from '../helper/Loading';

import styles from '../styles/home/MenuProducts.module.css';
import Product from './Product';

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
        {loading && <Loading />}
        {data.map((item) => (
          <Product key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
};

export default MenuProducts;
