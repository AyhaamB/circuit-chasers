import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

const Post = () => {
  const { loading, data } = useQuery(QUERY_USER, {
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
      <div className="join-disc">
      {Auth.loggedIn() ? (
              <p>
               Whats Up
              </p>
            ) : (
              <div>
                HEEEEEHEEEEEE
              </div>
            )}
      </div>
    </div>
  );
};

export default Post;
