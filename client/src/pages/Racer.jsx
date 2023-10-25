import { useEffect, useState,} from "react";
import axios from "axios";
import convert from 'xml-js'

import DriverStanding from "../componets/DriverStanding/DriverStandingTable";


const RacerPage = () =>{


    const [Racer, setRacer] = useState()

    useEffect(() => {
      axios.get("http://ergast.com/api/f1/current/driverStandings",  {params: { format: "xml" }})
    .then((res) => {
      

      var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
      
      let resJson = JSON.parse(result1)

      console.log(resJson.MRData.StandingsTable.StandingsList.DriverStanding)

      setRacer(resJson.MRData.StandingsTable.StandingsList.DriverStanding)
      
      // console.log(Circuits)

    })
    }, [])

    if(Racer === undefined){
      return (<></>)
    }

    return(
    
    <div className="d-flex justify-content-center">
      <DriverStanding Drivers = {Racer}></DriverStanding>
    </div>

)
}


export default RacerPage;