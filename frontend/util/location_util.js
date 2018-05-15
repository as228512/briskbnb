export const fetchLocations = data => (
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    data
  })
);
