import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "hot",
    iconName: "sun",
  },
  winter: {
    text: "cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { iconName, text } = seasonConfig[season];

  return (
    <div className={`SeasonDisplay ${season}`}>
      <i className={`icon-left icon ${iconName} massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-right icon ${iconName} massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
