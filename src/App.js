import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import './Travel.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './CarTravels/Header';
import Footer from './CarTravels/Footer';
import Routing from './CarTravels/Routing';
import Store from './Components/Store';
import CustomerDetails from './CarTravels/admin/CustomerDetails';
import ViewCars from './CarTravels/admin/ViewCars';
import AddCar from './CarTravels/admin/AddCar';
import AddService from './CarTravels/admin/AddService';
import ViewService from './CarTravels/admin/ViewService';
import Contact from './CarTravels/Contact';
import Services from './CarTravels/Services';
import Cars from './CarTravels/Cars';
import NoPage from './CarTravels/NoPage';
import Login from './CarTravels/admin/Login';
export const loginStatus=createContext()
function App() {
  const [login,setLogin]=useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });
  }, []);
  return (
    <loginStatus.Provider value={[login,setLogin]}>
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
    </loginStatus.Provider>
  );
}

export default App;
