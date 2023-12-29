import React, { useState, useEffect } from "react";
import questions from "../questions";

function Quiz({ props }) {
  const { dark, setRenderEnd, correctAns, setCorrectAns } = props;

  const [question, setQuestion] = useState(0);

  const optionChosen = (isCorrect) => {
    if (isCorrect) {
      setCorrectAns(correctAns + 1);
    }

    if (question < questions.length - 1) {
      setQuestion(question + 1);
    } else {
      setRenderEnd(true);
    }
  };

  const nextQuestion = () => {
    if (question < questions.length - 1) {
      setQuestion(question + 1);
    }
  };

  const previousQuestion = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
  };

  const quitQuiz = () => {
    alert("Are you sure you want to quit (Press ESC to not quit) ?")
    setRenderEnd(true);
  };

  useEffect(() => {
    if (question === questions.length - 1) {
      setRenderEnd(true);
    }
  }, [question, setRenderEnd]);

  return (
    <div
      style={{
        background: dark ? "#252525" : "#CCC",
        border: `4px solid ${dark ? "white" : "black"}`,
        transition: "background 0.5s ease",
      }}
      className="quiz-container"
    >
      <h1 style={{ color: dark ? "white" : "black",transition: "color 0.5s ease" }}>
        QUESTION: {question + 1} of {questions.length}
      </h1>

      <h2 style={{ color: dark ? "white" : "black",transition: "color 0.5s ease" }}>
        {questions[question].text}
      </h2>

      {questions[question].options.map((option) => (
        <div className="block" key={option.id}>
          <button
            className="options"
            onClick={() => optionChosen(option.isCorrect)}
          >
            {option.text}
          </button>
        </div>
      ))}

      <div>
        <button onClick={previousQuestion} disabled={question === 0} className="navigation-buttons">
          Previous
        </button>
        <button onClick={nextQuestion} disabled={question === questions.length - 1} className="navigation-buttons">
          Next
        </button>
        <button onClick={quitQuiz} className="navigation-buttons">Quit</button >
      </div>
    </div>
  );
}

export default Quiz;
