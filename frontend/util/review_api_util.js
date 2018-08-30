export const createReview = review => {
  return $.ajax({
    method: "POST",
    url: `/api/homes/${review.homeId}/reviews`,
    data: { review }
  });
};

export const fetchReviews = () => {
  return $.ajax({
    method: "GET",
    url: "/api/reviews"
  });
};
