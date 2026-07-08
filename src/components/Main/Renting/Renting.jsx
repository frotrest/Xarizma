import React from 'react';
import styles from './renting.module.css';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  TbUsers,
  TbCalendar,
  TbAlarm,
  TbBuildingStore,
  TbBrandTelegram,
} from 'react-icons/tb';
import 'swiper/css/effect-coverflow';
import Phone1 from '@assets/steps/first-step.webp';
import Phone2 from '@assets/steps/second-step.webp';
import Phone4 from '@assets/steps/fourth-step.webp';
import Phone5 from '@assets/steps/fifth-step.webp';
import Phone6 from '@assets/steps/sixth-step.webp';
import Container from '../../Container';

const STEPS = [
  {
    img: Phone1,
    Icon: TbBrandTelegram,
    label: 'Перейти в чат-бот',
    highlight: 'fh_harizma_bot',
  },
  {
    img: Phone2,
    Icon: TbUsers,
    label: 'Выбрать количество человек',
  },
  {
    img: Phone4,
    Icon: TbCalendar,
    label: 'Выбрать дату',
  },
  {
    img: Phone5,
    Icon: TbAlarm,
    label: 'Выбрать время старта брони',
  },
  {
    img: Phone6,
    Icon: TbBuildingStore,
    label: 'Выбрать зал',
  },
];

const BookingSteps = () => {
  return (
    <section className={styles.renting}>
      <Container
        className={clsx(styles.rentingContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.rentingContentTitle)}>
          Как забронировать зал?
        </h2>
        <p className={clsx(styles.rentingContentItem)}>
          бронирование по шагам в чат-боте
        </p>
      </Container>
      <Swiper
        effect={'coverflow'}
        slidesPerView={1}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1280: { slidesPerView: 2.5 },
        }}
        autoplay={{
          delay: 2000,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={clsx(styles.swiperSteps)}
        data-animate="fadeIn"
      >
        {STEPS.map((step, i) => (
          <SwiperSlide key={i}>
            <div className={clsx(styles.stepBlock)}>
              <div className={clsx(styles.stepImgBlock)}>
                <h2 className={clsx(styles.stepCounter)}>{i + 1}</h2>
                <img
                  src={step.img}
                  alt={`step-${i + 1}`}
                  loading="lazy"
                  className={styles.phoneImg}
                />
              </div>
              <div className={clsx(styles.stepLabel)}>
                <step.Icon color="rgba(246, 144, 32, 1)" size={30} />
                <div className={clsx(styles.stepLabelText)}>
                  <span className={clsx(styles.stepLabelLine)}>
                    {step.label}
                  </span>
                  {step.highlight && (
                    <>
                      <span className={clsx(styles.stepHighlight)}>
                        {step.highlight}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BookingSteps;
