export const createBooking = (booking, homeId) => {
  return $.ajax({
    method: "POST",
    url: `/api/homes/${homeId}/bookings`,
    data: { booking }
  });
};

export const fetchTrips = () => {
  return $.ajax({
    method: "GET",
    url: "/api/bookings"
  });
};

export const editBookingReviewStatus = bookingId => {
  return $.ajax({
    method: "PATCH",
    url: `/api/bookings/${bookingId}`,
    data: { bookingId }
  });
};
