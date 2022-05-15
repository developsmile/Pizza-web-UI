import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Sign from './pages/Sign'
import SingleProduct from './pages/SingleProduct'
import { CartContext } from './CartContext'
import Register from './pages/Register'
const App = () => {
  const [cartItem, setCartItem] = useState({});
  const [ItemId,setItemId] = useState([]);
  useEffect(()=>{
    let cart = window.localStorage.getItem('cart');
    setCartItem(JSON.parse(cart))
  },[])
  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cartItem))
  },[cartItem])
  console.log(ItemId);
  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{cartItem,setCartItem}}>
          <Nav />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/products' element={ <Products /> } />
            <Route path='/products/:id' element={ <SingleProduct /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/signin' element={ <Sign /> } />
            <Route path='/register' element={ <Register /> } />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App