import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateTeamMembers } from '../../store/Actions/TeamMember';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

const StatusSorter = () => {
  const [sortAscend, setSortAscend] = useState(true);
  const teamMembers = useSelector(
    (state) => state.teamMemberReducer.teamMembers,
    (prevValue, newValue) => prevValue.length === newValue.length
  );
  const dispatch = useDispatch();
  useEffect(() => {
    handleSort(sortAscend);
  }, [teamMembers]);

  const handleSort = (_sortAscend) => {
    if (_sortAscend) {
      dispatch(updateTeamMembers(teamMembers.sort((a, b) => a.status.localeCompare(b.status))));
    } else {
      dispatch(updateTeamMembers(teamMembers.sort((a, b) => b.status.localeCompare(a.status))));
    }
    setSortAscend(_sortAscend);
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={() => handleSort(!sortAscend)}>
        Status {!sortAscend ? <UpOutlined /> : <DownOutlined />}
      </Button>
    </div>
  );
};

export default StatusSorter;
