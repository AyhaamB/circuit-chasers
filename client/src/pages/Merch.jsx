import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import React, { useState } from "react";
import Product from "../componets/MerchComponets/Product";

const Merch = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="main-cart">
      <div className="post-container">
        <div className="prod-listing">
          <Product
            product={{ name: "Mercedes Hat", price: 104.99, description: "Team Mercedes hat, one size fits all.", stock: 23 }}
            addToCart={addToCart}
          />
          <Product
            product={{ name: "Unlicensed copycat", price: 15.99, description: "Almost the same as the other one, but with cheap materials. One size fits all, but doesn't feel so good.", stock: 23 }}
            addToCart={addToCart}
          />
        </div>

      </div>
      <div className="user-cart">
        <p>Users Cart</p>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Merch;
