import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_POSTS, QUERY_NEWS } from "../utils/queries";





//componets 
import FavoriteRacer from "../componets/HomepageComponets/FavoriteRacer";
import DailyPost from "../componets/HomepageComponets/DailyPost";
import OtherStoires from "../componets/HomepageComponets/OtherStoires";
import DiscussionPost from "../componets/HomepageComponets/DiscussionPosts";




const Home = () => {
  const { loading: postsLoading, data: postsData } = useQuery(QUERY_POSTS);
  const posts = postsData?.posts || [];

  const { loading: newsLoading, data: newsData } = useQuery(QUERY_NEWS);
  const news = newsData?.news || [];

  return (
    <div className="main-home">
        <DailyPost
        news={news}
        />
      <div className="fav-racer">

        <FavoriteRacer
        posts={posts}
        />
      </div>
      <div className="other-stories">
        <OtherStoires
        news={news}
        />
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
