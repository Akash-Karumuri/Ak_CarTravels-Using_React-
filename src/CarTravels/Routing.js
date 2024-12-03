import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import Home from './Home';
import About from './About';
import Services from './Services';
import Cars from './Cars';
import Contact from './Contact';

const Routing = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/services' Component={Services} />
      <Route path='/cars' Component={Cars} />
      <Route path='/contact' Component={Contact} />
    </Routes>
    </>
  );
}

export default Routing;
