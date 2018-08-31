import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./greeting_search";
import { SplashNavBar } from "../nav/splash_nav";

const GreetingText = () => {
  return (
    <div>
      <SplashNavBar />
      <div className="greeting-background-image">
        <div className="greeting-content-cntr">
          <h1 className="splash-text">Book unique homes in</h1>
          <h1 className="splash-text">cool climates the world over</h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default GreetingText;
