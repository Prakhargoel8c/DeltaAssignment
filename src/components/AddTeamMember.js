import React from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTeamMember } from '../store/Actions/TeamMember';
import { addComapny } from '../store/Actions/Company';
import './AddTeamMember.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const AddTeamMember = ({ showAddMembers, setShowAddMembers }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companyReducer.companies);

  const resetForm = () => {
    form.resetFields();
    setShowAddMembers(false);
  };
  const addTeamMemberSubmit = (teamMember) => {
    dispatch(addTeamMember({ ...teamMember, lastUpdated: new Date().toJSON().slice(0, 10), id: uuidv4() }));
    toast.info('Team Member Added Successfully', { position: 'top-right' });
    if (!companies.includes(teamMember.company)) {
      dispatch(addComapny(teamMember.company));
    }
    resetForm();
  };

  return (
    <div>
      <Modal show={showAddMembers} onHide={resetForm} centered>
        <Modal.Header closeButton>Add Team Member</Modal.Header>
        <Modal.Body>
          <Container>
            <Form layout="vertical" form={form} onFinish={addTeamMemberSubmit}>
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Company" name="company" rules={[{ required: true, message: 'Please input your company!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please input your status!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Notes" name="notes">
                <Input />
              </Form.Item>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => form.submit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTeamMember;
