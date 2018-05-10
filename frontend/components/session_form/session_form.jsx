import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      e_mail: '',
      fname: '',
      lname: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

    render() {
      switch(this.props.formType) {
        case "signup":
          return (
            <div className="signup-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}

                <div>
                  <div className="input-margin">
                    <input type="text"
                      value={this.state.e_mail}
                      onChange={this.update('e_mail')}
                      className="signup-input"
                      placeholder="Email address"
                    />
                  </div>

                  <br/>

                  <div>
                    <input type="text"
                      value={this.state.fname}
                      onChange={this.update('fname')}
                      className="signup-input"
                      placeholder="First name"
                    />
                  </div>

                  <br/>

                  <div>
                    <input type="text"
                      value={this.state.lname}
                      onChange={this.update('lname')}
                      className="signup-input"
                      placeholder="Last name"
                    />
                  </div>

                  <br/>

                  <div>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="signup-input"
                      placeholder="Create a Password"
                    />
                  </div>

                  <br/>
                    <input className="session-submit" type="submit" value={`Sign up`} />
                </div>
                <br/>
                <div className="sign-up-form-footer-border"/>
                <span className="sign-up-form-footer">Already have a Briskbnb account? <i className="sign-up-form-footer-link">{this.props.otherForm} </i></span>
              </form>
            </div>
          );

        case "login":
          return (
            <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <br/>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                {this.renderErrors()}
                <div className="login-form">

                    <div className="input-margin">
                      <input type="text"
                        value={this.state.e_mail}
                        onChange={this.update('e_mail')}
                        className="login-input"
                        placeholder="Email Address"
                      />
                    </div>

                    <br/>
                    <div className="input-margin">
                      <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                        placeholder="Password"
                      />
                    </div>

                  <br/>
                    <input className="session-submit" type="submit" value={this.props.formType} />
                  <br/>

                  <div className="sign-up-form-footer-border"/>
                  <span className="sign-up-form-footer">Don't have an account? <i className="sign-up-form-footer-link">{this.props.otherForm} </i></span>
                </div>
              </form>
            </div>
          );
      }

  }
}

export default withRouter(SessionForm);
