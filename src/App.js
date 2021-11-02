import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { SliderData } from "./data/SliderData";
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />

    </>
  );
}

export default App;
