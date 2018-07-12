import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


//need to pass createBooking into either this or homeDetail to try to save a booking (takes start endDates & home_id)
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
  }

  handleChangeStart(date) {
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
    this.setState({
      endDate: date
    });
  }

  handleSubmit(event) {
    event.stopPropagation();
    debugger
  }

  checkOutDate() {
    if(this.state.startDateSelected) {
      return (
        <div>
          <p className="dates">Check Out</p>
          <DatePicker
            id="datepicker-border"
            selectsEnd
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            minDate={this.state.startDate}
            onChange={this.handleChangeEnd}
            disabled={false}
            placeholderText="Click to select a check-out date"
          />
        </div>
      );
    } else {
      return (
        <div>
          <p className="dates">Check Out</p>
          <DatePicker
            id="datepicker-border"
            selectsEnd
            disabled={true}
            placeholderText="Click to select a check-out date"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <form className="booking-form" onSubmit={this.handleSubmit}>
        <div className="price-line"><strong className="price">
          ${this.props.price}</strong> per night</div>

        <div className="date-picker-cntr">
          <div className="date-picker-inner-content">
            <p className="dates">Check In</p>
            <DatePicker
              id="datepicker-border"
              selectsStart
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              minDate={moment().add(1, "days")}
              placeholderText="Click to select a check-in date"
            />

            {this.checkOutDate()}
          </div>
        </div>

        <input className="book" type="submit" value={"Book"} />
      </form>
    );
  }
}

export default BookingDatePicker;
