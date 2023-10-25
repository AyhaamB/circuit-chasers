import React from 'react';
import { FaTrash } from 'react-icons/fa';


const Cart = ({ cartItems, handleCheckout, handleDelete }) => {

    const totalValue = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div >
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}
          <button className="btn btn-block btn-danger" onClick={() => handleDelete(index)}>
              <FaTrash />
            </button></li>
        ))}
      </ul>
      <p>Total: ${totalValue}</p>

      <button className="btn btn-block btn-dark" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;