export const createBooking = (booking, homeId) => {
  return $.ajax({
    method: "POST",
    url: `/api/homes/${homeId}/bookings`,
    data: { booking }
  });
};

export const fetchTrips = () => {
  return $.post({
    method: "GET",
    url: "/api/bookings"
  });
};

export const editBookingReviewStatus = ({ bookingId, reviewed }) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/bookings/${bookingId}`,
    data: { reviewed }
  });
};
