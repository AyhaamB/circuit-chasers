import { useEffect, useState } from "react";
import axios from "axios";
import convert from "xml-js";
import CatagoryCardComponet from "../componets/BrowseComponets/CatagoryCardComponet";

const Browse = () => {
  const [RaceSchedule, setRaceSchedule] = useState();
  const [Racer, setRacer] = useState();
  const [Circuits, setCircuit] = useState();
  const [Teams, setTeam] = useState();

  useEffect(() => {
    //http://ergast.com/api/f1/current/last/results
    //http://ergast.com/api/f1/current

    axios
      .get("https://ergast.com/api/f1/current/last/results", {
        params: { format: "xml" },
      })
      .then((res) => {
        var result1 = convert.xml2json(res.data, { compact: true, spaces: 4 });

        let resJson = JSON.parse(result1);

        console.log(resJson.MRData.RaceTable.Race);

        setRaceSchedule(resJson.MRData.RaceTable.Race);

        // console.log(RaceSchedule)
      });

    axios
      .get("https://ergast.com/api/f1/current/driverStandings", {
        params: { format: "xml" },
      })
      .then((res) => {
        var result1 = convert.xml2json(res.data, { compact: true, spaces: 4 });

        let resJson = JSON.parse(result1);

        console.log(resJson.MRData.StandingsTable.StandingsList.DriverStanding);

        setRacer(resJson.MRData.StandingsTable.StandingsList.DriverStanding);

        // console.log(Racer)
      });

    //
    axios
      .get("https://ergast.com/api/f1/current", { params: { format: "xml" } })
      .then((res) => {
        var result1 = convert.xml2json(res.data, { compact: true, spaces: 4 });

        let resJson = JSON.parse(result1);

        console.log(resJson.MRData.RaceTable.Race);

        setCircuit(resJson.MRData.RaceTable.Race);

        // console.log(Circuits)
      });

    //Get drivers standing
    axios
      .get("https://ergast.com/api/f1/current/constructorStandings", {
        params: { format: "xml" },
      })
      .then((res) => {
        var result1 = convert.xml2json(res.data, { compact: true, spaces: 4 });

        let resJson = JSON.parse(result1);

        console.log(
          resJson.MRData.StandingsTable.StandingsList.ConstructorStanding
        );

        setTeam(
          resJson.MRData.StandingsTable.StandingsList.ConstructorStanding
        );

        //console.log(Teams)
      });
  }, []);

  if (Teams && RaceSchedule && Racer && Circuits) {
    return (
      <div className="main-browse">
        <div className="post-container">
          <div className="schedule-container">
            <a href="/raceschedule">
              <div className="browse-post" id="schedule-container"></div>
            </a>
          </div>
          <div className="racers-heading">
            <a href="/racers">
              <div className="browse-post" id="racers-container">
                <h3 className="racers-title">RACERS</h3>
              </div>
            </a>
          </div>
          <div className="racers-heading">
            <a href="/circuits">
              <div className="browse-post" id="circuit-image">
                <h3 className="racers-title">CIRCUITS</h3>
              </div>
            </a>
          </div>
          <div className="racers-heading">
            <a href="/teams">
              <div className="browse-post" id="teams-image">
                <h3 className="racers-title">TEAMS</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Browse;
