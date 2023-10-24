export default function Product(props) {
  return (
    <>
        <div className="prod-info">
          <h2 className="prod-title">Mercedes Hat</h2>
          <h2>$104.99</h2>
          <p>Team Mercedes hat, one size fits all.</p>
          <p>In Stock: 23</p>
          <button type="button" className="add-cart-btn btn btn-dark">Add to Cart</button>
        </div>
        <div className="prod-list-image"></div>
    </>
  );
}

