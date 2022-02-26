import React, { useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import AddTeamMember from './AddTeamMember';
import CompanyDropDown from './CompanyDropdown';
import Spinner from '../Helpers/OverlaySpinner';
import './TeamMembers.scss';
import TeamMemberList from './TeamMemberList';
import StatusSorter from './StatusSorter';
import { logoutUser } from '../store/Actions/User';
const TeamMembers = () => {
  const [showAddMembers, setShowAddMembers] = useState(false);
  const isLoading = useSelector((state) => state.teamMemberReducer.loading);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Team Members</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Button onClick={() => setShowAddMembers(true)} className="ms-1">
                + Team Members
              </Button>
            </Nav>
            <Navbar.Toggle />
            <Button variant="link" onClick={() => dispatch(logoutUser())}>
              Log Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <CompanyDropDown />
          </Col>
          <Col className="d-flex justify-content-end">
            <StatusSorter />
          </Col>
        </Row>
        <TeamMemberList />
      </Container>
      <AddTeamMember showAddMembers={showAddMembers} setShowAddMembers={setShowAddMembers} />
      {isLoading && <Spinner />}
    </>
  );
};

export default TeamMembers;
