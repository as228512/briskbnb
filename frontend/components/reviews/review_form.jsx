import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = this.state.body;
    const rating = this.state.rating;
    const homeId = this.props.homeId;

    this.props
      .processForm({ body: body, rating: rating, home_id: homeId })
      .then(this.props.closeModal);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit} className="review-form">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>

          <div>Rate your stay at this brisk location!</div>

          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
            className="temp-rating-field"
            min="1"
            max="5"
          />

          <div>Let us know! How was your stay?</div>

          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            className="review-body"
            maxLength="500"
            placeholder=" Comments"
          />

          <input
            type="submit"
            valiue={"Submit"}
            className="review-submit-button"
          />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
