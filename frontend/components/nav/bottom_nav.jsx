import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BottomNavBar = () => {
  return (
    <div className="nav-bottom-bar">
      <div className="nav-bottom-bar-link-cntr">
        <a href="https://github.com/as228512/briskbnb" title="Github">
          <FontAwesomeIcon
            color="#484848"
            icon={["fab", "github-square"]}
            size="3x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-schumacher-1b3b2914a/"
          title="Linkedin"
        >
          <FontAwesomeIcon
            color="#484848"
            icon={["fab", "linkedin"]}
            size="3x"
          />
        </a>
      </div>
      <h3 className="nav-bottom-bar-trademark-text">
        {" "}
        <FontAwesomeIcon icon="snowflake" size="lg" color="#484848" /> ©
        Briskbnb, Inc.
      </h3>
    </div>
  );
};
