import React from "react";
import { withRouter } from "react-router-dom";
import ReviewButtonContainer from "../reviews/review_button_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

class HomeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false
    };

    this.toggleBookings = this.toggleBookings.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const homeId = this.props.home.id;
    this.props.history.push(`/homes/${homeId}`);
  }

  averageStarRating(reviewStats) {
    const { timesReviewed, averageRating } = reviewStats;
    if (timesReviewed > 0) {
      return (
        <div>
          <Rating
            initialRating={averageRating}
            emptySymbol={
              <FontAwesomeIcon
                icon={["far", "star"]}
                color="#7595bf"
                size="xs"
              />
            }
            fullSymbol={
              <FontAwesomeIcon icon="star" color="#7595bf" size="xs" />
            }
            readonly
          />{" "}
          <span className="home-index-review-number">{timesReviewed}</span>
        </div>
      );
    }
  }

  homeIndex() {
    const { title, price, home_url } = this.props.home;
    const reviewStats = this.props.reviewStats;

    return (
      <div className="home-index-item" onClick={this.handleClick}>
        <img className="home-index-image" src={home_url} />
        <div className="index-item-info">
          <div className="index-item-info-title">{title}</div>
          <p className="index-item-description">
            ${price} per night · Free cancellation
          </p>
          {this.averageStarRating(reviewStats)}
        </div>
      </div>
    );
  }

  //Home index ^^^
  ///
  ///
  ///
  ///
  ///
  ///
  //Trip index ▽▽▽

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

  toggleBookings() {
    if (this.state.showMore) this.setState({ showMore: false });
    else this.setState({ showMore: true });
  }

  renderBookingRanges() {
    const isUpcoming = this.props.upcomingTrip;
    const showMore = this.state.showMore;
    const allTrips = this.translateBookingDates();
    const twoTrips = this.translateBookingDates().slice(0, 2);
    const bookingInfo = showMore ? allTrips : twoTrips;
    const totalBookingDatesLength = this.translateBookingDates().length;

    if (isUpcoming) {
      return (
        <ul>
          {bookingInfo.map((dateRange, i) => (
            <li className="booking-range" key={`dateRange-${i}`}>
              <span className="trips-snowflake-bullet">
                <FontAwesomeIcon icon="snowflake" />
              </span>{" "}
              {dateRange[0]} - {dateRange[1]}
            </li>
          ))}
          {this.renderMoreBookingsButton(totalBookingDatesLength)}
        </ul>
      );
    } else {
      return (
        <ul>
          {bookingInfo.map((info, i) => (
            <li className="booking-range" key={`dateRange-${i}`}>
              <span className="trips-snowflake-bullet">
                <FontAwesomeIcon icon="snowflake" />
              </span>{" "}
              {info[0]} - {info[1]}{" "}
              <ReviewButtonContainer
                tripsIndex={true}
                reviewed={info[2]}
                bookingId={info[3]}
                homeId={this.props.home.id}
                review={this.findReview(info[3])}
              />
            </li>
          ))}
          {this.renderMoreBookingsButton(totalBookingDatesLength)}
        </ul>
      );
    }
  }

  renderMoreBookingsButton(totalBookingDatesLength) {
    if (totalBookingDatesLength > 2 && !this.state.showMore) {
      return (
        <button
          type="button"
          className="more-bookings-button"
          onClick={this.toggleBookings}
        >
          Show More...{" "}
        </button>
      );
    } else if (totalBookingDatesLength > 2 && this.state.showMore) {
      return (
        <button
          type="button"
          className="more-bookings-button"
          onClick={this.toggleBookings}
        >
          Show Less...{" "}
        </button>
      );
    } else if (totalBookingDatesLength > 0) {
      return <div />;
    } else return null;
  }

  findReview(bookingId) {
    const reviews = this.props.home.reviews || {};
    const reviewsArr = Object.keys(reviews).map(key => reviews[key]);

    let review = reviewsArr.find(review => {
      return review.booking_id === bookingId;
    });

    return review;
  }

  TripIndex() {
    const { title, home_url } = this.props.home;

    const bookingRanges = this.renderBookingRanges();
    const isUpcomingTrip = this.props.upcomingTrip;
    const tripsPlanned = !this.renderBookingRanges().props.children[1]
      ? false
      : true;

    const preBookingText = isUpcomingTrip ? "Booked Dates:" : "Past Visits:";

    if (tripsPlanned) {
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
              {bookingRanges}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return this.props.history.location.pathname === "/homes"
      ? this.homeIndex()
      : this.TripIndex();
  }
}

export default withRouter(HomeIndexItem);
