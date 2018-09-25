import React from "react";
import { withRouter, Route, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      e_mail: "",
      fname: "",
      lname: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  clearField(field) {
    return e =>
      this.setState({
        [field]: ""
      });
  }

  errorCheck(state) {
    if (
      state.fname === "" ||
      state.lname === "" ||
      state.e_mail === "" ||
      state.password === ""
    ) {
      return false;
    } else if (
      state.fname === "First Name can't be blank" ||
      state.lname === "Last Name can't be blank" ||
      state.e_mail === "E-mail can't be blank" ||
      state.e_mail === "Invalid e-mail and/or password" ||
      state.password === "Invalid Password (minimum of 6 characters)" ||
      state.password === "Please try again"
    ) {
      return true;
    }

    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const anError = this.errorCheck(this.state);

    if (anError) {
      return;
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }
  }

  fnameInputField() {
    let fname;

    if (this.state.fname === "First Name can't be blank") {
      fname = " First Name can't be blank";

      return (
        <div>
          <input
            type="text"
            value={fname}
            className="error-form-field"
            onFocus={this.props.clearSessionErrors}
            onFocus={this.clearField("fname")}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.fname}
            onChange={this.update("fname")}
            className="form-field"
            placeholder="First Name"
          />
        </div>
      );
    }
  }

  lastNameInputField() {
    let lname;

    if (this.state.lname === "Last Name can't be blank") {
      lname = " Last Name can't be blank";

      return (
        <div>
          <input
            type="text"
            value={lname}
            className="error-form-field"
            onFocus={this.props.clearSessionErrors}
            onFocus={this.clearField("lname")}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.lname}
            onChange={this.update("lname")}
            className="form-field"
            placeholder="Last Name"
          />
        </div>
      );
    }
  }

  emailInputField() {
    let e_mail;
    if (
      this.state.e_mail === "E-mail can't be blank" ||
      this.state.e_mail === "Invalid e-mail and/or password" ||
      this.state.e_mail === "E-mail has already been taken"
    ) {
      e_mail = this.state.e_mail;

      return (
        <div>
          <input
            type="text"
            value={` ${e_mail}`}
            className="error-form-field"
            onFocus={this.props.clearSessionErrors}
            onFocus={this.clearField("e_mail")}
          />
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            value={this.state.e_mail}
            onChange={this.update("e_mail")}
            className="form-field"
            placeholder="Email Address"
          />
        </div>
      );
    }
  }

  passwordInputField() {
    let password;

    if (
      this.state.password === "Invalid Password (minimum of 6 characters)" ||
      this.state.password === "Please try again"
    ) {
      password = this.state.password;

      return (
        <div>
          <input
            type="text"
            value={` ${password}`}
            className="error-form-field"
            onFocus={this.props.clearSessionErrors}
            onFocus={this.clearField("password")}
          />
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
            placeholder="Password"
          />
        </div>
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    let fname, lname, e_mail, password;

    if (nextProps.errors.includes("Fname can't be blank")) {
      fname = "First Name can't be blank";
    } else fname = this.state.fname;

    if (nextProps.errors.includes("Lname can't be blank")) {
      lname = "Last Name can't be blank";
    } else lname = this.state.lname;

    if (nextProps.errors.includes("E mail can't be blank")) {
      e_mail = "E-mail can't be blank";
    } else if (
      nextProps.errors.includes("Invalid e-mail/password combination")
    ) {
      e_mail = "Invalid e-mail and/or password";
    } else if (nextProps.errors.includes("E mail has already been taken")) {
      e_mail = "E-mail has already been taken";
    } else e_mail = this.state.e_mail;

    if (
      nextProps.errors.includes(
        "Password is too short (minimum is 6 characters)"
      )
    ) {
      password = "Invalid Password (minimum of 6 characters)";
    } else if (
      nextProps.errors.includes("Invalid e-mail/password combination")
    ) {
      password = "Please try again";
    } else password = this.state.password;

    this.setState({
      fname: fname,
      lname: lname,
      e_mail: e_mail,
      password: password
    });
  }

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

                  {this.fnameInputField()}

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

                {this.emailInputField()}

                <br />

                {this.passwordInputField()}

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
