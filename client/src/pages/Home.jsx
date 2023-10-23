import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_USER } from "../utils/queries";
import axios from 'axios'
import { useEffect, useState } from 'react';

//componets 
import FavoriteRacer from "../componets/HomepageComponets/FavoriteRacer";




const Home = () => {
 
  const [news, setNews] = useState()

  useEffect(() =>{
  axios.get('https://newsapi.org/v2/everything?q=F1&apiKey=66637cfa720a42078121b0c9715aed47')
  .then((res) =>{
    setNews(res.data)
    console.log(news)
  })},[])



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
