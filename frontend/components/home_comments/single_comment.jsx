import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SingleComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownStatus: false,
      dropdownButtonStatus: false
    };
  }

  convertDateToEnglish() {
    const commentCreationDate = new Date(this.props.review.created_at);
    const dateOptions = { month: "long", year: "numeric" };

    return commentCreationDate.toLocaleDateString("en-US", dateOptions);
  }

  toggleDropdown() {
    let dropdownStatus = this.state.dropdownStatus ? false : true;
    let dropdownButtonStatus = this.state.dropdownButtonStatus ? false : true;
    this.setState({
      dropdownStatus: dropdownStatus,
      dropdownButtonStatus: dropdownButtonStatus
    });
  }

  dropdownButton() {
    if (this.props.currentUser === this.props.review.user_id)
      if (this.state.dropdownButtonStatus) {
        return (
          <ul className="comment-crud-dropdown-x">
            <FontAwesomeIcon
              icon="times"
              onClick={() => this.toggleDropdown()}
            />
            {this.dropdown()}
          </ul>
        );
      } else
        return (
          <ul className="comment-crud-dropdown-bars">
            <FontAwesomeIcon
              onClick={() => this.toggleDropdown()}
              icon="bars"
            />
            {this.dropdown()}
          </ul>
        );
  }

  dropdown() {
    if (this.state.dropdownStatus) {
      const modalType = "review";
      const homeId = this.props.review.home_id;
      const bookingId = this.props.review.booking_id;
      const component = "singleComment";
      const review = this.props.review;

      return (
        <nav className="comment-dropdown-cntr">
          <input
            className="edit-review-DD-btn"
            type="submit"
            value={"Edit Review"}
            onClick={() =>
              this.props.openReviewModal(
                modalType,
                homeId,
                bookingId,
                component,
                "update",
                review
              )
            }
          />

          <input
            className="delete-review-DD-btn"
            type="submit"
            value={"Delete Review"}
            onClick={() =>
              this.props.deleteReview(review.id, homeId).then(() =>
                this.props
                  .updateReviewedBooking({
                    bookingId: bookingId,
                    reviewed: false
                  })
                  .then(() => this.props.fetchHome(homeId))
              )
            }
          />
        </nav>
      );
    }
  }

  render() {
    const body = this.props.review.body;
    const creationDate = this.convertDateToEnglish();
    const firstName = this.props.commenterInfo.fname || "";
    const imageUrl = this.props.commenterInfo.image_url || "";

    return (
      <div>
        <div className="comment-container">
          <div className="commenter-info-container">
            <img className="commenter-avatar" src={imageUrl} />
            <ul className="commenter-text-info">
              <li className="commenter-name">{firstName}</li>
              <li className="comment-creation-date">{creationDate}</li>
            </ul>
            {this.dropdownButton()}
          </div>
          <div>
            <p className="comment-body">{body}</p>
          </div>
        </div>
        <div className="comments-bottom-border" />
      </div>
    );
  }
}

export default SingleComment;
