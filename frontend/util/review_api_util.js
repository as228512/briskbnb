export const createReview = (review, homeId) => {
  return $.ajax({
    method: "POST",
    url: `/api/homes/${homeId}/reviews`,
    data: { review }
  });
};

export const fetchReviews = homeId => {
  return $.ajax({
    method: "GET",
    url: "/api/reviews"
  });
};
