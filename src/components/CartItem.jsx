import React, { useContext } from "react";
import "../css/Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../CartContext";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
const CartItem = ({ item1, val }) => {
  const { cartItem, setCartItem } = useContext(CartContext);
  // Increase number of items
  const inc = (id, prize) => {
    let existNo = cartItem.items[id];
    let exitamount = cartItem.amount;
    let _cart = { ...cartItem };
    _cart.items[id] = existNo + 1;
    _cart.amount = exitamount + prize;
    _cart.totalitems += 1;
    setCartItem(_cart);
  };
  // decrease number of items
  const dec = (id, prize) => {
    let existNo = cartItem.items[id];
    let exitamount = cartItem.amount;
    if (existNo === 1) return;
    let _cart = { ...cartItem };
    _cart.items[id] = existNo - 1;
    _cart.amount = exitamount - prize;
    _cart.totalitems -= 1;
    setCartItem(_cart);
  };
  // get sum
  const getSum = (id, prize) => {
    return prize * cartItem.items[id];
  };
  // delete item
  const deleteItem = (id, prize) => {
    let _cart = { ...cartItem };
    let noItem = _cart.items[id];
    delete _cart.items[id];
    _cart.totalitems -= noItem;
    _cart.amount -= noItem * prize;
    _cart.totalId.map((item) => {
      if (item.id === id) {
        delete item.id;
      }
    });
    setCartItem(_cart);
  };
  return (
    <>
      <div className="cartItem-container">
        <img src={item1.img} alt="" />
        <div className="cart-item-name">{item1.name}</div>
        <div className="cart-no-item">
          <div className="" onClick={() => dec(item1.id, item1.prize)}>
            <RemoveSharpIcon className="dec-btn" />
          </div>
          <div className="">{val}</div>
          <div className="" onClick={() => inc(item1.id, item1.prize)}>
            <AddSharpIcon className="add-btn" />
          </div>
        </div>
        <div className="cart-item-prize">
          &#8377; {getSum(item1.id, item1.prize)}
        </div>
        <DeleteIcon className="button" onClick={() => deleteItem(item1.id, item1.prize)} />
      </div>
    </>
  );
};

export default CartItem;
