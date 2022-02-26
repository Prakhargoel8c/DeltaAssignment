export const ADD_COMPANY = 'ADD_COMPANY';
export const UPDATE_SELECTED_COMPANIES = 'UPDATE_SELECTED_COMPANIES';
export const addComapny = (company) => ({ type: ADD_COMPANY, company });
export const updateSelectedCompanies = (selectedCompanies) => ({ type: UPDATE_SELECTED_COMPANIES, selectedCompanies });
