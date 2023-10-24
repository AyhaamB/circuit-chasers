import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {QUERY_USER } from "../utils/queries";
import axios from 'axios'
import { useEffect, useState } from 'react';

import axios from "axios"

import { useEffect, useState } from "react";

//componets 
import FavoriteRacer from "../componets/HomepageComponets/FavoriteRacer";
import DailyPost from "../componets/HomepageComponets/DailyPost";
import OtherStoires from "../componets/HomepageComponets/OtherStoires";




const Home = () => {
  return (
    <div className="main-home">
      <div className="daily-post">

        <DailyPost/>

      </div>
      <div className="fav-racer">

        <FavoriteRacer/>
      </div>
      <div className="other-stories">
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
        <OtherStoires/>
      </div>
      <div className="join-disc">
        <p>Join The Discussion</p>
      </div>
    </div>
  );
};

export default Home;
