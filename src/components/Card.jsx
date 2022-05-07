import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
export const cart =[]
export const addbtn={
    borderRadius:25,
    width:60,
    color:"white",
    cursor:"pointer"
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
        <div className="card m-auto mt-5 mr-3 shadow " style={{width: 200}}>
            <Link to={`/products/${item.id}`} ><img src={item.img} className="card-img-top" alt={item.img} style={{width: 200 ,height:150}} /></Link>
            <h5 className="card-title text-center">{item.name}</h5>
            <p className="card-text m-auto text-center " style={sizebtn}> {item.size} </p>
            <div className="d-flex justify-content-between p-2">
                <p className="">&#8377; {item.prize}</p>
                <p disabled={!added} onClick={(e)=>addCart(e,item.prize)} className={`${added ? "bg-primary" : "bg-success"} text-center shadow`} style={addbtn}>{added ? "Add" :"Added"}</p>
            </div>
        </div>
    </>
  )
}

