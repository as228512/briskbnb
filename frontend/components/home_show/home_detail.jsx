import React from "react";
import { Link } from "react-router";
import BookingsContainer from "./booking_container";
import CommentsContainer from "../home_comments/comments_container";

class HomeDetail extends React.Component {
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

  reviewData(reviews) {
    if (!reviews) return { averageRating: 0, timesReviewed: "" };
    const userReviews = Object.keys(reviews).map(key => reviews[key]);
    let reviewData = {};

    let average = 0;

    userReviews.forEach(review => {
      average += review.rating;
    });

    reviewData["averageRating"] = average / userReviews.length || "";
    reviewData["timesReviewed"] = userReviews.length;

    return reviewData;
  }

  calendar() {
    const reviews = this.props.home.reviews;
    return (
      <BookingsContainer
        className="date-picker"
        homeId={this.props.homeId}
        bookedDates={this.props.bookedDates}
        price={this.props.home.price}
        reviewData={this.reviewData(reviews)}
      />
    );
  }

  comments() {
    const reviews = this.props.home.reviews;
    return (
      <CommentsContainer
        className="comments"
        home={this.props.home}
        reviews={reviews}
        reviewData={this.reviewData(reviews)}
      />
    );
  }

  render() {
    debugger;
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
