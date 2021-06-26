import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //north hemisphere
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it is Chilly" : "Lets hit the beach";
  return <h1>Season: {text}</h1>;
};

export default SeasonDisplay;
