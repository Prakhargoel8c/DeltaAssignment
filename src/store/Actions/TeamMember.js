export const ADD_TEAM_MEMBER_REQUEST = 'ADD_TEAM_MEMBER_REQUEST';
export const ADD_TEAM_MEMBER_RESPONSE = 'ADD_TEAM_MEMBER_RESPONSE';
export const DELETE_TEAM_MEMBER_REQUEST = 'DELETE_TEAM_MEMBER_REQUEST';
export const DELETE_TEAM_MEMBER_RESPONSE = 'DELETE_TEAM_MEMBER_RESPONSE';
export const UPDATE_TEAM_MEMBER = 'UPDATE_TEAM_MEMBER';

export const addTeamMemberRequest = () => ({ type: ADD_TEAM_MEMBER_REQUEST });
export const addTeamMemberResponse = (teamMember) => ({ type: ADD_TEAM_MEMBER_RESPONSE, user: teamMember });
export const deleteTeamMemberRequest = () => ({ type: DELETE_TEAM_MEMBER_REQUEST });
export const deleteTeamMemberResponse = (newTeamMembers) => ({ type: DELETE_TEAM_MEMBER_RESPONSE, newTeamMembers });
export const updateTeamMembers = (newTeamMembers) => ({ type: UPDATE_TEAM_MEMBER, newTeamMembers });

export function deleteTeamMember(teamMembers) {
  return function (dispatch) {
    dispatch(deleteTeamMemberRequest());
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => dispatch(deleteTeamMemberResponse(teamMembers)));
  };
}

export function addTeamMember(teamMember) {
  return function (dispatch) {
    dispatch(addTeamMemberRequest());
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => dispatch(addTeamMemberResponse(teamMember)));
  };
}
