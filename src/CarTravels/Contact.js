import React from 'react'

const Contact = () => {
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
                <form >
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required></input>

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required></input>

                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required></input>

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="2" placeholder="Type your message here" required></textarea>

                  <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact