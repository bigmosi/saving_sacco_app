/**
 * LoanApplicationForm Component
 * 
 * A modal form used for applying for a new loan. The form collects personal information, 
 * loan details, and next of kin information. Upon submission, a success message is displayed.
 *
 * Features:
 * - Modal with form for entering loan application details.
 * - Includes sections for personal information, loan details, and next of kin details.
 * - Submits the form and shows a success message upon completion.
 *
 * Props:
 * - `visible` (Boolean): Controls the visibility of the modal.
 * - `onClose` (Function): Callback function to close the modal.
 *
 * Author: Kinyera Amos
 * Date: 4th April 2025
 */
import React from 'react';
import { Modal, Form, Input, Button, message, Divider } from 'antd';

/**
 * LoanApplicationForm Component
 * 
 * @param {Boolean} visible - Determines if the modal is visible or not.
 * @param {Function} onClose - Function to handle closing the modal.
 */
const LoanApplicationForm = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  // Handles form submission
  const onFinish = (values) => {
    message.success('Loan application submitted successfully!');
    form.resetFields();  // Resets the form after submission
    onClose();  // Closes the modal after submission
  };

  return (
    <Modal
      title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>Apply for a New Loan</span>}
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="rounded-lg p-6"
      width={800}
    >
      <Form form={form} onFinish={onFinish} className="space-y-4">
        {/* Personal Information Section */}
        <Divider>Personal Information</Divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="borrowerName"
            rules={[{ required: true, message: 'Please enter the borrower name!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Borrower Name</label>
              <Input
                placeholder="Enter your full name"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="borrowerID"
            rules={[{ required: true, message: 'Please enter your ID or Passport number!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">ID/Passport Number</label>
              <Input
                placeholder="Enter your ID or Passport number"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="contactNumber"
            rules={[{ required: true, message: 'Please enter a valid contact number!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Contact Number</label>
              <Input
                placeholder="Enter your contact number"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter a valid email address!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <Input
                placeholder="Enter your email address"
                type="email"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="loanAmount"
            rules={[{ required: true, message: 'Please enter the loan amount!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Loan Amount</label>
              <Input
                placeholder="Enter loan amount"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="loanTerm"
            rules={[{ required: true, message: 'Please enter the loan term!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Loan Term (Months)</label>
              <Input
                placeholder="Enter loan term in months"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="purpose"
            rules={[{ required: true, message: 'Please specify the loan purpose!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Loan Purpose</label>
              <Input.TextArea
                placeholder="Enter loan purpose"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>
        </div>

        {/* Next of Kin Information Section */}
        <Divider>Next of Kin Information</Divider>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="nextOfKinName"
            rules={[{ required: true, message: 'Please enter the next of kin name!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Next of Kin Name</label>
              <Input
                placeholder="Enter next of kin's full name"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="nextOfKinContact"
            rules={[{ required: true, message: 'Please enter next of kin contact!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Next of Kin Contact</label>
              <Input
                placeholder="Enter next of kin's contact number"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="borrowerAddress"
            rules={[{ required: true, message: 'Please enter your address!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">Address</label>
              <Input
                placeholder="Enter your address"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>

          <Form.Item
            name="borrowerCity"
            rules={[{ required: true, message: 'Please enter your city!' }]}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">City</label>
              <Input
                placeholder="Enter your city"
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </Form.Item>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            htmlType="submit"
            className="bg-success text-white"
          >
            Submit Application
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoanApplicationForm;
