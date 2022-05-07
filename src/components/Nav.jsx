import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartContext';

const Nav = () => {
    const {cartItem} =useContext(CartContext)
    console.log(cartItem);
  return (
    <>
        <nav class="navbar navbar-light bg-light sticky-top">
            <div class="container">
                <Link to='/' class="navbar-brand">
                    <img style={{height:60 } }  className='ml-5' src="/product-image/logo.png" alt="logo" />
                </Link>
                <ul className="d-flex">
                    <Link class="navbar-brand"  to="/">Home</Link>
                    <Link class="navbar-brand" to="/products">Products</Link>
                    <Link class="navbar-brand" to="/cart">
                        <Badge badgeContent={cartItem.totalitems ?cartItem.totalitems :0 } color="primary"><ShoppingCartIcon /></Badge>
                    </Link>
                </ul>
              
            </div>
        </nav>
    </>
  )
}

export default Nav