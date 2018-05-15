export const fetchHomes = data => {
  return $.ajax({
    method: 'GET',
    url: '/api/homes',
    data
  });
};

export const fetchHome = id => (
  $.ajax({
    method: 'GET',
    url: `/api/homes/${id}`
  })
);

export const createHome = home => (
  $.ajax({
    method: 'POST',
    url: '/api/homes',
    data: { home }
  })
);
