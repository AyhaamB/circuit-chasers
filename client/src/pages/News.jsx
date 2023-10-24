import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Article from "../componets/NewsComponents/Article";

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
          <Article />
        </div>
        <div className="news-post">
          <Article />
        </div>
        <div className="news-post">
          <Article />
        </div>
        <div className="news-post">
          <Article />
        </div>
      </div>
    </div>
  );
};

export default News;
