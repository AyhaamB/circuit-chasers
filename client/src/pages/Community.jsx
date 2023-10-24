import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import Post from "../componets/CommunityComponets/Post";

const Community = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="main-disc">
      <div className="post-container">
        <div className="disc-title">
          <h2>Trending Today</h2>
        </div>
        <Post posts={posts} />
      </div>
      <div className="create-post">
        <p>Create Post</p>
      </div>
    </div>
  );
};

export default Community;
