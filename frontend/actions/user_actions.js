import * as UserUtil from "../util/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECIEVE_USER";

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const fetchUsers = () => (dispatch) => {
  return UserUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)));
};

export const fetchUser = (userId) => (dispatch) => {
  return UserUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)));
};
