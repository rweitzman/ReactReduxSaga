import React from "react";
import AthleteCard from "./AthleteCard";
import { Link } from "react-router-dom";

const AthleteDashboard = () => {
  return (
    <div>
      <Link to={"/"}>
        <button className="ui button">Home</button>
      </Link>
      <h1 style={{ display: "grid", placeItems: "center" }}> All Athletes</h1>
      <div className="container" style={{ maxHeight: "90%" }}>
        <div
          className="row scrolling content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowY: "scroll",
            maxHeight: "80%",
          }}
        >
          <AthleteCard />
        </div>
      </div>
    </div>
  );
};

export default AthleteDashboard;
