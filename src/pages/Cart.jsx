import React, { useContext } from "react";
import "../css/Cart.css";
import { CartContext } from "../CartContext";
import CartItem from "../components/CartItem";
import { ProductData } from "../Data/ProductData";
const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const handleOrder = () => {
    window.alert("Your Order are placed...");
    setCartItem({});
  };
  return !cartItem.items ? (
    <img src="/product-image/emptycart.png" alt="" className="empty-img" />
  ) : (
    <>
        <div className="cart-caption">Order summary</div>
      {" "}
      <div className="cart-container">
        <div className="">
          {cartItem.totalId.map((item) => {
            let val = cartItem.items[item.id];
            return ProductData.map(
              (item1) =>
                Number(item.id) === item1.id && (
                  <CartItem item1={item1} val={val} />
                )
            );
          })}
        </div>
      </div>
      <hr style={{width:"80%" , margin:"10px auto"}}/>
        <div className="cart-amount">
          <div className="amount">Total : &#8377; {cartItem.amount}</div>
          <button onClick={handleOrder}>Order now </button>
        </div>
    </>
  );
};

export default Cart;
