export const selectHome = ({ homes }, homeId) => {
  return homes[homeId] || { reviewIds: [], bookingIds: [] };
};

export const selectBookingsForHome = ({ homes, bookings }, home) => {
  return home.bookingIds.map(bookingId => bookings[bookingId]);
};

export const asArray = ({ homes }) => (
  Object.keys(homes).map(key => homes[key])
);
