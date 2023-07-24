import React from 'react';
import styles from './style/Hero.module.css';
import { Alarm, MapTrifold, WhatsappLogo } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section className={`${styles.heroContainer} sectionContainer`}>
      <div className={styles.hero}>
        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1543373072-69f3d4788832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="imagem do estabelecimento"
          />
        </div>

        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.title}>Marapira Lanches</h1>
            <span className={styles.feedbackHours}>aberto</span>
          </div>

          <ul className={styles.info}>
            <li className={styles.item}>
              <Alarm size={32} weight="duotone" />
              <p>Seg à Sexta 19h - 23h</p>
            </li>

            <li className={styles.item}>
              <MapTrifold size={32} weight="duotone" />
              <p>Marapira, Castelo Branco, 299</p>
            </li>
          </ul>

          <a href="#" className={styles.button}>
            <WhatsappLogo size={32} weight="duotone" />
            <p>Fale com a gente</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
