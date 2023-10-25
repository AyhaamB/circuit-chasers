import React from "react";

export default function Product({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  console.log(product);

  return (
    <>
      <div className="prod-listing">
        <div className="prod-info">
          <h2 className="prod-title">{product.name}</h2>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <p>In Stock: {product.stock}</p>
          <button
            onClick={handleAddToCart}
            className="add-cart-btn btn btn-dark"
          >
            Add to Cart
          </button>
        </div>
        <div className="prod-list-image"></div>
      </div>
    </>
  );
}
