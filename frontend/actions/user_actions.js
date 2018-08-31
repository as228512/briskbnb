import * as APIUtil from "../util/user_api_util";

export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
export const GET_USER_INFO = "GET_USER_INFO";

export const updateCurrentUser = currentUser => ({
  type: UPDATE_CURRENT_USER,
  currentUser
});

export const getUserInfo = userInfo => ({
  type: GET_USER_INFO,
  userInfo
});

export const updateAvatar = (id, formData) => dispatch =>
  APIUtil.updateAvatar(id, formData).then(user =>
    dispatch(updateCurrentUser(user))
  );

export const fetchCommenterInfo = userId => dispatch =>
  APIUtil.fetchCommenterInfo(userId).then(userInfo =>
    dispatch(getUserInfo(userInfo))
  );
