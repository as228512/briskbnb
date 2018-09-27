import React from "react";
import { Link } from "react-router-dom";

import SplashGreetingContainer from "../greeting/splash_greeting_container";
import Modal from "../modals/modal_switch.jsx";

export const SplashNavBar = () => {
  return (
    <div className="splash-nav-bar">
      <Modal />

      <SplashGreetingContainer />
    </div>
  );
};
