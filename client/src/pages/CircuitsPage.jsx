import { useEffect, useState,} from "react";
import axios from "axios";
import convert from 'xml-js'

import CircuitComponet from "../componets/CircuitComponet/CircuitComponet";


const TeamsPage = () =>{


    const [Circuit, setCircuit] = useState()

    useEffect(() => {
        axios.get("http://ergast.com/api/f1/current/circuits",  {params: { format: "xml" }})
        .then((res) => {
          
    
          var result1 = convert.xml2json(res.data, {compact: true, spaces: 4});
          
          let resJson = JSON.parse(result1)
    
          console.log(resJson.MRData.CircuitTable)
    
          setCircuit(resJson.MRData.CircuitTable)
        
    
          //console.log(Teams)
    
        })
    }, [])

    if(Circuit === undefined){
      return (<></>)
    }

    return(
    
    <div className="d-flex justify-content-center">
      {/* <DriverStanding Drivers = {Teams}></DriverStanding> */}
      <CircuitComponet Circuits = {Circuit} ></CircuitComponet>
    </div>

)
}


export default TeamsPage;