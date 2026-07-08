import React from 'react';
import styles from './footer.module.css';
import clsx from 'clsx';
import Container from '../Container';
import FooterLogo from '@assets/logo.webp';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  const footerBar = [
    {
      FooterBarIcon: BsFillPhoneVibrateFill,
      footerBarTitle: '+38 (097) 970-90-90',
      footerBarLink: 'tel:+380979709090',
    },
    {
      FooterBarIcon: FaCalendarAlt,
      footerBarTitle: 'Пн — Вс круглосуточно',
      footerBarLink: '#',
    },
  ];
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <img
          src={FooterLogo}
          alt="footer-logo"
          loading="lazy"
          className={clsx(styles.footerContentImg)}
        />
        <nav className={clsx(styles.footerNavBar)}>
          {footerBar.map((item, index) => (
            <div key={index} className={clsx(styles.footerNavBarBlockItem)}>
              <div className={clsx(styles.footerImgBlock)}>
                <item.FooterBarIcon size={30} color="rgba(96, 101, 113, 1)" />
              </div>
              <a
                href={item.footerBarLink}
                className={clsx(styles.footerNavBarLink)}
              >
                {item.footerBarTitle}
              </a>
            </div>
          ))}
        </nav>
        <button className={clsx(styles.footerContentBtn)}>
          Построить маршрут
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
