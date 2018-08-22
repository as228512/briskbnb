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
    this.renderErrors = this.renderErrors.bind(this);
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    switch (this.props.formType) {
      case "signup":
        return (
          <div className="signup-form-container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <div onClick={this.props.closeModal} className="close-x">
                X
              </div>
              {this.renderErrors()}

              <div>
                <div>
                  <input
                    type="text"
                    value={this.state.e_mail}
                    onChange={this.update("e_mail")}
                    className="form-field"
                    placeholder="Email Address"
                  />
                </div>

                <br />

                <div>
                  <input
                    type="text"
                    value={this.state.fname}
                    onChange={this.update("fname")}
                    className="form-field"
                    placeholder="First name"
                  />
                </div>

                <br />

                <div>
                  <input
                    type="text"
                    value={this.state.lname}
                    onChange={this.update("lname")}
                    className="form-field"
                    placeholder="Last name"
                  />
                </div>

                <br />

                <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="form-field"
                    placeholder="Create a Password"
                  />
                </div>

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
            </form>
          </div>
        );

      case "login":
        return (
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
              <br />
              <div>
                <div onClick={this.props.closeModal} className="close-x">
                  X
                </div>
                {this.renderErrors()}

                <div>
                  <input
                    type="text"
                    value={this.state.e_mail}
                    onChange={this.update("e_mail")}
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
