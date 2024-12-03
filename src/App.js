import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
      mirror: false,
    });
  }, []);
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
