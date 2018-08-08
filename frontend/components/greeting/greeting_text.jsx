import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./greeting_search";
import Autocomplete from "react-google-autocomplete";
import { SplashNavBar } from "../nav/splash_nav";

const greetingText = () => {
  debugger;
  return (
    <div>
      <SplashNavBar />
      <div className="greeting-background-image">
        <h1 className="splash-text">Book unique homes in</h1>
        <h1 className="splash-2-text">cool climates the world over</h1>
        <SearchBar className="search-bar-container" />
      </div>
    </div>
  );
};

export default greetingText;
