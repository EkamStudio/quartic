import React from "react";
//import ReactDOM from "react-dom";
import HomeCard from "./HomeCard";

export default function Body() {
  return (
    <main className="container-fluid bg-light p-5 page-min-height">
      <div className="row justify-content-start">
        <div className="col-md-4">
          <HomeCard />
        </div>
      </div>
    </main>
  );
}
