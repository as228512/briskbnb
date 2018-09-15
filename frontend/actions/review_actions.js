import * as APIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const fetchReviews = homeId => dispatch =>
  APIUtil.fetchReviews(homeId).then(reviews =>
    dispatch(receiveReviews(reviews))
  );

export const createReview = review => dispatch =>
  APIUtil.createReview(review)
    .then(review => APIUtil.fetchReviews(review.review.home_id))
    .then(reviews => dispatch(receiveReviews(reviews)));

export const editReview = review => dispatch =>
  APIUtil.editReview(review)
    .then(review => APIUtil.fetchReviews(review.review.home_id))
    .then(reviews => dispatch(receiveReviews(reviews)));
