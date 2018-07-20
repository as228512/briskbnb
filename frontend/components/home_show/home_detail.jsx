import React from 'react';
import { Link } from 'react-router';
// import BookingDatePicker from './bookings_datepicker';
import BookingsContainer from './booking_container' ;

class HomeDetail extends React.Component {


  componentDidMount() {
    this.props.fetchHome(this.props.homeId);
    // this.props.fetchBookings(this.props.homeId);
  }

  componentWillUnmount() {
    this.props.eraseHome();
  }

  calendar() {
    if(!this.props.currentLoadingState && this.props.currentLoadingState !== undefined) {
      return (
            <BookingsContainer
              homeId={this.props.homeId}
              bookedDates={this.props.bookedDates}
              price={this.props.home.price}
              className="date-picker"/>
      );
    }
  }


  render () {
    return (
      <div>

        <img className="home-show-image" src={this.props.home.home_url}/>

        <div className="home-contents-cntr">
          <div className="home-details-cntr">

            <ul className="home-summary">
              <div className="home-header">
                <h1 className="home-title">{this.props.home.title}</h1>
                <img className="seller-avatar" src={this.props.home.image_url}/>
              </div>
              <br/>
              <br/>
              <div>
                <li className="home-description">{this.props.home.description}</li>
              </div>
            </ul>

            { this.calendar() }

          </div>
        </div>
      </div>
    );
  }
}

export default HomeDetail;
