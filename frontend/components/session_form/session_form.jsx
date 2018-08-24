import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  firstNameInputField() {
    let firstName;

    if (this.state.firstName === "First Name can't be blank") {
      firstName = " First Name can't be blank";

      return (
        <div>
          <input type="text" value={firstName} className="error-form-field" />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.update("firstName")}
            className="form-field"
            placeholder="First Name"
          />
        </div>
      );
    }
  }

  lastNameInputField() {
    let lastName;

    if (this.state.lastName === "Last Name can't be blank") {
      lastName = " Last Name can't be blank";

      return (
        <div>
          <input type="text" value={lastName} className="error-form-field" />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.update("lastName")}
            className="form-field"
            placeholder="Last Name"
          />
        </div>
      );
    }
  }

  emailInputField() {
    let email;

    if (this.state.email === "E-mail can't be blank") {
      email = " E-mail can't be blank";

      return (
        <div>
          <input type="text" value={email} className="error-form-field" />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="form-field"
            placeholder="Email Address"
          />
        </div>
      );
    }
  }

  passwordInputField() {
    let password;

    if (this.state.password === "Invalid Password (minimum of 6 characters)") {
      password = " Invalid Password (minimum of 6 characters)";

      return (
        <div>
          <input type="text" value={password} className="error-form-field" />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            className="form-field"
            placeholder="Create a Password"
          />
        </div>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    let firstName, lastName, email, password;

    if (nextProps.errors.includes("Fname can't be blank")) {
      firstName = "First Name can't be blank";
    } else firstName = this.state.firstName;

    if (nextProps.errors.includes("Lname can't be blank")) {
      lastName = "Last Name can't be blank";
    } else lastName = this.state.lastName;

    if (nextProps.errors.includes("E mail can't be blank")) {
      email = "E-mail can't be blank";
    } else email = this.state.email;

    if (
      nextProps.errors.includes(
        "Password is too short (minimum is 6 characters)"
      )
    ) {
      password = "Invalid Password (minimum of 6 characters)";
    } else password = this.state.password;

    this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
  }

  //clean up the component a bit and make sure to send a clear errors action onClick to the newly made error-form-fields
  //so, on click, it will clear the field for the user to try again! :D

  render() {
    switch (this.props.formType) {
      case "signup":
        return (
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
              <div onClick={this.props.closeModal} className="close-x">
                X
              </div>

              <div>
                <div>
                  {this.emailInputField()}

                  <br />

                  {this.firstNameInputField()}

                  <br />

                  {this.lastNameInputField()}

                  <br />

                  {this.passwordInputField()}

                  <br />

                  <input
                    className="signup-session-submit"
                    type="submit"
                    value={"Sign up"}
                  />
                </div>

                <br />

                <div className="signup-form-footer-border" />
                <span className="sign-up-form-footer">
                  Already have a Briskbnb account?{" "}
                  <i className="form-footer-link">{this.props.otherForm} </i>
                </span>
              </div>
            </form>
          </div>
        );

      case "login":
        return (
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
              <div>
                <div onClick={this.props.closeModal} className="close-x">
                  X
                </div>

                <div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    className="form-field"
                    placeholder="Email Address"
                  />
                </div>

                <br />
                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="form-field"
                    placeholder="Password"
                  />
                </div>

                <br />

                <input
                  className="login-session-submit"
                  type="submit"
                  value={"Log in"}
                />
                <br />
                <div className="login-form-footer-border" />

                <input
                  className="demo-user"
                  type="button"
                  value="Demo user"
                  onClick={() =>
                    this.props
                      .processGuest({
                        e_mail: "demo@demos.com",
                        password: "Demo11"
                      })
                      .then(this.props.closeModal)
                  }
                />
                <div className="demo-form-footer-border" />

                <span className="login-form-footer">
                  Don't have an account?{" "}
                  <i className="form-footer-link">{this.props.otherForm} </i>
                </span>
              </div>
            </form>
          </div>
        );
    }
  }
}

export default withRouter(SessionForm);
