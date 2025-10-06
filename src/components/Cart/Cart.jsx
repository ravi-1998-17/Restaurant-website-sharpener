import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>{[{id: "01", name: "Shahi Paneer", price: 250}].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <>
      <div>
        {cartItems}
        <div className={classes.total}><span>Total Amount</span>
        <span>160</span></div>
        <div className={classes.actions}>
            <button className={classes['buttons--alt']}>Close</button>
            <button className={classes.buttons}>Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
