import { useEffect, useState,} from "react";
import axios from "axios";
import convert from 'xml-js'

import TeamsStanding from "../componets/TeamsComponets/TeamsStanding";


const TeamsPage = () =>{


    const [Teams, setTeam] = useState()

    useEffect(() => {
        axios.get("http://ergast.com/api/f1/current/constructorStandings",  {params: { format: "xml" }})
        .then((res) => {
          
    
          var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
          
          let resJson = JSON.parse(result1)
    
          console.log(resJson.MRData.StandingsTable.StandingsList.ConstructorStanding)
    
          setTeam(resJson.MRData.StandingsTable.StandingsList.ConstructorStanding)
          
    
          //console.log(Teams)
    
        })
    }, [])

    if(Teams === undefined){
      return (<></>)
    }

    return(
    
    <div className="d-flex justify-content-center">
      {/* <DriverStanding Drivers = {Teams}></DriverStanding> */}
      <TeamsStanding Teams = {Teams} ></TeamsStanding>
    </div>

)
}


export default TeamsPage;