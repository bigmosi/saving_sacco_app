import React, { useState, useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoginSubmit = (values) => {
    if (values.username !== 'user') {
      message.error('Username is incorrect!');
    } else if (values.password !== 'password') {
      message.error('Password is incorrect!');
    } else {
      onLoginSuccess();
      message.success('Login successful!');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <Form onFinish={handleLoginSubmit} layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}>

              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>

              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                block
                className="bg-success text-white"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="hidden md:block w-1/2 p-4">
          <img
            src="/images/1212.jpg"
            alt="Login illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
