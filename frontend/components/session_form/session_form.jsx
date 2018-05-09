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
    this.props.processForm(user);
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

  // if (this.state.)

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Briskbnb!
          <br/>
          Already have a Briskbnb account? {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">

            <br/>

            <label>Email address:
              <input type="text"
                value={this.state.e_mail}
                onChange={this.update('e_mail')}
                className="login-input"
              />
            </label>

            <br/>

            <label>First name:
              <input type="text"
                value={this.state.fname}
                onChange={this.update('fname')}
                className="login-input"
              />
            </label>

            <br/>

            <label>Last name:
              <input type="text"
                value={this.state.lname}
                onChange={this.update('lname')}
                className="login-input"
              />
            </label>

            <br/>

            <label>Create a Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br/>

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
