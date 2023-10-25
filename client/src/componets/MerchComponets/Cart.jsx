import React from "react";


const Cart = ({ cartItems, handleCheckout, handleDelete }) => {
  const totalValue = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <div>
        <h2>Shopping Cart</h2>
        <div className="cart-items-container">
        <ul className="cart-items" style={{ listStyleType: "none" }}>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}
          <button className="btn btn-block btn-danger" onClick={() => handleDelete(index)}>
          &times;
            </button></li>
          ))}
        </ul>
        </div>
      </div>
      <div className="total-price">
        <h2>Total: ${totalValue}</h2>
        <button className="btn btn-dark" onClick={handleCheckout}>Proceed to Checkout</button>
      </div>

    </div>
  );
};

export default Cart;
