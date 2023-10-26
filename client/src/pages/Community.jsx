import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import {ADD_POST} from "../utils/mutations";
import { QUERY_POSTS } from "../utils/queries";
import Post from "../componets/CommunityComponets/Post";
import Auth from "../utils/auth";

const Community = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const [addPost] = useMutation(ADD_POST);
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    const mutationResponse = await addPost({
      variables: {
        title: e.target[0].value,
        content: e.target[1].value,
      },
    })};

  return (
    <div className="main-disc">
      <div className="post-container">
        <div className="disc-title">
          <h2>Posts From Our Users</h2>
        </div>
        <Post posts={posts} />
      </div>

      <div className="create-post">
        {Auth.loggedIn() ? (
          <div className="create-post-form">
            <h2>Create Your Post</h2>
            <form onSubmit={formSubmit}>
              <input type="text" name="title" placeholder="Title" />
              <textarea
                name="content"
                rows={"5"}
                columns={"1"}
                placeholder="Write Your Thoughts Here"
              />
              <button type="submit">Post</button>
            </form>
          </div>
        ) : (
          <div>
            <a href="/login">
              <h2>Login To Create Post</h2>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
