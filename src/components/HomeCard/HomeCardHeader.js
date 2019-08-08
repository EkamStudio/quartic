import React from "react";
import DropDown from "./DropDown";

const HomeCard = (props) => {
  const { option, handleDeleteOption, handleEditOption } = props;
  return (
    <div className="d-flex justify-content-between ch-color text-white rounded-top shadow-lg p-4 mb-2 home-card-header">
      <div className="home-card-header-title">
        <h4>{option.title}</h4>
        <p>{option.smallTitle}</p>
      </div>
      <div>
        <DropDown
        option={option}
        handleDeleteOption={handleDeleteOption}
        handleEditOption={handleEditOption}        
        />
      </div>
    </div>
  );
}

export default HomeCard;
