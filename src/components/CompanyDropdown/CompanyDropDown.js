import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedCompanies } from '../../store/Actions/Company';
import './CompanyDropdown.scss';

const id = 'companyDropdown';

const CompanyDropDown = () => {
  const [visible, setVisible] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companyReducer.companies);
  const selectedCompanies = useSelector((state) => state.companyReducer.selectedCompanies);
  const dropdownCollapse = (e) => {
    const dropdown = document.getElementById(id);
    if (!dropdown.contains(e.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', dropdownCollapse);
    return () => {
      window.removeEventListener('click', dropdownCollapse);
    };
  }, []);

  useEffect(() => {
    if (allSelected) {
      if (selectedCompanies.every((company) => companies.includes(company))) {
        dispatch(updateSelectedCompanies([...companies]));
      } else {
        setAllSelected(false);
      }
    }
  }, [companies]);

  const handleCheckbox = (company) => {
    if (selectedCompanies.includes(company)) {
      dispatch(updateSelectedCompanies(selectedCompanies.filter((selectedCompany) => company !== selectedCompany)));
    } else {
      dispatch(updateSelectedCompanies([...selectedCompanies, company]));
    }
    if (allSelected) {
      setAllSelected(false);
    }
  };
  const handleSelectAll = (newValue) => {
    if (newValue) {
      dispatch(updateSelectedCompanies(companies));
    } else {
      dispatch(updateSelectedCompanies([]));
    }
    setAllSelected(newValue);
  };

  return (
    <div title="Company Dropdown" id={id}>
      <div className={`dropdown ${visible ? 'open' : ''}`}>
        <button className="dropdown-toggle" type="button" onClick={() => setVisible((prevValue) => !prevValue)}>
          {selectedCompanies.length === 0 ? 'Select Company' : allSelected ? 'All Selected' : `${selectedCompanies.length} - Selected`}
        </button>
        <ul className="dropdown-menu">
          <li>
            <span>
              <span>
                <input type="checkbox" checked={allSelected} onChange={(e) => handleSelectAll(e.target.checked)} />
              </span>
              Select All
            </span>
          </li>
          {companies.map((company) => (
            <li key={company}>
              <span>
                <span>
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => {
                      handleCheckbox(company);
                    }}
                  />
                </span>
                {company}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDropDown;
