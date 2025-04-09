import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, message } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import LoanManagement from './components/LoanManagement/LoanManagement';
import ProfileManagement from './pages/ProfileManagement'; 
import Login from './components/auth/Login';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    if (e.key === '1') {
      navigate('/dashboard');
    } else if (e.key === '2') {
      navigate('/loan-management');
    } else if (e.key === '3') {
      navigate('/profile-management');
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setSelectedKey('1');
    message.success('Login successful!');
    
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedKey('');
    message.success('Logged out successfully!');
    
    navigate('/');
  };
  
  const handleMenuLogout = () => {
    handleLogout();
  };

  return (
    !isLoggedIn ? (
      <Login onLoginSuccess={handleLoginSuccess} />
    ) : (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            minHeight: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 10,
          }}
          collapsedWidth="0"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Dashboard',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Loan Management',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Profile Management',
              },
              {
                key: '4',
                icon: <LogoutOutlined />,
                label: 'Logout',
                onClick: handleMenuLogout,
              },
            ]}
          />
        </Sider>

        <Layout style={{ marginLeft: collapsed ? 0 : 200 }}>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: 'sticky',
              top: 0,
              zIndex: 100,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                marginLeft: 16,
              }}
            />
          </Header>

          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY: 'auto',
              height: 'calc(100vh - 64px)',
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loan-management" element={<LoanManagement />} />
              <Route path="/profile-management" element={<ProfileManagement />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    )
  );
};

export default App;
