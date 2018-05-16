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
    const { description } = this.props.home;
    return (
      <div className='home-index-item' onClick={this.handleClick}>

        <div className='index-item-info'>
          <span className='index-itemcategory'>Rating:</span>
          <span className='index-item-copy'>
            { null || 'Have you been here? Be the first to review!' }
          </span>
          <span className='index-item-category'>Description:</span>
          <span className='index-item-copy'>{description}</span>
        </div>
        <p>PICTURE</p>
    </div>

    );
  }
}

export default withRouter(HomeIndexItem);
