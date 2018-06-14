import React from 'react';
import { withRouter } from 'react-router-dom';
import HomeShowContainer from '../home_show/home_show_container';

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const homeId = this.props.home.id;
    this.props.history.push(`/homes/${homeId}`);
  }

  render() {
    const { title, price, home_url } = this.props.home;

    return (
      <div className="home-index-item" onClick={this.handleClick}>

        <img className="home-index-image" src={home_url}/>
        <div className='index-item-info'>
          <div className="index-item-info-title">{title}</div>
          <p>From ${price} per night · Free cancellation</p>
        </div>
      </div>

    );
  }
}

export default withRouter(HomeIndexItem);
