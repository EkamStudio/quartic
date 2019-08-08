import React from "react";
import HomeCard from "./HomeCard";

const Body = (props) => {
  const { options, handleDeleteOption, handleEditOption } = props;
  return (
    <main className="container-fluid bg-light p-5 page-min-height">
      <div className="row justify-content-start">
      {
        options.map((option) => (
          <div key={option.id} className="col-md-4 mb-3">
            <HomeCard
            option={option}
            handleDeleteOption={handleDeleteOption}
            handleEditOption={handleEditOption}
            />
           </div>
        ))
      }
      </div>
    </main>
  );
}

export default Body;
