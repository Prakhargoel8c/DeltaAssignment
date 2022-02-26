import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { loginUser } from '../../store/Actions/User';
import OverlaySpinner from '../../Helpers/OverlaySpinner';

const Login = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState('');
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    if (users.some((user) => (user.email === email || user.userName === email) && user.password === password)) {
      dispatch(loginUser(users.find((user) => (user.email === email || user.userName === email) && user.password === password)));
    } else {
      setMessage('Incorrect Username or Password');
    }
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-md-9 py-5 loginContainer">
          <div className="loginContent">
            <div className="loginFormContainer">
              <h3 className="formHeader">Log In</h3>
              <a href="/signup">Don't Have a Account.Sign Up</a>
              <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }} onFinish={login} form={form}>
                <Form.Item
                  label="Email / Username"
                  name="email"
                  rules={[{ required: true, type: 'email', message: 'Please enter valid email address!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please enter your password!' }]}
                  extra={<span className="error">{message}</span>}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 2, span: 12 }} className="loginSubmit">
                  <Button type="primary" htmlType="submit" className="submitBtn">
                    Log In
                  </Button>
                  <Button onClick={() => navigate('/signup')}>SignUp</Button>
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

export default Login;
