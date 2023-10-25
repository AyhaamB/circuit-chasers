// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_USER, QUERY_PRODUCTS } from "../utils/queries";
// import React, { useState } from "react";
// import Product from "../componets/MerchComponets/Product";
// import Cart from "../componets/MerchComponets/Cart";
// import Payment from "../componets/MerchComponets/Payment"

// const Merch = () => {
//   const { loading, data } = useQuery(QUERY_USER, {
//     fetchPolicy: "no-cache",
//   });

//   const { loading: productsLoading, data: productData } = useQuery(QUERY_PRODUCTS);
//   const products = productData?.products || [];

//   const [cartItems, setCartItems] = useState([]);
//   const [isCheckout, setIsCheckout] = useState(false);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const handleCheckout = () => {
//     setIsCheckout(true);
//   };

//   const handlePaymentSuccess = () => {
//     // You can implement actions after a successful payment here
//     console.log('Payment was successful.');
//   };
//   return (
//     <div className="main-cart">
//       <div className="post-container">
//           {/* <Product
//             product={{ name: "Mercedes Hat", price: 104.99, description: "Team Mercedes hat, one size fits all.", stock: 23 }}
//             addToCart={addToCart}
//           />
//           <Product
//             product={{ name: "Unlicensed copycat", price: 15.99, description: "Almost the same as the other one, but with cheap materials. One size fits all, but doesn't feel so good.", stock: 23 }}
//             addToCart={addToCart}
//           /> */}
//           <Product
//           product={products}
//           addToCart={addToCart}
//           />

//       </div>
//       <div className="user-cart">
//       {isCheckout ? (
//         <Payment cartItems={cartItems} handlePaymentSuccess={handlePaymentSuccess} />
//       ) : (
//         <Cart cartItems={cartItems} handleCheckout={handleCheckout} />
//       )}
//       </div>
//     </div>
//   );
// };

// export default Merch;

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_PRODUCTS } from "../utils/queries";
import React, { useState } from "react";
import Product from "../componets/MerchComponets/Product";
import Cart from "../componets/MerchComponets/Cart";
import Payment from "../componets/MerchComponets/Payment";

const Merch = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const { loading: productsLoading, data: productData } = useQuery(QUERY_PRODUCTS);
  const products = productData?.products || [];

  const [cartItems, setCartItems] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handlePaymentSuccess = () => {
    // You can implement actions after a successful payment here
    console.log('Payment was successful.');
  };

  return (
    <div className="main-cart">
      <div className="post-container">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="user-cart">
        {isCheckout ? (
          <Payment cartItems={cartItems} handlePaymentSuccess={handlePaymentSuccess} />
        ) : (
          <Cart cartItems={cartItems} handleCheckout={handleCheckout} />
        )}
      </div>
    </div>
  );
};

export default Merch;
