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

  componentDidMount() {
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

  handleSubmit(e) {
    e.preventDefault();
    if(this.props.currentUserStatus) {
      this.props.createBooking({
        startDate: this.state.startDate.d,
        endDate: this.state.endDate.d,
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
        <div>
          <p className="dates">Check Out</p>
          <DatePicker
            className="datepicker-border"
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
            className="datepicker-border"
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
      <div>
        <Modal/>
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="price-line"><strong className="price">
              ${this.props.price}</strong> per night</div>

            <div className="date-picker-cntr">
              <div className="date-picker-inner-content">
                <p className="dates">Check In</p>
                <DatePicker
                  className="datepicker-border"
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
        </div>
    );
  }
}

export default BookingDatePicker;
