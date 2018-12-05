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
    url: `/api/homes/${review.home_id}/reviews`,
    data: { review }
  });
};

export const editReview = review => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });
};

export const deleteReview = review => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${review.id}`
  });
};
