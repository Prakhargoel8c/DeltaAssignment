import { ADD_COMPANY, UPDATE_SELECTED_COMPANIES } from '../Actions/Company';
import intialState from '../../intilalState/Company.json';
const companyReducer = (state = { ...intialState }, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return { ...state, companies: [...state.companies, action.company] };
    case UPDATE_SELECTED_COMPANIES:
      return { ...state, selectedCompanies: action.selectedCompanies };
    default:
      return state;
  }
};

export default companyReducer;
