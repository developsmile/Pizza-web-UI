import React from 'react'
import Products from './Products'
import '../css/Home.css'
const Home = () => {
  return (
    <>
        <div className="home-container">
          <div className="left">
            <img src="/product-image/9.png" alt=""  />
          </div>
          <div className="right">
              <p>Are you Hungry ?</p>
              <h1>Don't wait !</h1>
              <button>Order now</button>
          </div>
        </div>
        <Products />
    </>
  )
}

export default Home