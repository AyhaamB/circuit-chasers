
// I wrote the code for this component, but I suggest renaming this one to showcase or something and create another component called Product to Render the stuff between lines 26 and 35.


import React from "react";

export default function Product({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>

      <div className="prod-info">
        <h2 className="prod-title">{product.name}</h2>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <p>In Stock: {product.stock}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div className="prod-list-image"></div>

    </>
  );
}