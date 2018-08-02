export const fetchHomes = data => {
  return $.ajax({
    method: "GET",
    url: "/api/homes",
    data
  });
};

export const fetchHome = id => {
  return $.ajax({
    method: "GET",
    url: `/api/homes/${id}`
  });
};

export const createHome = home => {
  return $.ajax({
    method: "POST",
    url: "/api/homes",
    data: { home }
  });
};
