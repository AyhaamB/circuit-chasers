import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="main-home">
      <div className="daily-post">
        <p>Top Post</p>
      </div>
      <div className="fav-racer">
        <p>Favourite Racer</p>
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
