import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewButtonContainer from "../reviews/review_button_container";
import DatePicker from "react-datepicker";

import SingleComment from "./single_comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = new google.maps.Map(document.getElementById("home-show-map"), {
      center: { lat: this.props.home.lat, lng: this.props.home.long },
      zoom: 13
    });

    const homeLocation = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: map.center,
      radius: 500
    });
  }

  promptUserReview(numberOfReviews) {
    if (this.props.pendingReviews.length > 0) {
      const pendingReview = this.props.pendingReviews[0];
      const options = { month: "short", year: "numeric" };
      const englishDate = new Date(pendingReview[0]).toLocaleDateString(
        "en-US",
        options
      );

      return (
        <div className="pending-review-cntr">
          <ul className="pending-review-text-v1">
            <li>{`You stayed here in ${englishDate}.`}</li>
            <li>Let us know what you thought!</li>
          </ul>
          <ReviewButtonContainer
            homeShow={true}
            review={false}
            bookingId={pendingReview[3]}
            homeId={pendingReview[2]}
          />
        </div>
      );
    } else if (numberOfReviews > 0) {
      return <div />;
    } else {
      return (
        <ul className="pending-review-text-v2">
          <li>Why not be the first?</li>
        </ul>
      );
    }
  }

  timesReviewed() {
    const numberOfReviews = this.props.reviews.length;

    if (numberOfReviews > 0) {
      let pluralReviews = "Reviews";
      if (numberOfReviews === 1) pluralReviews = "Review";

      return (
        <h1 className="average-rating">
          {numberOfReviews} {pluralReviews}{" "}
          <Rating
            className="comment-star-rating"
            initialRating={this.props.reviewStats.averageRating}
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
          />
          {this.promptUserReview(numberOfReviews)}
        </h1>
      );
    } else {
      return (
        <h1 className="average-rating">
          <li>No reviews just yet.</li>
          {this.promptUserReview()}
        </h1>
      );
    }
  }

  availabilityCalendar() {
    return (
      <div className="inline-datepicker-cntr">
        <h1 className="inline-datepicker-text">Availability</h1>
        <DatePicker
          inline
          monthsShown={2}
          excludeDates={this.props.bookedDates}
          disabled={true}
        />
      </div>
    );
  }

  render() {
    const reviews = this.props.reviews;
    const commenters = this.props.commenters;
    const reviewText = this.timesReviewed();
    const openReviewModal = this.props.openReviewModal;
    const deleteReview = this.props.deleteReview;
    const updateReviewedBooking = this.props.updateReviewedBooking;
    const currentUser = this.props.currentUser;
    const eraseHomes = this.props.eraseHomes;
    const fetchHome = this.props.fetchHome;

    return (
      <div>
        {this.availabilityCalendar()}
        <div>
          <div className="comments-top-border" />

          {reviewText}

          <div className="comments-bottom-border" />
        </div>

        {reviews.map(review => {
          const commenterInfo = commenters[review.user_id] || {};

          return (
            <SingleComment
              currentUser={currentUser}
              review={review}
              commenterInfo={commenterInfo}
              openReviewModal={openReviewModal}
              deleteReview={deleteReview}
              updateReviewedBooking={updateReviewedBooking}
              eraseHomes={eraseHomes}
              fetchHome={fetchHome}
              key={review.id}
            />
          );
        })}
        <h1 className="home-show-map-text">The neighborhood</h1>
        <div id="home-show-map" />
        <h3 className="home-show-map-bottom-text">
          Exact location information is provided after a booking is confirmed
        </h3>
        <div className="comments-bottom-border" />
      </div>
    );
  }
}

export default Comments;
