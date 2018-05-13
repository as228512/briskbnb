import React from 'react';
import { Link } from 'react-router-dom';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
  }

    sessionLinks() {
      return (
        <nav>
          <a className="nav-login"
            onClick={() => this.props.openModal('login')}>Log in</a>

          <a className="nav-signup"
            onClick={() => this.props.openModal('signup')}>Sign up</a>
        </nav>
      );
    }

    updateFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        this.setState({ imageFile: file, imageUrl: fileReader.result });
      };

      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

    avatarDropdown() {
      if(this.state.imageUrl) {
        <ul id="gear-dropdown" class="gear-dropdown hidden">
        	<li>
        		<ul class="user-dropdown">
        			<li><a className="logout"
                onClick={this.props.logout}>Log Out</a></li>
              <li className="chooseAvatar"><a href="#">Update Avatar</a>
                <input type="file"  onChange={this.updateFile}/></li>
        		</ul>
        	</li>
        </ul>


        return (
          <hgroup className="header-group">
            <button className="header-button"
              onClick={this.props.logout}>Log Out</button>

            <input type="file"  onChange={this.updateFile}/>
            <div className="wrapper">
              <img src={this.state.imageUrl} alt="avatar"/>
            </div>
          </hgroup>
        );

        } else {

        return (
          <hgroup className="header-group">
            <button className="header-button"
              onClick={this.props.logout}>Log Out</button>


            <input type="file" onChange={this.updateFile}/>
            <div className="wrapper">
              <img src={this.props.currentUser.image_url} alt="avatar"/>
            </div>
          </hgroup>
        );
      }
    }

  render () {
    return this.props.currentUser ?
      this.avatarDropdown() : this.sessionLinks();
  }
}





export default LoggedIn;
