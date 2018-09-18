import React from "react";
import { Link } from "react-router";
import { reviewStats } from "../../reducers/selectors";
import BookingsContainer from "./booking_container";
import CommentsContainer from "../home_comments/comments_container";

class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //when a home is fetched, bookings reducer plants all relevent bookings
    //inside a bookings object
    this.props.fetchHome(this.props.homeId);
  }

  componentWillUnmount() {
    this.props.eraseHome();
  }

  loadingComplete() {
    if (
      !this.props.currentLoadingState &&
      this.props.currentLoadingState !== undefined
    ) {
      return true;
    } else return false;
  }

  calendar() {
    const reviews = this.props.home.reviews;
    return (
      <BookingsContainer
        className="date-picker"
        homeId={this.props.homeId}
        bookedDates={this.props.bookedDates}
        price={this.props.home.price}
        reviewStats={reviewStats(reviews)}
      />
    );
  }

  comments() {
    const reviews = this.props.home.reviews;
    return (
      <CommentsContainer
        className="comments"
        home={this.props.home}
        bookedDates={this.props.bookedDates}
        reviews={reviews}
        reviewStats={reviewStats(reviews)}
      />
    );
  }

  render() {
    if (this.loadingComplete() || this.props.home.home_url) {
      return (
        <div>
          <img className="home-show-image" src={this.props.home.home_url} />

          <div className="home-contents-cntr">
            <div className="home-details-cntr">
              <ul className="home-summary">
                <div className="home-header">
                  <h1 className="home-title">{this.props.home.title}</h1>
                  <img
                    className="seller-avatar"
                    src={this.props.home.image_url}
                  />
                </div>
                <br />
                <br />
                <ul>
                  <li className="home-description">
                    {this.props.home.description}
                  </li>
                  <div className="comments-bottom-border" />
                </ul>
                {this.comments()}
              </ul>

              {this.calendar()}
            </div>
          </div>
        </div>
      );
    } else return <div />;
  }
}

export default HomeDetail;
