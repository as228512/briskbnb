import React from 'react';
import { Link } from 'react-router';
import BookingDatePicker from './bookings_datepicker';

class HomeDetail extends React.Component {


  componentDidMount() {
    this.props.fetchHome(this.props.homeId);
    this.props.fetchBookings(this.props.homeId);
  }

  componentWillReceiveProps(nextProps) {
    // need to create another loading slice of redux state
    //in order to stop calendar from rendering prematurely
    if(this.props.home !== nextProps.home) {
      console.log("fired");
    }
  }

  handleSubmit(event) {
    event.stopPropagation();
  }

  calendar() {
    //condional will go below for loading state
    if(true) {
      return (
        <form className="booking-form" onSubmit={this.handleSubmit}>
          <div className="price-line"><strong className="price">
            ${this.props.home.price}</strong> per night</div>

          <div className="date-picker-cntr">
            <BookingDatePicker homeId={this.props.homeId}
              bookings={this.props.bookings} className="date-picker"/>
          </div>

          <input className="book" type="submit" value={"Book"} />

        </form>
      );
    }
  }


  render () {
    debugger
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
