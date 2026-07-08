import React, { useState } from 'react';
import styles from './questions.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';

const Questions = () => {
  const FAQ_DATA = [
    {
      question: 'Какое у вас караоке?',
      answer:
        'Более 50,000 студийных фонограмм. Из них 80% – оригинальные минусовки в качестве PRO (mp3 – WAV). Ежемесячное обновление репертуара. Более 10,000 специальных фонограмм в сопровождении оригинальных видеоклипов.',
    },
    {
      question: 'Есть ли у вас английские песни?',
      answer:
        'Да, у нас огромная база зарубежных исполнителей, которая обновляется вместе с релизами мировых чартов.',
    },
    {
      question: 'Можно ли подключить телефон?',
      answer:
        'Конечно, вы можете подключить свой телефон через Bluetooth или AUX-кабель, чтобы включить собственный плейлист.',
    },
    {
      question: 'Сколько микрофонов в каждом зале?',
      answer:
        'В каждом зале доступно по 2 беспроводных профессиональных микрофона. По запросу можем предоставить дополнительные.',
    },
    {
      question: 'Есть ли оплата картой?',
      answer:
        'Да, мы принимаем к оплате любые банковские карты, а также платежи через QR-код и бесконтактную оплату.',
    },
    {
      question: 'Можно приносить с собой алкоголь и еду?',
      answer:
        'Да, у нас действует система пробкового сбора. Подробные условия можно уточнить у администратора.',
    },
    {
      question: 'Как рассчитывается стоимость?',
      answer:
        'Стоимость рассчитывается почасово и зависит от выбранного зала, дня недели и времени бронирования.',
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState(null);
  const toggleAccordion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  return (
    <section className={clsx(styles.questions)}>
      <Container
        className={clsx(styles.questionsContent)}
        dataAnimate="fadeInUp"
      >
        <h2 className={clsx(styles.questionsContentTitle)}>Вопросы и ответы</h2>
        <p className={clsx(styles.questionsContentDescription)}>
          Мы подготовили ответы на часто задаваемые вопросы
        </p>
        <div className={clsx(styles.accordionList)}>
          {FAQ_DATA.map((item, index) => {
            const isOpen = activeQuestion === index;

            return (
              <div
                key={index}
                className={clsx(
                  styles.accordionItem,
                  isOpen && styles.accordionItemOpen
                )}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={clsx(styles.questionText)}>
                    {item.question}
                  </span>
                  <div
                    className={clsx(
                      styles.iconWrapper,
                      isOpen && styles.iconWrapperActive
                    )}
                  >
                    {isOpen ? (
                      <TbChevronUp size={20} color="rgba(255, 198, 25, 1)" />
                    ) : (
                      <TbChevronDown size={20} color="rgba(255, 198, 25, 1)" />
                    )}
                  </div>
                </button>
                <div
                  className={clsx(
                    styles.accordionCollapse,
                    isOpen && styles.accordionCollapseVisible
                  )}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                  }}
                >
                  <div className={clsx(styles.accordionBody)}>
                    <p className={clsx(styles.answerText)}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Questions;
