import React from "react";
import HomeCardHeader from "./HomeCardHeader";
import HomeCardBody from "./HomeCardBody";

const HomeCard = (props) => {
  const { option, handleDeleteOption, handleEditOption } = props;
  return (
    <section>
      <HomeCardHeader 
      option={option}
      handleDeleteOption={handleDeleteOption}
      handleEditOption={handleEditOption}
      />
      <HomeCardBody
      option={option}
      />
    </section>
  );
}

export default HomeCard;
