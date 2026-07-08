import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import Container from '../Container';
import Logo from '@assets/logo.webp';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import {
  IoLocationSharp,
  IoMenuOutline,
  IoCloseOutline,
} from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className={clsx(styles.header)}>
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <img
          src={Logo}
          alt="logo"
          fetchPriority="high"
          className={clsx(styles.headerContentLogo)}
        />
        <div className={clsx(styles.personalInfo)}>
          <a href="tel:+380979709090" className={clsx(styles.personalInfoItem)}>
            <div className={clsx(styles.personalInfoImg)}>
              <BsFillPhoneVibrateFill
                className={clsx(styles.personalInfoItemImg)}
                size={30}
              />
            </div>
            +38 (097) 970-90-90
          </a>
          <a href="#" className={clsx(styles.personalInfoItem)}>
            <div className={clsx(styles.personalInfoImg)}>
              <IoLocationSharp
                className={clsx(styles.personalInfoItemImg)}
                size={30}
              />
            </div>
            м. Лубянка
          </a>
        </div>
        <div className={clsx(styles.headerBtns)}>
          <button className={clsx(styles.headerBtnsItem)}>Наши залы</button>
          <button className={clsx(styles.headerBtnsItem)}>Забронировать</button>
        </div>
        {/* Mobile-burger menu */}
        <button className={clsx(styles.burgerBtn)} onClick={toggleMenu}>
          <IoMenuOutline size={30} />
        </button>
        <div
          className={clsx(
            styles.mobileOverlay,
            isOpen && styles.mobileOverlayOpen
          )}
        >
          <div className={clsx(styles.mobileMenuHeader)}>
            <img
              src={Logo}
              alt="logo-mobile"
              loading="lazy"
              className={clsx(styles.headerContentLogo)}
            />
            <button
              className={clsx(styles.burgerCloseBtn)}
              onClick={toggleMenu}
            >
              <IoCloseOutline size={30} />
            </button>
          </div>

          <nav className={clsx(styles.mobileNavLinks)}>
            <div className={clsx(styles.mobileNavLinks)}>
              <a
                href="tel:+380979709090"
                className={clsx(styles.mobileNavLink)}
              >
                <div className={clsx(styles.personalInfoImg)}>
                  <BsFillPhoneVibrateFill
                    className={clsx(styles.personalInfoItemImg)}
                    size={30}
                  />
                </div>
                +38 (097) 970-90-90
              </a>
              <a href="#" className={clsx(styles.mobileNavLink)}>
                <div className={clsx(styles.personalInfoImg)}>
                  <IoLocationSharp
                    className={clsx(styles.personalInfoItemImg)}
                    size={30}
                  />
                </div>
                м. Лубянка
              </a>
            </div>
            <div className={clsx(styles.mobileHeaderBtns)}>
              <button className={clsx(styles.mobileHeaderBtnsItem)}>
                Наши залы
              </button>
              <button className={clsx(styles.mobileHeaderBtnsItem)}>
                Забронировать
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
