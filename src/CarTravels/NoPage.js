import React from 'react'
import ErrorPage from './assets/404-error-page.webp'
const NoPage = () => {
  return (
    <div className='container p-5 mt-5'>
        <img className='w-100' src={ErrorPage}></img>
    </div>
  )
}

export default NoPage