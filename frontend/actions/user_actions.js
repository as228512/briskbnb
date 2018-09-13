import * as APIUtil from "../util/user_api_util";

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";

export const updateCurrentUser = currentUser => ({
  type: UPDATE_CURRENT_USER,
  currentUser
});

export const updateAvatar = (id, formData) => dispatch =>
  APIUtil.updateAvatar(id, formData).then(user =>
    dispatch(updateCurrentUser(user))
  );
