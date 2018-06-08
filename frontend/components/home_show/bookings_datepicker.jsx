import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';



class BookingDatepicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    debugger
    this.setState({
      endDate: date
    });
  }

  render() {
    debugger
    return (
      <div className="date-picker-inner-content">
        <p className="dates">Check In</p>
        <DatePicker
          id="datepicker-border"
          selectsStart
          selected={this.state.startDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
          minDate={moment().add(1, "days")}
          placeholderText="Click to select a check-in date"
        />

        <p className="dates">Check Out</p>
        <DatePicker
          id="datepicker-border"
          selectsEnd
          selected={this.state.endDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          placeholderText="Select a check-out date"
        />
      </div>
    );
  }
}

export default BookingDatepicker;
