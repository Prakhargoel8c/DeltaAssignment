export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_RESPONSE = 'SIGNUP_RESPONSE';
export const LOGOUT = 'LOGOUT';
export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginResponse = (user) => ({ type: LOGIN_RESPONSE, user });
export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupResponse = (user) => ({ type: SIGNUP_RESPONSE, user });
export const logoutUser = () => ({ type: LOGOUT });
export function loginUser(user) {
  return function (dispatch) {
    dispatch(loginRequest());
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => dispatch(loginResponse(user)));
  };
}
export function signupUser(user) {
  return function (dispatch) {
    dispatch(signupRequest());
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => dispatch(signupResponse(user)));
  };
}
