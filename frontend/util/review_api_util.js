export const fetchReviews = homeId => {
  return $.ajax({
    method: "GET",
    url: "/api/reviews",
    data: { homeId }
  });
};

export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: `/api/homes/${review.homeId}/reviews`,
    data: { review }
  });
};

export const editReview = review => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.reviewId}`,
    data: { review }
  });
};
