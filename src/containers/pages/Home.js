import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#9ABD53",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "600px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%"
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            border: "3px dotted black",
            height: "450px",
            width: "450px",
          }}
        >
          <h1 style={{fontWeight: "900", fontSize: "2.2em"}}>Hi! Welcome to My Project!</h1>
          <Link to={"/allAthletes"}>
            <button className="ui button" style={{width: "300px", height: "100px", fontSize: "1.7em"}}>Click</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
