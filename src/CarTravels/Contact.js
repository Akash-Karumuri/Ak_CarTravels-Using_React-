import axios from 'axios';
import React, { useState } from 'react'
import CustomerDetails from './admin/CustomerDetails';

const Contact = () => {
  const [fname,setfName]=useState("")
  const [lname,setlName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/CustomerData` ,{fname,lname,email,phone})
    .then((res)=>alert("Details Submitted Successfully"))
    .catch((err)=>console.log(err))
  }
  return (
    <section className='contact-page p-5 container-fluid'>
        <div className='row px-5'>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Get in Touch with <strong>AK Car Travels</strong></h2>
                <p>We’re here to assist you with all your travel needs. Reach out to us anytime!</p>
                <h2 className='mt-5'>Contact Information:</h2>
                <h4><i className="bi bi-telephone-fill"></i> Phone:</h4>
                <p>Call us at <strong>+91-9392968885</strong> for instant bookings or inquiries. Our lines are open 24/7 to serve you better</p>
                <h4><i className="bi bi-envelope-at-fill"></i> Email:</h4>
                <p>Drop us an email at <strong>info@akcartravels.com</strong>, and we’ll get back to you within 24 hours.</p>
                <h4><i className="bi bi-geo-alt-fill"></i> Address:</h4>
                <p>AK Car Travels, <br></br>
                Plot No. 123, Main Road, <br></br>
                New Delhi, India – 110001.</p>
            </div>
            <div className='col-sm-12 col-lg-6 p-5 mt-5'>
                <h2>Inquiry Form</h2>
                <p>Use the form below to send us your queries or feedback.</p>
                <form onSubmit={submitHandler}>
                  <label htmlFor="name">First Name: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setfName(e.target.value)} type="text" id="fname" name="fname" placeholder="Enter your first name" className='from-control' required></input>
                  <label htmlFor="name">Last Name: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setlName(e.target.value)} type="text" id="lname" name="lname" placeholder="Enter your last name" className='from-control' required></input>
                  <label htmlFor="email">Email: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" className='from-control' required></input>
                  <label htmlFor="phone">Phone Number: <span className='text-danger'>*</span></label>
                  <input onChange={(e)=>setPhone(e.target.value)} type="tel" id="phone" name="phone" placeholder="Enter your phone number" className='from-control' required></input>
                  <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact