import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveErrors = errors => {
  return { type: RECEIVE_REVIEW_ERRORS, errors };
};

export const clearReivewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

export const fetchReviews = homeId => dispatch =>
  APIUtil.fetchReviews(homeId).then(reviews =>
    dispatch(receiveReviews(reviews))
  );

export const createReview = review => dispatch => {
  return APIUtil.createReview(review)
    .then(
      review => APIUtil.fetchReviews(review),
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(reviews => dispatch(receiveReviews(reviews)));
};

export const editReview = review => dispatch =>
  APIUtil.editReview(review)
    .then(
      payLoad => {
        return APIUtil.fetchReviews(payLoad.review);
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(reviews => dispatch(receiveReviews(reviews)));

export const deleteReview = review => dispatch => {
  const homeId = review.home_id;

  return APIUtil.deleteReview(review).then(() =>
    APIUtil.fetchReviews(homeId).then(reviews =>
      dispatch(receiveReviews(reviews))
    )
  );
};
