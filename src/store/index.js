import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import teamMemberReducer from './Reducers/TeamMember';
import companyReducer from './Reducers/Company';
import userReducer from './Reducers/User';
const reducers = combineReducers({ teamMemberReducer, companyReducer, userReducer });
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

export default store;
