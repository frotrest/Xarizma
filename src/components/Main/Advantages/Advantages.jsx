import React from 'react';
import styles from './advantages.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import {
  TbJacket,
  TbVinyl,
  TbUsersGroup,
  TbCashOff,
  TbTargetArrow,
  TbBottle,
  TbCircleCheck,
} from 'react-icons/tb';

const Advantages = () => {
  const benefits = [
    {
      benefitTitle: 'Никакого дресс-контроля',
      Icon: TbJacket,
      points: [],
    },
    {
      benefitTitle: '~ 40.000 песен в сет листе',
      Icon: TbVinyl,
      points: [
        'Более 50.000 студийных фонограмм',
        'Ежемесячное обновления репертуара',
      ],
    },
    {
      benefitTitle: 'Индивидуальные залы',
      Icon: TbUsersGroup,
      points: ['Только Ваша компания'],
    },
    {
      benefitTitle: 'Без депозита',
      Icon: TbCashOff,
      points: ['Мы не берем депозит', 'Оплата происходит за человека в час'],
      highlights: ['Мы не берем депозит'],
    },
    {
      benefitTitle: 'В самом центре Москвы',
      Icon: TbTargetArrow,
      points: ['м. Лубянка'],
    },
    {
      benefitTitle: 'Нет пробкового сбора',
      Icon: TbBottle,
      points: [
        'Можно приносить с собой еду, напитки и алкоголь без пробкового сбора',
      ],
      highlights: ['без пробкового сбора'],
    },
  ];
  return (
    <section className={clsx(styles.advantages)}>
      <Container
        className={clsx(styles.advantagesContent)}
        dataAnimate="fadeInRight"
      >
        <h2 className={clsx(styles.advantagesContentTitle)}>
          Наши преимущества
        </h2>
        <p className={clsx(styles.advantagesContentItem)}>
          Почему гости выбирают нас
        </p>
        <div className={clsx(styles.cards)}>
          {benefits.map((item, i) => (
            <div className={styles.card} key={i}>
              <item.Icon size={60} color="#E8954A" />
              <h3 className={styles.cardTitle}>{item.benefitTitle}</h3>
              {item.points.length > 0 && (
                <ul className={styles.points}>
                  {item.points.map((point, j) => (
                    <li key={j} className={styles.point}>
                      <TbCircleCheck
                        size={15}
                        color="#E8954A"
                        className={styles.pointIcon}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.highlights
                            ? item.highlights.reduce(
                                (str, h) =>
                                  str.replace(
                                    h,
                                    `<span class="${styles.highlight}">${h}</span>`
                                  ),
                                point
                              )
                            : point,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
