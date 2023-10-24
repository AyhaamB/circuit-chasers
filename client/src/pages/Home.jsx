import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_POSTS, QUERY_USER } from "../utils/queries";




//componets 
import FavoriteRacer from "../componets/HomepageComponets/FavoriteRacer";
import DailyPost from "../componets/HomepageComponets/DailyPost";
import OtherStoires from "../componets/HomepageComponets/OtherStoires";
import DiscussionPost from "../componets/HomepageComponets/DiscussionPosts";




const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div className="main-home">
      <div className="daily-post">

        <DailyPost/>

      </div>
      <div className="fav-racer">

        <FavoriteRacer
        posts={posts}
        />
      </div>
      <div className="other-stories">
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
      </div>
      <div className="join-disc">
        <DiscussionPost
        posts={posts}
        />
      </div>
    </div>
  );
};

export default Home;
