import React from 'react';
import RentalNavbar from '../components/RentalNavbar.jsx';
import Dropdown from '../components/Dropdown.js';
import RentalSection from "../components/RentalSection";
import { RoomsData, RoomsData2, RoomsData3 } from "../data/RentalData";



const Rentals = () => {
  return (
     
<>

 <RentalSection {...RoomsData} />
 <RentalSection {...RoomsData2} />
 <RentalSection {...RoomsData3} />
</>

  )
}

export default Rentals