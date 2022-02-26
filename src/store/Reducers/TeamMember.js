import {
  ADD_TEAM_MEMBER_REQUEST,
  ADD_TEAM_MEMBER_RESPONSE,
  DELETE_TEAM_MEMBER_REQUEST,
  DELETE_TEAM_MEMBER_RESPONSE,
  UPDATE_TEAM_MEMBER,
} from '../Actions/TeamMember';
import intialState from '../../intilalState/TeamMember.json';

const teamMemberReducer = (state = { ...intialState }, action) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER_REQUEST:
      return { ...state, loading: true };
    case ADD_TEAM_MEMBER_RESPONSE:
      return { ...state, loading: false, teamMembers: [...state.teamMembers, action.teamMember] };
    case DELETE_TEAM_MEMBER_REQUEST:
      return { ...state, loading: true };
    case DELETE_TEAM_MEMBER_RESPONSE:
      return { ...state, loading: false, teamMembers: [...action.newTeamMembers] };
    case UPDATE_TEAM_MEMBER:
      return { ...state, loading: false, teamMembers: [...action.newTeamMembers] };
    default:
      return state;
  }
};

export default teamMemberReducer;
