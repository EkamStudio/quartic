import React from "react";
import DropDown from "./DropDown";

const HomeCard = () => {
  return (
    <div className="d-flex justify-content-between ch-color text-white rounded-top shadow-lg p-4 mb-2 home-card-header">
      <div className="home-card-header-title">
        <h4>My Home</h4>
        <p>Living Room</p>
      </div>
      <div>
        <DropDown />
      </div>
    </div>
  );
}

export default HomeCard;
