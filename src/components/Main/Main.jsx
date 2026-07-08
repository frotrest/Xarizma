import React from 'react';
import Hero from './Hero/Hero';
import Halls from './Halls/Halls';
import Advantages from './Advantages/Advantages';
import BookingSteps from './Renting/Renting';
import Questions from './Questions/Questions';

const Main = () => {
  return (
    <main>
      <Hero />
      <Halls />
      <Advantages />
      <BookingSteps />
      <Questions />
    </main>
  );
};

export default Main;
