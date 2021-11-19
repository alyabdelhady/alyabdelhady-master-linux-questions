import React from "react";
import { useSelector } from "react-redux";
import "./Result.css";

function Result() {
  const getResult = useSelector((state) => state.result);
  const resultInPrercentage = Math.floor((getResult / 7) * 100);
  return (
    <div className="text-center final-result">
      {resultInPrercentage >= 50 ? (
        <button className="success">Congratulations!</button>
      ) : (
        <button className="pass">Hard Luck!</button>
      )}
      <h2>{resultInPrercentage} %</h2>
    </div>
  );
}

export default Result;
