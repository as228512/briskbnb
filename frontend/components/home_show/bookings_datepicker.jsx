import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Modal from '../session_form/login_signup_modal';

import 'react-datepicker/dist/react-datepicker.css';

class BookingDatePicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDateSelected: false,
      startDate: null,
      endDate: null
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeStart(date) {
    this.props.resetBookingErrors();
    if(!date) {
      this.setState({
        startDate: null,
        endDate: null,
        startDateSelected: false
      });
    }

    else if(date > this.state.endDate) {
      this.setState({
        startDate: date,
        endDate: null,
        startDateSelected: true
      });
    }

    else {
      this.setState({
        startDate: date,
        startDateSelected: true
      });
    }
  }

  handleChangeEnd(date) {
    this.props.resetBookingErrors();
    this.setState({
      endDate: date
    });
  }

  bookingSubmit() {
    if(this.state.startDate && this.state.endDate) {
      return (
        <input className="book" type="submit" value={"Request to Book"} />
      )
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='booking-errors' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.currentUserStatus) {
      this.props.createBooking({
        start_date: this.state.startDate.toDate(),
        end_date: this.state.endDate.toDate(),
        home_id: this.props.homeId
      });
    }
    else {
      this.props.openModal('login')
    }
  }

  checkOutDate() {
    if(this.state.startDateSelected) {
      return (
        <div className="date-picker-inner-content">
          <p className="dates">Check Out</p>
          <DatePicker
            className="datepicker-border"
            selectsEnd
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            minDate={this.state.startDate}
            onChange={this.handleChangeEnd}
            excludeDates={this.props.bookedDates}
            disabled={false}
            monthsShown={2}
            placeholderText="Click to select a check-out date"
          />
        </div>
      );
    } else {
      return (
        <div className="date-picker-inner-content">
          <p className="dates">Check Out</p>
          <DatePicker
            id="datepicker-border"
            className="datepicker-border"
            selectsEnd
            excludeDates={this.props.bookedDates}
            disabled={true}
            placeholderText="First, select a check-in date"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Modal/>
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="price-line"><strong className="price">
              ${this.props.price}</strong> per night</div>

            <div className="date-picker-cntr">
              <div className="date-picker-inner-content">
                {this.renderErrors()}

                <p className="dates">Check In</p>
                <DatePicker
                  className="datepicker-border"
                  excludeDates={this.props.bookedDates}
                  selectsStart
                  selected={this.state.startDate}
                  onChange={this.handleChangeStart}
                  minDate={moment()}
                  monthsShown={2}
                  placeholderText="Click to select a check-in date"
                />

                {this.checkOutDate()}
              </div>
            </div>

            {this.bookingSubmit()}
          </form>
        </div>
    );
  }
}

export default BookingDatePicker;
