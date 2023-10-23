import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_USER } from "../utils/queries";

//componets 
import FavoriteRacer from "../componets/HomepageComponets/FavoriteRacer";

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.user || [];

  return (
    <div className="main-home">
      <div className="daily-post">
        <p>Top Post</p>
      </div>
      <div className="fav-racer">

        <FavoriteRacer/>
      </div>
      <div className="other-stories">
        <p>Other Stories</p>
      </div>
      <div className="join-disc">
        <p>Join The Discussion</p>
      </div>
    </div>
  );
};

export default Home;
