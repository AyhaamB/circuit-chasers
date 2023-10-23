import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const Community = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-disc">
      <div className="post-container">
        <div className="disc-title">
          <h2>Trending Today</h2>
        </div>
        <div className="disc-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a post placeholder</p>
        </div>
        <div className="disc-post">
          <p>This is a post placeholder</p>
        </div>
      </div>
      <div className="create-post">
        <p>Create Post</p>
      </div>
    </div>
  );
};

export default Community;
