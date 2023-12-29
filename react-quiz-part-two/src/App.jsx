import { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Quiz from "./components/Quiz";
import End from "./components/End";

import lightThemeImg from "./assets/Light On.png";
import darkThemeImg from "./assets/No Idea.png";

// Main functional component App
function App() {
  // State variables using useState hook
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [correctAns, setCorrectAns] = useState(0);
  const [renderEnd, setRenderEnd] = useState(false);
  const [retake, setRetake] = useState(false);

  // Function to toggle between dark and light themes
  const changeTheme = () => {
    setDark(!dark);
  };

  // Function to dynamically change the image source based on the theme
  const srcChange = () => {
    return dark ? lightThemeImg : darkThemeImg;
  };

  return (
    <div
      className="body"
      style={{
        background: `${
          dark ? "" : "linear-gradient(180deg, #FFF 0%, #1F1F1F 50%, #FFF 100%)"
        }`,
      }}
    >
      {/* Theme toggle button */}
      <button
        className="themeButton"
        style={{
          // Dynamic background color based on the theme
          background: dark ? "white" : "black",
          transition: "background 1s ease",
        }}
        onClick={changeTheme}
      >
        {/* Dynamic image source based on the theme */}
        <img src={srcChange()} alt="" />
      </button>

      {/* Conditional rendering based on the state values */}
      {retake ? (
        // If retake is true, render Quiz component
        <Quiz props={{ dark, setRenderEnd, correctAns, setCorrectAns }} />
      ) : renderEnd ? (
        // If renderEnd is true, render End component
        <End props={{ dark, correctAns, setRetake, retake }} />
      ) : // If neither retake nor renderEnd is true, render Home or Quiz component based on the value of 'open'
      open ? (
        // If open is true, render Quiz component
        <Quiz props={{ dark, setRenderEnd, correctAns, setCorrectAns }} />
      ) : (
        // If open is false, render Home component
        <Home props={{ dark, setOpen }} />
      )}
    </div>
  );
}

export default App;
