import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddCar from './admin/AddCar';

const Cars = () => {
    // const data = [
    //   {
    //     name: "Toyota Innova Crysta",
    //     type: "SUV",
    //     seatingCapacity: 7,
    //     features: [
    //       "Spacious Interior",
    //       "Advanced Safety Features",
    //       "Comfortable Seats",
    //       "Powerful Performance",
    //     ],
    //     pricePerDay: 3000,
    //   },
    //   {
    //     name: "Hyundai Verna",
    //     type: "Sedan",
    //     seatingCapacity: 5,
    //     features: [
    //       "Sleek Design",
    //       "Cutting-Edge Technology",
    //       "Refined Interiors",
    //       "Superior Fuel Efficiency",
    //     ],
    //     pricePerDay: 2000,
    //   },
    //   {
    //     name: "Toyota Fortuner",
    //     type: "SUV",
    //     seatingCapacity: 7,
    //     features: [
    //       "Commanding Presence",
    //       "Spacious Seating",
    //       "State-of-the-Art Features",
    //       "Built for Rugged Terrains",
    //     ],
    //     pricePerDay: 5000,
    //   },
    //   {
    //     name: "BMW X1",
    //     type: "Luxury SUV",
    //     seatingCapacity: 5,
    //     features: [
    //       "Sophisticated Design",
    //       "Plush Interiors",
    //       "High-End Performance",
    //       "Memorable Travel Experience",
    //     ],
    //     pricePerDay: 8000,
    //   },
    //   {
    //     name: "Maruti Suzuki Ertiga",
    //     type: "MPV",
    //     seatingCapacity: 7,
    //     features: [
    //       "Ample Seating",
    //       "Fuel Efficiency",
    //       "Reliable Performance",
    //       "Ideal for Family Outings",
    //     ],
    //     pricePerDay: 1800,
    //   },
    //   {
    //     name: "Audi Q7",
    //     type: "Luxury SUV",
    //     seatingCapacity: 5,
    //     features: [
    //       "Advanced Technology",
    //       "Spacious Cabin",
    //       "Superior Comfort",
    //       "Luxury and Power Combined",
    //     ],
    //     pricePerDay: 9000,
    //   },
    //     {
    //       name: "Volkswagen Polo",
    //       type: "Hatchback",
    //       seatingCapacity: 5,
    //       features: ["Compact Design", "Sporty Performance", "Comfortable Ride", "Fuel Efficiency"],
    //       pricePerDay: 1200
    //     },
    //     {
    //       name: "Hyundai i20",
    //       type: "Hatchback",
    //       seatingCapacity: 5,
    //       features: ["Stylish Design", "Comfortable Ride", "Modern Infotainment", "Fuel Efficiency"],
    //       pricePerDay: 1200
    //     },
    //     {
    //       name: "Tata Altroz",
    //       type: "Hatchback",
    //       seatingCapacity: 5,
    //       features: ["Bold Styling", "Spacious Cabin", "High Safety Rating", "Fuel Efficiency"],
    //       pricePerDay: 1300
    //     },
    //     {
    //       name: "Renault Triber",
    //       type: "MPV",
    //       seatingCapacity: 7,
    //       features: ["Compact Design", "Modular Seating", "Air Conditioning", "Budget Friendly"],
    //       pricePerDay: 1400
    //     },
    //     {
    //       name: "Maruti Suzuki Baleno",
    //       type: "Hatchback",
    //       seatingCapacity: 5,
    //       features: ["Premium Design", "Fuel Efficient", "Smartplay Infotainment", "Spacious Cabin"],
    //       pricePerDay: 1400
    //     },
    //     {
    //       name: "Nissan Magnite",
    //       type: "Compact SUV",
    //       seatingCapacity: 5,
    //       features: ["Bold Design", "Fuel Efficiency", "Smart Features", "Comfortable Ride"],
    //       pricePerDay: 1500
    //     },
    //     {
    //       name: "Maruti Suzuki Dzire",
    //       type: "Sedan",
    //       seatingCapacity: 4,
    //       features: ["Compact Design", "Fuel Efficient", "Air Conditioning", "Smooth Ride", "Automatic Climate Control"],
    //       pricePerDay: 1500
    //     },
    //     {
    //       name: "Honda Amaze",
    //       type: "Sedan",
    //       seatingCapacity: 5,
    //       features: ["Compact Design", "Refined Engine", "Comfortable Ride", "Fuel Efficient"],
    //       pricePerDay: 1600
    //     },
    //     {
    //       name: "Ford EcoSport",
    //       type: "Compact SUV",
    //       seatingCapacity: 5,
    //       features: ["Sporty Design", "Fuel Efficient", "Air Conditioning", "Smart Features"],
    //       pricePerDay: 1700
    //     },
    //     {
    //       name: "Maruti Suzuki Ertiga",
    //       type: "MPV",
    //       seatingCapacity: 7,
    //       features: ["Fuel Efficient", "Family Friendly", "Comfortable Seating", "Spacious Cabin"],
    //       pricePerDay: 1800
    //     },
    //     {
    //       name: "Tata Nexon",
    //       type: "Compact SUV",
    //       seatingCapacity: 5,
    //       features: ["Stylish Design", "Automatic Climate Control", "Touchscreen Infotainment", "Strong Build"],
    //       pricePerDay: 1800
    //     },
    //     {
    //       name: "Hyundai Verna",
    //       type: "Sedan",
    //       seatingCapacity: 4,
    //       features: ["Luxurious Interior", "Automatic Transmission", "Air Conditioning", "Modern Infotainment System"],
    //       pricePerDay: 2000
    //     },
    //     {
    //       name: "Honda City",
    //       type: "Sedan",
    //       seatingCapacity: 4,
    //       features: ["Refined Styling", "Spacious Cabin", "Advanced Safety Features", "Smooth Driving"],
    //       pricePerDay: 2200
    //     },
    //     {
    //       name: "Kia Seltos",
    //       type: "SUV",
    //       seatingCapacity: 5,
    //       features: ["Modern Styling", "Smart Connectivity", "Air Conditioning", "Spacious Interior"],
    //       pricePerDay: 2500
    //     },
    //     {
    //       name: "Hyundai Creta",
    //       type: "SUV",
    //       seatingCapacity: 5,
    //       features: ["Stylish Design", "Premium Features", "Spacious Cabin", "Smooth Performance"],
    //       pricePerDay: 2500
    //     },
    //     {
    //       name: "Mahindra Thar",
    //       type: "SUV",
    //       seatingCapacity: 4,
    //       features: ["Off-Road Capability", "Rugged Design", "Convertible Roof", "Powerful Engine"],
    //       pricePerDay: 2500
    //     },
    //     {
    //       name: "Toyota Innova Crysta",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Spacious Interior", "Air Conditioning", "Comfortable Seats", "Advanced Safety Features"],
    //       pricePerDay: 3000
    //     },
    //     {
    //       name: "Jeep Compass",
    //       type: "SUV",
    //       seatingCapacity: 5,
    //       features: ["Rugged Design", "Smooth Performance", "Modern Features", "Luxurious Interior"],
    //       pricePerDay: 3000
    //     },
    //     {
    //       name: "Mahindra XUV500",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Premium Comfort", "All-Terrain Capability", "Air Conditioning", "Ample Luggage Space"],
    //       pricePerDay: 3500
    //     },
    //     {
    //       name: "Tata Safari",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Spacious Interior", "Premium Comfort", "Strong Build", "Advanced Infotainment"],
    //       pricePerDay: 3500
    //     },
    //     {
    //       name: "Mahindra Scorpio N",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Rugged Performance", "Premium Features", "Spacious Interior", "Advanced Safety"],
    //       pricePerDay: 3500
    //     },
    //     {
    //       name: "Skoda Superb",
    //       type: "Sedan",
    //       seatingCapacity: 5,
    //       features: ["Premium Interior", "Powerful Engine", "Luxury Features", "Spacious Cabin"],
    //       pricePerDay: 4000
    //     },
    //     {
    //       name: "Ford Endeavour",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Powerful Engine", "Advanced Safety", "Premium Interior", "Off-Road Capability"],
    //       pricePerDay: 4500
    //     },
    //     {
    //       name: "Toyota Fortuner",
    //       type: "SUV",
    //       seatingCapacity: 7,
    //       features: ["Luxury Features", "Off-Road Capability", "Powerful Engine", "Premium Interior"],
    //       pricePerDay: 5000
    //     },
    //     {
    //       name: "Kia Carnival",
    //       type: "Luxury MPV",
    //       seatingCapacity: 7,
    //       features: ["Premium Comfort", "Spacious Cabin", "Luxury Features", "Modern Connectivity"],
    //       pricePerDay: 5000
    //     },
    //     {
    //       name: "Toyota Camry",
    //       type: "Luxury Sedan",
    //       seatingCapacity: 5,
    //       features: ["Elegant Design", "Premium Comfort", "Hybrid Engine", "Luxurious Features"],
    //       pricePerDay: 6000
    //     },
    //     {
    //       name: "BMW X1",
    //       type: "Luxury SUV",
    //       seatingCapacity: 5,
    //       features: ["Premium Features", "Luxurious Ride", "Advanced Safety Systems", "Modern Design"],
    //       pricePerDay: 8000
    //     },
    //     {
    //       name: "Audi Q3",
    //       type: "Luxury SUV",
    //       seatingCapacity: 5,
    //       features: ["Quattro Drive", "Luxurious Interior", "Advanced Infotainment", "Smooth Performance"],
    //       pricePerDay: 9000
    //     },
    //     {
    //       name: "Tesla Model 3",
    //       type: "Electric Sedan",
    //       seatingCapacity: 5,
    //       features: ["Electric Powertrain", "Autopilot Features", "Luxurious Interior", "Eco-Friendly"],
    //       pricePerDay: 9000
    //     },
    //     {
    //       name: "Mercedes-Benz C-Class",
    //       type: "Luxury Sedan",
    //       seatingCapacity: 5,
    //       features: ["Elegant Design", "Premium Comfort", "Advanced Safety", "Luxury Features"],
    //       pricePerDay: 10000
    //     }
      
    //   ];
     const [car,setCar]=useState([])
     useEffect(()=>{
      axios.get(`http://localhost:4000/Cars`)
      .then((res)=>setCar(res.data))
      .catch((err)=>console.log(err))
     }) 
  return (
    <section className='container cars p-5 mt-5'>
        <h2>Choose from a Wide Range of Vehicles Tailored to Your Needs</h2>
        <p><strong>At AK Car Travels</strong>, we take pride in offering a diverse fleet of well-maintained vehicles to suit every travel requirement. Whether you're looking for a compact car for a city ride, a spacious SUV for a family trip, or a luxury sedan for a special occasion, we have the perfect vehicle for you. Explore our options and book the car that fits your journey best.</p>
        <h1 className='text-center'>{car.length}+ Cars <i className="bi bi-car-front-fill"></i></h1>
        <div className='row mt-5'>
            {
                car.map((car,index) => {
                    return (
                        <div data-aos="zoom-in" key={index} className='col-md-4 mb-3'>
                            <div className='card'>
                                <h4 className='px-3 py-2 m-0'><strong>{car.name}</strong></h4>
                                <div className='card-body'>
                                  <p className='px-3 pt-3 m-0'><strong>Type:</strong> {car.type}</p>
                                  <p className='px-3 py-2 m-0'><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
                                  <p className='px-3 py-2 m-0'><strong>Features:</strong> {car.features.toString()}</p>
                                  <p className='px-3 py-2 pb-3 m-0'><strong>Price Per Day:</strong> {car.pricePerDay}₹</p>
                                  <div className="d-flex justify-content-center pb-3">
                                    <button className='btn btn-primary' type="submit" value="Submit">Book Now <i className="bi bi-car-front-fill mx-2"></i></button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cars