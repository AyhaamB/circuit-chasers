import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Merch = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-cart">
      <div className="post-container">
        <div className="disc-post">
          <p>This is a product placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a product placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a product placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a product placeholder</p>
        </div>
      </div>
      <div className="user-cart">
        <p>Users Cart</p>
      </div>
    </div>
  );
};

export default Merch;
