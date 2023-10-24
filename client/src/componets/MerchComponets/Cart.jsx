import React from 'react';

const Cart = ({ cartItems, handleCheckout }) => {

    const totalValue = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${totalValue}</p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;