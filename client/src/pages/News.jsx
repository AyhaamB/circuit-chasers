import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const News = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-news">
      <div className="post-container">
      <div className="news-title">
          <h2>All News</h2>
        </div>
        <div className="news-post">
          <p>This is a news article placeholder</p>
        </div>
        <div className="news-post">
          <p>This is a news article placeholder</p>
        </div>
        <div className="news-post">
          <p>This is a news article placeholder</p>
        </div>
        <div className="news-post">
          <p>This is a news article placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default News;
