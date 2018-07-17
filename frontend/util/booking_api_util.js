export const createBooking = (booking, homeId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/homes/${homeId}/bookings`,
    data: { booking }
  });
};

export const fetchBookings = bookings => {
  debugger
  return $.ajax({
    method: 'GET',
    url: '/api/bookings',
    data: { bookings }
  });
};
