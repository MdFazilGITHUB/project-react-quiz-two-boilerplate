import React, { useEffect, useState } from "react";

import Quiz from "./Quiz";

// End component
const End = ({ props }) => {
  // Destructuring props to extract values
  const { dark, correctAns, setRetake, retake } = props;

  let remarks = "";

  // Assigning remarks based on the percentage score
  if ((correctAns / 15) * 100 > 0 && (correctAns / 15) * 100 <= 20) {
    remarks = "You Can do Better";
  } else if ((correctAns / 15) * 100 > 20 && (correctAns / 15) * 100 <= 50) {
    remarks = "You Did Good";
  } else if ((correctAns / 15) * 100 > 50 && (correctAns / 15) * 100 <= 80) {
    remarks = "Well Done";
  } else if ((correctAns / 15) * 100 > 80 && (correctAns / 15) * 100 <= 100) {
    remarks = "Excellent";
  }

  // useEffect to set 'retake' to false when 'correctAns' changes
  useEffect(() => {
    setRetake(false);
  }, [correctAns]);

  return (
    <div className="result">
      <h1
        style={{
          color: dark ? "white" : "black",
          transition: "color 0.5s ease",
        }}
      >
        RESULT
      </h1>
      <div
        style={{
          color: dark ? "white" : "black",
          background: dark ? "#252525" : "#CCC",
          border: `4px solid ${dark ? "white" : "black"}`,
          transition: "background 0.5s ease",
        }}
        className="result-container"
      >
        <h2
          style={{
            color: dark ? "black" : "white",
            transition: "color 0.5s ease",
          }}
        >
          {remarks}
        </h2>
        {/* Displaying the calculated percentage score */}
        <h1
          style={{
            color: dark ? "white" : "black",
            transition: "color 0.5s ease",
          }}
        >
          Score: {Math.ceil((correctAns / 15) * 100)}%
        </h1>
        {/* Button to initiate quiz retake */}
        <button
          style={{ boxShadow: `0px 0px 20px 0px ${dark ? "white" : "black"}` }}
          onClick={() => {
            setRetake(true);
          }}
        >
          Retake
        </button>
      </div>
    </div>
  );
};

export default End;
