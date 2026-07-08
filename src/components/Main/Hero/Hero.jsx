import React from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Dance from '@assets/dance.webp';
import Advertisement from '@assets/advertisement.webp';
import {
  TbMicrophone,
  TbSpray,
  TbCreditCard,
  TbConfetti,
} from 'react-icons/tb';

const Hero = () => {
  const advantages = [
    'Если хочешь попеть и оторваться',
    'Отдохнуть после работы',
    'Хорошо провести время',
  ];
  const features = [
    {
      featureImg: TbMicrophone,
      featureText: 'Профессиональное караоке AST-50',
    },
    {
      featureImg: TbSpray,
      featureText: 'Без пробкового сбора',
    },
    {
      featureImg: TbCreditCard,
      featureText: 'Без депозита',
    },
    {
      featureImg: TbConfetti,
      featureText: 'Скидка в День Рождения',
    },
  ];
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <h2 className={clsx(styles.heroContentSubTitle)}>
          Арендуй Караоке-Зал до 10 человек
        </h2>
        <h1 className={clsx(styles.heroContentTitle)}>
          возьми алкоголь и еду с собой
        </h1>
        <div className={clsx(styles.heroAdvantages)}>
          {advantages.map((item, index) => (
            <h5 className={clsx(styles.heroAdvantagesTitle)} key={index}>
              <IoIosCheckmarkCircle color="rgba(96, 101, 113, 1)" size={50} />
              {item}
            </h5>
          ))}
        </div>
        <button className={clsx(styles.heroAdvantagesBtn)}>
          Забронировать онлайн
        </button>
        <img
          src={Dance}
          alt="dance"
          fetchPriority="high"
          className={clsx(styles.danceIcon)}
        />
        <img
          src={Advertisement}
          alt="advertisement"
          className={clsx(styles.advertisementIcon)}
          fetchPriority="high"
        />
      </Container>
      <div className={clsx(styles.features)}>
        {features.map((item, index) => {
          const FeatureIcon = item.featureImg;
          return (
            <div className={clsx(styles.featureItem)} key={index}>
              <FeatureIcon className={clsx(styles.featureIcon)} />
              <span className={clsx(styles.featureDivider)} />
              <p className={clsx(styles.featureText)}>{item.featureText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
