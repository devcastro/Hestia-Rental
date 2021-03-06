import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RentalNavbar from "./components/RentalNavbar";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { InfoData, InfoData2 } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import About from "./pages/About.js";
import Rentals from "./pages/Rentals.js"
import GlobalStyle from "./globalStyles";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Hero slides={SliderData} />
          <InfoSection {...InfoData} />
          <InfoSection {...InfoData2} />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        {" "}
        {/* ABOUT PAGE */}
        <Route path="/about">
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <About />
          <Footer />
        </Route>
      </Switch>

      <Switch>
        {" "}
        {/* RENTALS PAGE */}
        <Route path="/rentals" target="_blank" rel="noopener noreferrer">
        <RentalNavbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Rentals /> {/* CURRENTLY IN PROGRESS */}
          <Footer />
        </Route>
      </Switch>

      <Switch>
        {" "}
        {/* CUSTOMS PAGE */}
        <Route path="/customs">
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <About /> {/* TEMPORARY PLACEHOLDER */}
        </Route>
      </Switch>

      <Switch>
        {" "}
        {/* CONTACT US PAGE */}
        <Route path="/contact">
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <About /> {/* TEMPORARY PLACEHOLDER */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
