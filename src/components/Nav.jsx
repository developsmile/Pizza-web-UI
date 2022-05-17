import React, { useContext, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import '../css/Nav.css'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../CartContext';
const Nav = () => {
    const {cartItem} =useContext(CartContext)
    const [show,setShow] = useState(false);
    const showbar  = ()=>{
        setShow(!show)
    }
  return (
    <>
        <nav class="sticky-top">
                <Link to='/' class="navbar-logo">
                    <img className='ml-5' src="/product-image/logo.png" alt="logo" />
                </Link>
                <ul className={`${show ? "show" :""}`}>
                    <Link onClick={()=>setShow(!show)}  to="/">Menu</Link>
                    <Link onClick={()=>setShow(!show)} to="/products">Products</Link>
                    <Link onClick={()=>setShow(!show)} to="/offers">Offers</Link>
                    <Link onClick={()=>setShow(!show)} to="/myorders">My Orders</Link>
                    <Link onClick={()=>setShow(!show)} to="/register">Register</Link>
                    <Link onClick={()=>setShow(!show)} to="/signin">Signin</Link>
                    <Link onClick={()=>setShow(!show)} to="/logout">Logout</Link>
                    <Link className='cart-icon' to="/cart">
                        <Badge badgeContent={cartItem.totalitems ?cartItem.totalitems :0 }><ShoppingCartIcon /></Badge>
                    </Link>
                </ul>
                
                <input type="checkbox" id='check' />
                <label for="check" className='nav-icon' >
                    <Link className='cart-icon' to="/cart">
                            <Badge badgeContent={cartItem.totalitems ?cartItem.totalitems :0 }><ShoppingCartIcon /></Badge>
                    </Link>
                    <MenuIcon className='menu-icon' onClick={showbar} />
                </label>
        </nav>
    </>
  )
}

export default Nav