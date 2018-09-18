import React from "react";
import { withRouter } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

class BookingDatePicker extends React.Component {
  constructor(props) {
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

  componentWillUnmount() {
    this.props.resetBookingErrors();
  }

  handleChangeStart(date) {
    this.props.resetBookingErrors();
    if (!date) {
      this.setState({
        startDate: null,
        endDate: null,
        startDateSelected: false
      });
    } else if (date > this.state.endDate) {
      this.setState({
        startDate: date,
        endDate: null,
        startDateSelected: true
      });
    } else {
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
    if (this.state.startDate && this.state.endDate) {
      return (
        <div className="booking-request-cntr">
          <input className="book" type="submit" value={"Request to Book"} />
          <p className="booking-charge-notification">
            You won't be charged yet
          </p>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="booking-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.userId) {
      this.props
        .createBooking({
          start_date: this.state.startDate.toDate(),
          end_date: this.state.endDate.toDate(),
          home_id: this.props.homeId
        })
        .then(() => {
          this.props.history.push({
            pathname: `/trips/${this.props.userId}`
          });
        });
    } else {
      this.props.openModal("login");
    }
  }

  checkOutDate() {
    if (this.state.startDateSelected) {
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
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "315px, 5px"
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport"
              }
            }}
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
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "315px, 5px"
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport"
              }
            }}
          />
        </div>
      );
    }
  }

  hasReviews(timesReviewed) {
    const averageRating = this.props.reviewStats.averageRating;

    return (
      <div>
        <Rating
          initialRating={averageRating}
          emptySymbol={
            <FontAwesomeIcon icon={["far", "star"]} color="#7595bf" size="xs" />
          }
          fullSymbol={<FontAwesomeIcon icon="star" color="#7595bf" size="xs" />}
          readonly
        />{" "}
        {timesReviewed}
      </div>
    );
  }

  popularity() {
    const timesReviewed = this.props.reviewStats.timesReviewed;

    if (timesReviewed > 0) {
      return (
        <div className="popular-booking-cntr">
          <ul>
            <li className="popular-booking-text">
              This home is on people's minds.
            </li>
            <li>
              It's been viewed {Math.floor(Math.random() * 500) + 100} times in
              the past week.
            </li>
          </ul>
          <FontAwesomeIcon
            className="lightbulb"
            icon={["far", "lightbulb"]}
            color="#dcdc1d"
            size="3x"
          />
        </div>
      );
    } else {
      return (
        <div className="popular-booking-cntrV2">
          <ul>
            <li className="popular-booking-text">
              This home is on people's minds.
            </li>
            <li>
              It's been viewed {Math.floor(Math.random() * 500) + 100} times in
              the past week.
            </li>
          </ul>
          <FontAwesomeIcon
            className="lightbulb"
            icon={["far", "lightbulb"]}
            color="#dcdc1d"
            size="3x"
          />
        </div>
      );
    }
  }

  renderSwitch() {
    const timesReviewed = this.props.reviewStats.timesReviewed;

    if (timesReviewed > 0) {
      return (
        <div className="booking-form-cntr">
          <form className="booking-form-reviewV" onSubmit={this.handleSubmit}>
            <div className="price-line">
              <div>
                <strong className="price">${this.props.price}</strong> per night
              </div>
              {this.hasReviews(timesReviewed)}
            </div>

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
                  popperPlacement="top-end"
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "315px, 5px"
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false,
                      boundariesElement: "viewport"
                    }
                  }}
                />

                {this.checkOutDate()}
              </div>
            </div>

            {this.bookingSubmit()}
            <div className="booking-form-bottom-border" />
            {this.popularity()}
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <div className="price-line">
              <strong className="price">${this.props.price}</strong> per night
            </div>

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
                  popperPlacement="top-end"
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "315px, 5px"
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false,
                      boundariesElement: "viewport"
                    }
                  }}
                />

                {this.checkOutDate()}
              </div>
            </div>

            {this.bookingSubmit()}
            <div className="booking-form-bottom-border" />
            {this.popularity()}
          </form>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSwitch()}</div>;
  }
}

export default withRouter(BookingDatePicker);
