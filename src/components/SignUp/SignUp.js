import React from 'react';
import { Button, Form, Input } from 'antd';
import { Container, Row } from 'react-bootstrap';
import './Signup.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../store/Actions/User';
import OverlaySpinner from '../../Helpers/OverlaySpinner';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [form] = Form.useForm();
  const loading = useSelector((state) => state.userReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUp = async (user) => {
    dispatch(signupUser(user));
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-md-9 py-5 loginContainer">
          <div className="loginContent">
            <div className="loginFormContainer">
              <h3 className="formHeader">Sign Up</h3>
              <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={signUp} form={form}>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'The input is not valid E-mail!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="confirmpassword"
                  rules={[
                    { required: true, message: 'Please confirm password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 2, span: 12 }} className="loginSubmit">
                  <Button type="primary" htmlType="submit" className="submitBtn">
                    Sign Up
                  </Button>
                  <Button onClick={() => navigate('/login')}>Log In</Button>
                </Form.Item>
              </Form>
              {loading && <OverlaySpinner />}
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default SignUp;
