import React from "react";
import "./style.css";

function Scores(props) {
  return <h1 className="scores">{props.children}</h1>;
}

export default Scores;
