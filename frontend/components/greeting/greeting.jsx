import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.updateFile = this.updateFile.bind(this);
    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleTripsLinkClick = this.handleTripsLinkClick.bind(this);
  }

  updateFile(event) {
    // need to add an "onload" to decrease the time lag of update
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

  loggedOutNav() {
    return (
      <nav className="right-nav-cntr">
        <a className="nav-login" onClick={() => this.props.openModal("login")}>
          Log in
        </a>

        <a
          className="nav-signup"
          onClick={() => this.props.openModal("signup")}>
          Sign up
        </a>
      </nav>
    );
  }

  handleTripsLinkClick() {
    const currentUser = this.props.currentUser;

    if (this.props.history.location.pathname !== `/trips/${currentUser.id}`) {
      this.props.eraseHomes();
      this.props.history.push(`/trips/${currentUser.id}`);
    }
  }

  loggedInNav() {
    const currentUser = this.props.currentUser;

    return (
      <hgroup className="right-nav-cntr">
        <a className="nav-trip" onClick={this.handleTripsLinkClick}>
          Trips
        </a>
        <div className="dropdown-button">
          <img src={currentUser.image_url} onClick={this.revealDropdown} />
        </div>

        <ul id="dropdown" className="dropdown hidden">
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
    return this.props.currentUser ? this.loggedInNav() : this.loggedOutNav();
  }
}

export default withRouter(LoggedIn);
