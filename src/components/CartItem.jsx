import React,{useContext} from 'react'
import { CartContext } from '../CartContext'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
const CartItem = ({item1,val}) => {
    const delbtn = {
        background:"rgb(233, 96, 50)",
        color:"white",
        cursor:"pointer",
        width:60
    }
    const incbtn ={
        width:30,
        height:30,
        borderRadius:25,
        color:"white"
    }
    const {cartItem,setCartItem} = useContext(CartContext);
    // Increase number of items 
    const inc = (id,prize)=>{
        let existNo = cartItem.items[id];
        let exitamount = cartItem.amount;
        let _cart = {...cartItem}
        _cart.items[id] = existNo+1;
        _cart.amount = exitamount+prize;
        _cart.totalitems +=1;
        setCartItem(_cart)
    }
    // decrease number of items
    const dec = (id,prize)=>{
        let existNo = cartItem.items[id];
        let exitamount = cartItem.amount;
        if(existNo===1) return;
        let _cart = {...cartItem}
        _cart.items[id] = existNo-1;
        _cart.amount = exitamount-prize;
        _cart.totalitems -=1;
        setCartItem(_cart)
    }
    // get sum
    const getSum = (id,prize)=>{
        return prize*cartItem.items[id]
    }
    // delete item
    const deleteItem=(id,prize)=>{
        let _cart = {...cartItem}
        let noItem = _cart.items[id]
        delete _cart.items[id];
        _cart.totalitems -=noItem;
        _cart.amount -=noItem*prize;
        _cart.totalId.map(item=>{
            if(item.id === id){
                delete item.id
            }
        })
        setCartItem(_cart)
        console.log("delete item");
    }
  return (
    <> 
        <div className="container p-2 shadow m-2">
            <div className="row d-flex text-center align-items-center justify-content-center">
                <div className="col-1">
                <img className='shadow' src={item1.img} alt="" style={{width: 60,height:60}} />
                </div>
                <div className="col-1">
                    {item1.name}
                </div>
                <div className="col-2 d-flex">
                    <div className="col"  onClick={()=>dec(item1.id,item1.prize)} ><RemoveSharpIcon  className='bg-primary'  style={incbtn} /></div>
                    <div className="col">{val}</div>
                    <div className="col"  onClick={()=>inc(item1.id,item1.prize)}><AddSharpIcon className='bg-primary'  style={incbtn} /></div>
                </div>
                <div className="col-2">
                    &#8377; {getSum(item1.id ,item1.prize)}
                </div>
                <div className="col-2 ">
                    <button onClick={()=>deleteItem(item1.id,item1.prize)} className='border-0 rounded-pill shadow' style={delbtn} >Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartItem