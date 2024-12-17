import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollTop';
import Home from './Home';
import About from './About';
import Services from './Services';
import Cars from './Cars';
import Contact from './Contact';
import NoPage from './NoPage';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

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
      <Route path='/admin' Component={Login} />
      <Route path='*' Component={NoPage} />
      <Route path="/Dashboard" Component={Dashboard}/>
    </Routes>
    </>
  );
}

export default Routing;
