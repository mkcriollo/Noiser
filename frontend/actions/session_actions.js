import * as SessionApiUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS"


const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


// thunk actions creator

export const createNewUser = formUser => dispatch => (
    SessionApiUtil.signup(formUser).then(user => dispatch(receiveCurrentUser(user)
    ),err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = formUser => dispatch => (
    SessionApiUtil.login(formUser).then(user => dispatch(receiveCurrentUser(user)
    ), err => dispatch(receiveErrors(err.responseJSON)))
)
export const logout = formUser => dispatch => (
    SessionApiUtil.logout(formUser).then(() => dispatch(logoutUser()))
)