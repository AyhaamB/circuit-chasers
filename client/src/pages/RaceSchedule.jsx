import { useEffect, useState,} from "react";
import axios from "axios";
import convert from 'xml-js'

import ScheduleCard from "../componets/RaceScheduleComponets/ScheduleCard";

const RacePage = () =>{

    const [Circuits, setCircuit] = useState()

    useEffect(() => {
      axios.get("http://ergast.com/api/f1/current",  {params: { format: "xml" }})
    .then((res) => {
      

      var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
      
      let resJson = JSON.parse(result1)

      console.log(resJson.MRData.RaceTable.Race)

      setCircuit(resJson.MRData.RaceTable.Race)
      

      // console.log(Circuits)

    })
    }, [])

    if(Circuits === undefined){
        return <></>
    }

    return(
      

      <div className="d-flex m-5 flex-wrap justify-content-around"> 

      {Circuits.map((circuit) => {
        return <ScheduleCard Circuit = {circuit} ></ScheduleCard>
      })}


      </div>

  )


}


export default RacePage;