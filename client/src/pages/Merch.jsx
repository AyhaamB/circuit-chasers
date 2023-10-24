import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Product from "../componets/MerchComponets/Product";

const Merch = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-cart">
      <div className="post-container">
        <div className="prod-listing">
          <Product/>
        </div>
        <div className="prod-listing">
        <Product/>
        </div>
        <div className="prod-listing">
        <Product/>
        </div>
        <div className="prod-listing">
        <Product/>
        </div>
      </div>
      <div className="user-cart">
        <p>Users Cart</p>
      </div>
    </div>
  );
};

export default Merch;
