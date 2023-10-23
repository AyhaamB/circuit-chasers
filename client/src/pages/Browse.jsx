import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import CatagoryCardComponet from "../componets/BrowseComponets/CatagoryCardComponet"

const Browse = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  return (
    <div className="main-browse">
      <div className="post-container">
       <CatagoryCardComponet title="Schedule" desc="Most Recent Race"  />
       <CatagoryCardComponet title="Racer" desc="Racer Name"  />
       <CatagoryCardComponet title="Circuits" desc="Circuit Name"  />
       <CatagoryCardComponet title="Teams" desc="Team name"  />        
      </div>
    </div>
  );
};

export default Browse;
