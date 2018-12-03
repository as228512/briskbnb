export const updateAvatar = (id, formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    data: formData
  });
};
