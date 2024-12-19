import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='container p-5'>
        <h1 className='text-center'>Welcome to Ak Car Travels</h1>
        <div data-aos="fade-right" className='col-sm-12 p-5'>
            <h2 className='display-4 mt-3'>Travel with Comfort, Style, and Safety</h2>
            <p>Experience premier car rental services tailored for your travel needs. Enjoy unparalleled comfort, reliability, and affordability on every ride. Whether it's a business trip or a family getaway, we've got you covered with our extensive fleet.</p>
            <p>Welcome to <strong>AK Car Travels</strong>, where every journey begins with trust, comfort, and style. Whether you need a quick airport transfer, a luxurious ride for business meetings, or an adventurous road trip, we are here to make it happen. Choose from our wide fleet of well-maintained vehicles and experience a seamless travel service tailored to your needs.</p>
            <NavLink to="/About" className="text-decoration-none text-primary me-3">Know More <i className="bi bi-chevron-right"></i></NavLink>
            <NavLink to="/Cars" className="btn btn-primary">Book Now <i className="bi bi-chevron-right"></i></NavLink>
        </div>
    </div>
  )
}

export default Welcome