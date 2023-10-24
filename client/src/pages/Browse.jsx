import { useEffect, useState,} from "react";
import axios from "axios";
import convert from 'xml-js'
import CatagoryCardComponet from "../componets/BrowseComponets/CatagoryCardComponet"

const Browse = () => {

  const [RaceSchedule, setRaceSchedule] = useState()
  const [Racer, setRacer] = useState()
  const [Circuits, setCircuit] = useState()
  const [Teams, setTeam] = useState()

  useEffect(() => {
    //http://ergast.com/api/f1/current/last/results
    //http://ergast.com/api/f1/current

    axios.get("http://ergast.com/api/f1/current/last/results",  {params: { format: "xml" }})
    .then((res) => {
      

      var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
      
      let resJson = JSON.parse(result1)

      console.log(resJson.MRData.RaceTable.Race)

      setRaceSchedule(resJson.MRData.RaceTable.Race)

      // console.log(RaceSchedule)
      
    })

    axios.get("http://ergast.com/api/f1/current/driverStandings",  {params: { format: "xml" }})
    .then((res) => {
      

      var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
      
      let resJson = JSON.parse(result1)

      // console.log(resJson.MRData.StandingsTable.StandingsList.DriverStanding)

      setRacer(resJson.MRData.StandingsTable.StandingsList.DriverStanding)

      // console.log(Racer)
    })

    //
    axios.get("http://ergast.com/api/f1/current",  {params: { format: "xml" }})
    .then((res) => {
      

      var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
      
      let resJson = JSON.parse(result1)

      // console.log(resJson.MRData.RaceTable.Race)

      setCircuit(resJson.MRData.RaceTable.Race)
      

      // console.log(Circuits)

    })

    //Get drivers standing 
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

  return (
    <div className="main-browse">
      <div className="post-container">
       <CatagoryCardComponet title="Schedule" desc= {RaceSchedule.RaceName._text}  />
       <CatagoryCardComponet title="Racer" desc={Racer[0].Driver.GivenName._text + " "+ Racer[0].Driver.FamilyName._text}  />
       <CatagoryCardComponet title="Circuits" desc={Circuits[(parseInt(RaceSchedule._attributes.round) - 1)].Circuit.CircuitName._text}  />
       <CatagoryCardComponet title="Teams" desc={Teams[0].Constructor.Name._text}  />        
      </div>
    </div>
  );
};

export default Browse;