import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { deleteTeamMember } from '../../store/Actions/TeamMember';
import { toast } from 'react-toastify';
const TeamMemberList = () => {
  const teamMembers = useSelector((state) => state.teamMemberReducer.teamMembers);
  const selectedCompanies = useSelector((state) => state.companyReducer.selectedCompanies);
  const { confirm } = Modal;
  const dispatch = useDispatch();
  const deleteTeamMemberConfirm = (teamMember) => {
    confirm({
      onOk: () => {
        dispatch(deleteTeamMember(teamMembers.filter(({ id }) => id !== teamMember.id)));
        toast.info('Team Member Deleted Successfully', { position: 'top-right' });
      },
      title: 'Are you sure want delete this team member',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    });
  };
  return (
    <div>
      {teamMembers.length > 0 && (
        <table className="table table-borderless table-hover table-striped">
          <thead>
            <tr>
              <th></th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Notes</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((teamMember) => (
              <tr key={teamMember.id}>
                <td>
                  <input type="checkbox" disabled={true} checked={selectedCompanies.includes(teamMember.company)} />
                </td>
                <td>{teamMember.name ?? '-'}</td>
                <td>{teamMember.company ?? '-'}</td>
                <td>{teamMember.status ?? '-'}</td>
                <td>{teamMember.lastUpdated ?? '-'}</td>
                <td>{teamMember.notes ?? '-'}</td>
                <td>
                  <DeleteFilled role="button" tabIndex={0} onClick={() => deleteTeamMemberConfirm(teamMember)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamMemberList;
