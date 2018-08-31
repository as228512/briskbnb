export const updateAvatar = (id, formData) =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    data: formData
  });

export const fetchCommenterInfo = userId =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}`,
    data: userId
  });
