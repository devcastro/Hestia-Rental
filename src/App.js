import React from 'react';
import Navbar from './components/Navbar';
import { SliderData } from "./data/SliderData";
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';


function App() {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />

    </>
  );
}

export default App;
