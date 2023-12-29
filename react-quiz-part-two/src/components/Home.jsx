import React from "react";

import logo from "./../assets/logo.png";

function Home({ props }) {
  // Destructuring props to extract values
  const { dark, setOpen } = props;

  // Function to set 'open' state to true
  const openChange = () => {
    setOpen(true);
  };

  return (
    <div className="home-page">
      <img src={logo} alt="" />

      <button
        className="home-page-button"
        onClick={openChange}
        style={{
          // Dynamic box shadow based on the theme
          boxShadow: `${
            dark ? "0px 0px 50px 0px #fff" : "0px 0px 50px 0px #000000"
          }`,
        }}
      >
        Take Quiz
      </button>
    </div>
  );
}

export default Home;
