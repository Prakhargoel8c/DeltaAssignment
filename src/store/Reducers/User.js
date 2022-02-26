import intialState from '../../intilalState/User.json';
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT, SIGNUP_REQUEST, SIGNUP_RESPONSE } from '../Actions/User';

const userReducer = (state = { ...intialState }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_RESPONSE:
      return { ...state, loading: false, users: [...state.users, action.user], currentUser: action.user };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_RESPONSE:
      return { ...state, loading: false, currentUser: action.user };
    case LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
