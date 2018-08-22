import React from "react";
import { Link } from "react-router-dom";

import GreetingContainer from "../greeting/greeting_container";
import Modal from "../modals/modal_switch.jsx";
import SearchBar from "../greeting/greeting_search";

export const NavBar = () => {
  return (
    <div className="header-box">
      <header className="header-group">
        <Modal />
        <div className="left-nav-cntr">
          <Link
            to="/"
            className="favicon"
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <SearchBar />
        </div>

        <GreetingContainer />
      </header>
    </div>
  );
};
