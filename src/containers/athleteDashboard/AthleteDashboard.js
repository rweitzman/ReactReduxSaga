import React from "react";
// import Dashboard from "../layouts/Dashboard";
import AthleteCard from "../components/AthleteCard";

const AthleteDashboard = () => {
  return (
    <div>
      <h1 style={{display: "grid", placeItems: "center"}}> Athlete DashBoard </h1>
      <h3 style={{display: "grid", placeItems: "center"}}>Athlete List</h3>
      <div className="container" style={{maxHeight: "90%"}}>
        <div
          className="row scrolling content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "scroll",
            maxHeight: "80%"
          }}
        >
          <AthleteCard />
        </div>
      </div>
    </div>
  );
};

export default AthleteDashboard;
