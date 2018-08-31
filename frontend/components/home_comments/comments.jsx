import React from "react";

import SingleComment from "./single_comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  averageReviewRating(reviews) {
    let average = 0;

    reviews.forEach(review => {
      average += review.rating;
    });

    return average / reviews.length || "";
  }

  // comment(comment) {}

  render() {
    const reviews = this.props.reviews;
    const numberOfReviews = this.props.reviews.length;

    return (
      <div>
        <div>
          <div className="top-rating-border" />

          <h1 className="average-rating">
            {numberOfReviews} REVIEWS{" "}
            <span>{this.averageReviewRating(reviews)}</span>
          </h1>

          <div className="comments-border" />
        </div>

        {reviews.map(review => {
          return (
            <SingleComment
              review={review}
              fetchCommenterInfo={this.props.fetchCommenterInfo}
              key={review.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
