import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Donate = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-cart">
      <div className="post-container">
        <div className="donate-title">
          <h2>Our Wonderful Sponsors</h2>
        </div>
        <div className="donate-post">
          <p>This is a sponsor placeholder</p>
        </div>
        <div className="donate-post">
          <p>This is a sponsor placeholder</p>
        </div>
        <div className="donate-post">
          <p>This is a sponsor placeholder</p>
        </div>
        <div className="donate-post">
          <p>This is a sponsor placeholder</p>
        </div>
      </div>
      <div className="donate-field">
        <p>Make a Donation</p>
      </div>
    </div>
  );
};

export default Donate;
