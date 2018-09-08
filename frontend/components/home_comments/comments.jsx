import React from "react";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SingleComment from "./single_comment";

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  //change the color of starRating to the correct color and place into other components with
  //appropriates alternations (size.. etc..)
  render() {
    const reviews = this.props.reviews;
    const numberOfReviews = this.props.reviews.length;

    return (
      <div>
        <div>
          <div className="top-rating-border" />

          <h1 className="average-rating">
            {numberOfReviews} Reviews{" "}
            <Rating
              className="comment-star-rating"
              initialRating={this.props.reviewData.averageRating}
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
