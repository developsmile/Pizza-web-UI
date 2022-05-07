import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <>
        <div className="container d-flex justify-content-around">
          <div className="left d-flex flex-column justify-content-center align-items-center">
              <p>Are you Hungry ?</p>
              <h1>Don't wait !</h1>
              <button className='btn btn-primary rounded-pill'>Order now</button>
          </div>
          <div className="right rounded-circle">
              <img src="/product-image/9.png" alt="" />
          </div>
        </div>
        <Products />
    </>
  )
}

export default Home