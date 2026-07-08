import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useAnimateOnScroll } from './components/AnimateWatcher';

function App() {
  useAnimateOnScroll();
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
