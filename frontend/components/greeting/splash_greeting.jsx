import React from 'react';
import { Link } from 'react-router-dom';

class SplashLoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.updateFile = this.updateFile.bind(this);
    this.revealDropdown = this.revealDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
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
    	      $('#dropdown').removeClass('hidden');
      $('#dropdown-button').off('click', this.revealDropdown);
      $(document).on('click', this.hideDropdown);
    }

    hideDropdown() {
    	      $('#dropdown').addClass('hidden');
      $('#dropdown-button').on('click', this.revealDropdown);
      $(document).off('click',this. hideDropdown);
    }

    sessionLinks() {
      return (
        <nav>
          <a className="splash-nav-login"
            onClick={() => this.props.openModal('login')}>Log in</a>

          <a className="splash-nav-signup"
            onClick={() => this.props.openModal('signup')}>Sign up</a>
        </nav>
      );
    }

    avatarDropdown() {
      return (
        <hgroup>

          <div className="splash-dropdown-button">
             <img src={this.props.currentUser.image_url}
               alt="splash-dropdown-button" onClick={this.revealDropdown}/>
          </div>

          <ul id="dropdown" className="dropdown hidden">
          	<li>
          		<ul className="options">
                <div><label htmlFor="file_input">Update Avatar</label></div>
                <li className="chooseAvatar">
                  <input type="file" id="file_input"
                    onChange={this.updateFile}/>
                </li>
          			<li><a className="logout"
                  onClick={this.props.logout}>Log Out</a></li>
          		</ul>
          	</li>
          </ul>
        </hgroup>
      );
    }

  render () {
    return this.props.currentUser ?
      this.avatarDropdown() : this.sessionLinks();
  }
}





export default SplashLoggedIn;