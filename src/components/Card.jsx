import React,{useContext, useState} from 'react'
import '../css/Card.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
export const cart =[]
export const addbtn={
    borderRadius:25,
    width:60,
    color:"white",
    cursor:"pointer",
    background:"#05595B"
}
const sizebtn ={
    background:"grey",
    borderRadius:25,
    width:70,
    color:"white"
}
export function Card({item}) {
    const {cartItem,setCartItem} = useContext(CartContext)
    const [added,setAdded] = useState(true)
    const addCart = (e,prize)=>{
        e.preventDefault();
        let _cart = {...cartItem}
        if(!_cart.items){
            _cart.items = {};
            _cart.totalId=[];
            _cart.amount=0;
        }
        if(_cart.items[item.id]){
            _cart.items[item.id] += 1;
            _cart.amount+=prize;
        }else{
             _cart.items[item.id]=1;
             _cart.amount+=prize;
             _cart.totalId.push({"id":item.id})
            }
        if(!_cart.totalitems){ 
            _cart.totalitems=0
        }
        _cart.totalitems += 1;
        setCartItem(_cart);
        setAdded(false);
        setTimeout(()=>{
            setAdded(true)
        },500)
        console.log(cartItem);
    }
  return (
    <>
        <div className="card-container" >
            <Link to={`/products/${item.id}`} ><img src={item.img}  alt={item.img} /></Link>
            <h5 className="product-name">{item.name}</h5>
            <p className="product-size" style={sizebtn}> {item.size} </p>
            <div className="product-prize">
                <p className="">&#8377; {item.prize}</p>
                <p onClick={(e)=>addCart(e,item.prize)} className={`${!added && "bg-success"} text-center shadow`} style={addbtn}>{added ? "Add" :"Added"}</p>
            </div>
        </div>
    </>
  )
}

