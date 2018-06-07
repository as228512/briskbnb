import React from 'react';
import { Link } from 'react-router';
import BookingDatePicker from './bookings_datepicker';

class HomeDetail extends React.Component {


  componentDidMount() {
    this.props.fetchHome(this.props.homeId);
    this.props.fetchBookings(this.props.homeId);
  }

  handleSubmit(event) {
    event.stopPropagation();
  }


  render () {
    return (
      <div>

        <div className="home-show-image"/>

        <div className="home-contents-cntr">
          <div className="home-details-cntr">

            <ul className="home-summary">
              <h1 className="home-title">{this.props.home.title}</h1>
              <br/>
              <br/>
              <li className="home-description">{this.props.home.description}</li>
            </ul>


            <form className="booking-form" onSubmit={this.handleSubmit}>
              <div><strong className="price">${this.props.home.price}</strong> per night</div>

            <p>Dates</p>
            <BookingDatePicker/>

            <input className="book" type="submit" value={"Book"} />

            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default HomeDetail;
