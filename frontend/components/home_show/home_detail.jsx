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

  calendar() {
    if (this.loadingComplete()) {
      return (
        <BookingsContainer
          className="date-picker"
          homeId={this.props.homeId}
          bookedDates={this.props.bookedDates}
          price={this.props.home.price}
        />
      );
    }
  }

  comments() {
    if (this.loadingComplete()) {
      return (
        <CommentsContainer
          className="comments"
          homeId={this.props.homeId}
          reviews={this.props.home.reviews}
        />
      );
    }
  }

  sellerAvatar() {
    if (this.loadingComplete()) {
      return <img className="seller-avatar" src={this.props.home.image_url} />;
    }
  }

  render() {
    return (
      <div>
        <img className="home-show-image" src={this.props.home.home_url} />

        <div className="home-contents-cntr">
          <div className="home-details-cntr">
            <ul className="home-summary">
              <div className="home-header">
                <h1 className="home-title">{this.props.home.title}</h1>
                {this.sellerAvatar()}
              </div>
              <br />
              <br />
              <div>
                <li className="home-description">
                  {this.props.home.description}
                </li>
              </div>
              {this.comments()}
            </ul>

            {this.calendar()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeDetail;
