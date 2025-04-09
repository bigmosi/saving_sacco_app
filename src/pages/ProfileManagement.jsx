/**
 * ProfileManagement Component
 *
 * This component allows users to manage their profile information, including updating:
 * - Full Name
 * - Email Address
 * - Phone Number
 * - Address
 * - Date of Birth
 * - Gender
 * - Job Title
 * - Profile Image (uploaded using an Ant Design Upload component)
 * 
 * Features:
 * - Profile Image upload (supports displaying the selected image)
 * - Form validation for required fields: Name, Email, and Phone
 * - Simulated form submission with success/error messages using Ant Design's message component
 * - Cancel button to reset the form and navigate back to the dashboard
 * 
 * Dependencies:
 * - Ant Design (`Button`, `Form`, `Input`, `Upload`, `Avatar`, `message`, `DatePicker`, `Select`, `Row`, `Col`)
 * - Ant Design Icons (`UploadOutlined`)
 * - `react-router-dom` (for navigation)
 * 
 * Author: Kinyera Amos
 * Date: 4th April 2025
 */

import React, { useState } from 'react';
import { Button, Form, Input, Upload, message, Avatar, DatePicker, Select, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ReusableButton from '../shared/ReusableButton';

const { Option } = Select;

const ProfileManagement = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleProfileImageChange = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setProfileImage(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleFormSubmit = (values) => {
    console.log('Updated Profile:', values);
    message.success('Profile updated successfully!');
    setLoading(false);
  };

  const handleFormFail = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Failed to update profile');
  };

  const handleCancel = () => {
    message.info('Profile update canceled');
    navigate('/dashboard');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Profile Management</h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl text-center leading-relaxed">
        Update your personal details and profile image here. Make sure to keep your information up to date.
      </p>

      {/* Profile Image Upload */}
      <div className="flex justify-center mb-8 relative">
        <Avatar
          size={100}
          src={profileImage ? URL.createObjectURL(profileImage) : null}  // Show uploaded image
          className="mb-4 border-4 border-gray-300 shadow-lg"
        />
        <Upload
          name="file"
          listType="picture-card"
          showUploadList={false}
          action="/upload"  // Adjust this to your actual upload endpoint
          onChange={handleProfileImageChange}
          className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1 bg-white p-2 rounded-full shadow-md cursor-pointer"
        >
          <ReusableButton
            htmlType="submit"
            loading={loading}
            text="Upload Image"
            className="bg-success text-white w-full py-3 rounded-md shadow-lg"
          >
            icon={<UploadOutlined />} className="bg-success text-white hover:bg-blue-600 rounded-full shadow-md">
            Upload Image
          </ReusableButton>
        </Upload>
      </div>

      {/* Profile Form */}
      <Form
        layout="vertical"
        onFinish={handleFormSubmit}
        onFinishFailed={handleFormFail}
        className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md"
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                placeholder="Enter your full name"
                className="input-style"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please input a valid email!' },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className="input-style"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input
                placeholder="Enter your phone number"
                className="input-style"
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input
                placeholder="Enter your address"
                className="input-style"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: 'Please input your date of birth!' }]}
            >
              <DatePicker
                className="input-style"
                placeholder="Select your date of birth"
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: 'Please select your gender!' }]}
            >
              <Select placeholder="Select your gender" className="input-style">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Job Title"
              name="jobTitle"
              rules={[{ required: true, message: 'Please input your job title!' }]}
            >
              <Input
                placeholder="Enter your job title"
                className="input-style"
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Form Submit and Cancel Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <ReusableButton
            htmlType="submit"
            loading={loading}
            text="Save Profile"
            className="bg-success text-white w-full py-3 rounded-md shadow-lg"
          >
            Save Profile
          </ReusableButton>

          <ReusableButton
            type="default"
            onClick={handleCancel}
            text="Cancel"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 w-full py-3 rounded-md shadow-lg"
          >
            Cancel
          </ReusableButton>
        </div>
      </Form>
    </div>
  );
};

export default ProfileManagement;
