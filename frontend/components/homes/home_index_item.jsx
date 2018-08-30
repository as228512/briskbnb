import React from "react";
import { withRouter } from "react-router-dom";
import HomeShowContainer from "../home_show/home_show_container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    };

    this.toggleBookings = this.toggleBookings.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderMoreUpcomingBookings = this.renderMoreUpcomingBookings.bind(
      this
    );
  }

  componentDidMount() {}

  handleClick() {
    const homeId = this.props.home.id;
    this.props.history.push(`/homes/${homeId}`);
  }

  homeIndex() {
    const { title, price, home_url } = this.props.home;

    return (
      <div className="home-index-item" onClick={this.handleClick}>
        <img className="home-index-image" src={home_url} />
        <div className="index-item-info">
          <div className="index-item-info-title">{title}</div>
          <p className="index-item-description">
            From ${price} per night · Free cancellation
          </p>
        </div>
      </div>
    );
  }

  ///
  ///
  ///
  ///
  ///
  ///

  translateBookingDates() {
    const bookings = this.props.bookings;
    const homeId = this.props.home.id;
    let releventBookingsArray = [];

    Object.keys(bookings).forEach(key => {
      if (homeId === bookings[key]["home_id"]) {
        releventBookingsArray.push([
          bookings[key]["start_date"],
          bookings[key]["end_date"],
          bookings[key]["reviewed"],
          bookings[key]["id"]
        ]);
      }
    });

    let orderedBookingsArray = releventBookingsArray.sort();
    debugger;
    let startDateOptions = { weekday: "short", month: "short", day: "numeric" };
    let endDateOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    orderedBookingsArray.forEach(booking => {
      let bookingInfo = orderedBookingsArray.shift();

      let startDate = new Date(bookingInfo[0]);
      let endDate = new Date(bookingInfo[1]);
      let reviewed = bookingInfo[2];
      let bookingId = bookingInfo[3];

      orderedBookingsArray.push([
        startDate.toLocaleDateString("en-US", startDateOptions),
        endDate.toLocaleDateString("en-US", endDateOptions),
        reviewed,
        bookingId
      ]);
    });

    return orderedBookingsArray;
  }

  filterUpcomingTrips() {
    const englishDateRanges = this.translateBookingDates();

    const filteredDateRanges = englishDateRanges.filter(
      dateRange => new Date() < new Date(dateRange[1])
    );

    return filteredDateRanges;
  }

  filterPastTrips() {
    const englishDateRanges = this.translateBookingDates();

    const filteredDateRanges = englishDateRanges.filter(
      dateRange => new Date() >= new Date(dateRange[1])
    );

    return filteredDateRanges;
  }

  toggleBookings() {
    if (this.state.showMore) this.setState({ showMore: false });
    else this.setState({ showMore: true });
  }

  renderMoreBookingsButton(totalBookingDatesLength) {
    if (totalBookingDatesLength > 2 && !this.state.showMore) {
      return (
        <button
          type="button"
          className="more-bookings-button"
          onClick={this.toggleBookings}>
          Show More...{" "}
        </button>
      );
    } else if (totalBookingDatesLength > 2 && this.state.showMore) {
      return (
        <button
          type="button"
          className="more-bookings-button"
          onClick={this.toggleBookings}>
          Show Less...{" "}
        </button>
      );
    } else if (totalBookingDatesLength > 0) {
      return <div />;
    } else return null;
  }

  renderUpcomingBookingRanges() {
    let totalBookingDatesLength = this.filterUpcomingTrips().length;

    let englishDateRanges;
    if (this.state.showMore) {
      englishDateRanges = this.filterUpcomingTrips();
    } else englishDateRanges = this.filterUpcomingTrips().slice(0, 2);

    return (
      <ul>
        {englishDateRanges.map((dateRange, i) => (
          <li className="booking-range" key={`dateRange-${i}`}>
            <span>
              <FontAwesomeIcon icon="snowflake" />
            </span>{" "}
            {dateRange[0]} - {dateRange[1]}
          </li>
        ))}
        {this.renderMoreBookingsButton(totalBookingDatesLength)}
      </ul>
    );
  }

  renderMoreUpcomingBookings() {
    const moreEnglishDateRanges = this.filterUpcomingTrips();

    return (
      <ul>
        {moreEnglishDateRanges.map((dateRange, i) => (
          <li className="booking-range" key={`dateRange-${i}`}>
            <span>
              <FontAwesomeIcon icon="snowflake" />
            </span>{" "}
            {dateRange[0]} - {dateRange[1]}
          </li>
        ))}
        <button
          type="button"
          className="more-bookings-button"
          onClick={this.renderUpcomingBookingRanges}>
          Show Less...{" "}
        </button>
      </ul>
    );
  }

  //
  //
  //
  //
  //
  //
  //

  renderReviewButton(review, bookingId) {
    let homeId = this.props.home.id;
    debugger;

    if (!review) {
      debugger;
      return (
        <span>
          <button
            onClick={() =>
              this.props.openReviewModal("review", homeId, bookingId)
            }>
            Review Trip
          </button>
        </span>
      );
    }
  }

  renderPastBookingRanges() {
    let totalBookingDatesLength = this.filterPastTrips().length;

    let bookingInfo;
    if (this.state.showMore) {
      bookingInfo = this.filterPastTrips();
    } else bookingInfo = this.filterPastTrips().slice(0, 2);

    //bookingInfo info ex. arr obj. >> [start_date, end_date, reviewed, booking_id]

    return (
      <ul>
        {bookingInfo.map((info, i) => (
          <li className="booking-range" key={`dateRange-${i}`}>
            <span>
              <FontAwesomeIcon icon="snowflake" />
            </span>{" "}
            {info[0]} - {info[1]} {this.renderReviewButton(info[2], info[3])}
          </li>
        ))}
        {this.renderMoreBookingsButton(totalBookingDatesLength)}
      </ul>
    );
  }

  //
  //
  //
  //
  //
  //
  //
  //

  renderMorePastBookings() {
    const moreEnglishDateRanges = this.filterPastTrips();

    return (
      <ul>
        {moreEnglishDateRanges.map((dateRange, i) => (
          <li className="booking-range" key={`dateRange-${i}`}>
            <span>
              <FontAwesomeIcon icon="snowflake" />
            </span>{" "}
            {dateRange[0]} - {dateRange[1]}
          </li>
        ))}
        <button type="button" onClick={this.renderPastBookingRanges}>
          Show Less...{" "}
        </button>
      </ul>
    );
  }

  TripIndex() {
    const { title, home_url } = this.props.home;

    let renderBookingRanges;
    let preBookingText;

    if (this.props.upcomingTrip) {
      renderBookingRanges = this.renderUpcomingBookingRanges();
      preBookingText = "Booked Dates:";
    } else {
      renderBookingRanges = this.renderPastBookingRanges();
      preBookingText = "Past Visits:";
    }

    if (
      (this.props.upcomingTrip &&
        !this.renderUpcomingBookingRanges().props.children[1]) ||
      (!this.props.upcomingTrip &&
        !this.renderPastBookingRanges().props.children[1])
    ) {
      return null;
    } else {
      return (
        <div className="home-index-item">
          <img
            className="trip-index-image"
            src={home_url}
            onClick={this.handleClick}
          />
          <div className="index-item-info">
            <div className="trip-item-info-title">{title}</div>
            <br />

            <ul className="booked-dates">
              <strong>{preBookingText}</strong>
              {renderBookingRanges}
            </ul>
          </div>
        </div>
      );
    }
  }

  render() {
    if (this.props.history.location.pathname === "/homes")
      return this.homeIndex();
    else return this.TripIndex();
  }
}

export default withRouter(HomeIndexItem);
