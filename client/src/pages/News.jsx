import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_NEWS } from "../utils/queries";
import Article from "../componets/NewsComponents/Article";

const News = () => {
    const { loading, data } = useQuery(QUERY_NEWS);
    const news = data?.news || [];

  return (
      <div className="post-container">
        <div className="news-title">
          <h2>All News</h2>
        </div>
          <Article
          news={news}
          />
      </div>
  );
};

export default News;
