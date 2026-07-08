import React from 'react';
import styles from './halls.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import Hall from '@assets/hall.webp';

const Halls = () => {
  return (
    <section className={clsx(styles.halls)}>
      <Container className={clsx(styles.hallsContent)} dataAnimate="fadeInLeft">
        <h2 className={clsx(styles.hallsContentTitle)}>Наши залы</h2>
        <p className={clsx(styles.hallsContentItem)}>
          Ознакомтесь с атмосферой праздника
        </p>
        <button className={clsx(styles.hallsContentBtn)}>
          Забронировать онлайн
        </button>
      </Container>
    </section>
  );
};

export default Halls;
