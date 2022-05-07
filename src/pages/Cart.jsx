import React, { useContext} from 'react'
import { CartContext } from '../CartContext'
import CartItem from '../components/CartItem'
import { ProductData } from '../Data/ProductData'
const Cart = () => {
  const hi = {
    height:300,
    overflow:"scroll",
    overflowX:"hidden"
  }
  const {cartItem,setCartItem} = useContext(CartContext) 
 
  console.log(cartItem);
  const handleOrder = ()=>{
    window.alert("Your Order are placed...")
    setCartItem({});
  }
  return (
      !cartItem.items ? <img src="/product-image/emptycart.png" alt="" className='m-auto d-flex ' /> : <>  <div className="container p-5" >
      <div className="row  fs-4">
          Cart items
      </div>
      <div className="row m-3" style={hi}>

        {
          cartItem.totalId.map(item =>{
            let val = cartItem.items[item.id]
            return(
              ProductData.map(item1 =>
                Number(item.id)===item1.id && <CartItem item1={item1} val={val} />
              )
            )
            
          })
      
            
        }
      </div>
      <hr />
      <div className="row d-flex justify-content-end m-3">
        <div className="col-2 text-center">
        Total : &#8377; {cartItem.amount}
        </div>
      </div>
      <div className="row d-flex justify-content-end m-3">
        <button onClick={handleOrder} className='btn btn-dark col-2 rounded-pill shadow'>Order now </button>
      </div>
    </div>  
    </>
  )
}

export default Cart