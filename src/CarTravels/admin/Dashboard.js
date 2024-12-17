import React, { useState } from 'react'
import AddService from './AddService'
import Welcome from './Welcome'
import ViewService from './ViewService';
import AddCar from './AddCar';
import ViewCars from './ViewCars';
import CustomerDetails from './CustomerDetails';

const Dashboard = () => {
    const [view,setView]=useState("");
    const DashboardView=()=>{
        if (view === "") {
            return <Welcome />;
        } 
        else if (view === "AddService") {
            return <AddService />;
        } else if (view === "ViewService") {
            return <ViewService />;
        } 
        else if (view === "AddCar") {
            return <AddCar />;
        } 
        else if (view === "ViewCars") {
            return <ViewCars />;
        } 
        else if (view === "CustomerDetails") {
            return <CustomerDetails />;
        } 
        else {
            return <h2 className='m-5'>Invalid View</h2>;
        }
    }
    

  return (
    <div className='container-fluid dashboard mt-5'>
        <div className='row'>
            <aside className='col-lg-2 pt-5 px-2 text-center'>
                <h3 onClick={()=>setView("")} className='mb-3'>Admin Dashboard</h3>
                <button onClick={()=>setView("AddService")} >Add Service</button>
                <button onClick={()=>setView("ViewService")} >View Services</button>
                <button onClick={()=>setView("AddCar")} >Add Car</button>
                <button onClick={()=>setView("ViewCars")} >View Cars</button>
                <button onClick={()=>setView("CustomerDetails")} >View Customers</button>
            </aside>
            <div className='col-lg-10'>
                {DashboardView()}
            </div>
        </div>
    </div>
  )
}

export default Dashboard