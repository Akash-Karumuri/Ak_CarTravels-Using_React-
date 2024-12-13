import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Store = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err))
    })
  return (
    <div className='container p-5 products-page'>
        <h2 className='text-center mb-5 text-decoration-underline'>Products Page</h2>
        {
            products.map((product,index)=>{
                return (
                    <div key={index}>
                        <div className='row mb-5'>
                            <div className='col-sm-12 col-xl-4 p-3 center'>
                                <p>{product.id}.</p>
                                <img className='w-75 ms-5 p-5' src={product.image}></img>
                            </div>
                            <div className='col-sm-12 col-xl-8 product-details p-5'>
                                <h4>{product.title}</h4>
                                <p>{product.description}</p>
                                <p><strong>Category:</strong> {product.category}</p>
                                <div className='rating-sec'>
                                    <p className='me-3'><strong>Rating:</strong> {product.rating.rate}/5 <i className="bi bi-star-fill"></i></p>
                                    <p><strong>No.of Customers:</strong> {product.rating.count}</p>
                                </div>
                                <p><strong>Price:</strong> <strong className='text-success price'>{product.price}<i class="bi bi-currency-dollar"></i></strong></p>
                                <button className='btn btn-primary'>BooK Now <i className="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Store