import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Browse = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-browse">
      <div className="post-container">
        <div className="browse-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="browse-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="browse-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="browse-post">
          <p>This is a post placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
