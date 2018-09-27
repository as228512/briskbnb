import React from "react";
import { withRouter, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SplashLoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.updateFile = this.updateFile.bind(this);
    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  updateFile(event) {
    const file = event.currentTarget.files[0];
    const formData = new FormData();
    if (file) formData.append("user[image]", file);
    this.props.updateAvatar(this.props.currentUser.id, formData);
  }

  revealDropdown(event) {
    // shouldn't use Jquery, need to conditionally render a child throgh jsx
    // and maybe switching a state slice from null to open
    $("#dropdown").removeClass("hidden");
    $("#dropdown-button").off("click", this.revealDropdown);
    $(document).on("click", this.hideDropdown);
  }

  hideDropdown() {
    $("#dropdown").addClass("hidden");
    $("#dropdown-button").on("click", this.revealDropdown);
    $(document).off("click", this.hideDropdown);
  }

  sessionLinks() {
    return (
      <nav className="splash-nav-cntr">
        <div className="splash-site-link-cntr">
          <a href="https://github.com/as228512/briskbnb" title="Github">
            <FontAwesomeIcon
              color="#ffffff"
              icon={["fab", "github-square"]}
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-schumacher-1b3b2914a/"
            title="Linkedin"
          >
            <FontAwesomeIcon
              color="#ffffff"
              icon={["fab", "linkedin"]}
              size="2x"
            />
          </a>
        </div>
        <a
          className="splash-nav-login"
          onClick={() => this.props.openModal("login")}
        >
          Log in
        </a>

        <a
          className="splash-nav-signup"
          onClick={() => this.props.openModal("signup")}
        >
          Sign up
        </a>
      </nav>
    );
  }

  avatarDropdown() {
    const currentUser = this.props.currentUser;

    return (
      <hgroup className="splash-nav-cntr">
        <a
          className="splash-nav-trip"
          onClick={() => this.props.history.push(`/trips/${currentUser.id}`)}
        >
          Trips
        </a>
        <div className="splash-dropdown-button">
          <img src={currentUser.image_url} onClick={this.revealDropdown} />
        </div>

        <ul id="dropdown" className="splash-dropdown dropdown hidden">
          <li>
            <ul className="options">
              <div>
                <label htmlFor="file_input">Update Avatar</label>
              </div>
              <li className="chooseAvatar">
                <input type="file" id="file_input" onChange={this.updateFile} />
              </li>
              <li>
                <a className="logout" onClick={this.props.logout}>
                  Log Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </hgroup>
    );
  }

  render() {
    return this.props.currentUser ? this.avatarDropdown() : this.sessionLinks();
  }
}

export default withRouter(SplashLoggedIn);
