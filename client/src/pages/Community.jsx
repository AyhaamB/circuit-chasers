import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";

const Community = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-disc">
      <div className="post-container">
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
