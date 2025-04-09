/**
 * LoanManagement Component
 *
 * This component provides the functionality to manage loans, view details of specific loans, 
 * and apply for a new loan. The component includes:
 * - Displaying a table of loans with relevant details such as loan number, amount, interest rate, etc.
 * - Viewing loan details in a modal when a loan is selected.
 * - A button to apply for a new loan that opens a form in a modal.
 * 
 * Features:
 * - Loan Table: Displays a list of loans with columns like Loan Number, Amount, Interest Rate, 
 *   Repayment Schedule, Status, and Borrower Details.
 * - Loan Details Modal: Displays detailed information for a selected loan.
 * - Loan Application Form: Allows users to apply for a new loan.
 * 
 * Dependencies:
 * - React (`useState`)
 * - Custom components:
 *   - `LoanDetailsModal` (for displaying detailed loan information)
 *   - `LoanApplicationForm` (for applying for a new loan)
 *   - `ReusableTable` (for displaying loan data in a table)
 *   - `ReusableButton` (for rendering reusable buttons)
 * 
 * Author: Kinyera Amos
 * Date: 4th Apri 2025
 */

import React, { useState } from 'react';
import LoanDetailsModal from './LoanDetailsModal';
import LoanApplicationForm from './LoanApplicationForm';
import ReusableTable from '../../shared/ReusableTable';
import ReusableButton from '../../shared/ReusableButton';

const LoanManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const showLoanDetails = (loan) => {
    setSelectedLoan(loan);
    setIsDetailModalVisible(true);
  };

  const handleDetailModalClose = () => {
    setIsDetailModalVisible(false);
    setSelectedLoan(null);
  };

  const showLoanApplicationForm = () => {
    setIsModalVisible(true);
  };

  const handleApplicationModalClose = () => {
    setIsModalVisible(false);
  };

  const loanData = [
    {
      id: '1',
      loanNumber: 'LN001',
      amount: 50000,
      interestRate: 5,
      repaymentSchedule: 'Monthly',
      status: 'Active',
      dueDate: '2025-12-31',
      borrowerName: 'John Doe',
      borrowerContact: 'john.doe@example.com',
      paymentHistory: [
        { date: '2025-01-01', amount: 5000 },
        { date: '2025-02-01', amount: 5000 },
      ],
      outstandingBalance: 40000,
    },
    {
      id: '2',
      loanNumber: 'LN002',
      amount: 120000,
      interestRate: 6,
      repaymentSchedule: 'Monthly',
      status: 'Active',
      dueDate: '2026-05-15',
      borrowerName: 'Jane Smith',
      borrowerContact: 'jane.smith@example.com',
      paymentHistory: [
        { date: '2025-01-01', amount: 10000 },
        { date: '2025-02-01', amount: 10000 },
      ],
      outstandingBalance: 100000,
    },
    {
      id: '3',
      loanNumber: 'LN003',
      amount: 75000,
      interestRate: 5,
      repaymentSchedule: 'Monthly',
      status: 'Active',
      dueDate: '2025-08-20',
      borrowerName: 'Alice Johnson',
      borrowerContact: 'alice.johnson@example.com',
      paymentHistory: [
        { date: '2025-01-01', amount: 7500 },
        { date: '2025-02-01', amount: 7500 },
      ],
      outstandingBalance: 60000,
    },
  ];

  const loanColumns = [
    { title: 'Loan Number', dataIndex: 'loanNumber', key: 'loanNumber' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Interest Rate', dataIndex: 'interestRate', key: 'interestRate' },
    { title: 'Repayment Schedule', dataIndex: 'repaymentSchedule', key: 'repaymentSchedule' },
    { title: 'Outstanding Balance', dataIndex: 'outstandingBalance', key: 'outstandingBalance' },
    { title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Borrower Name', dataIndex: 'borrowerName', key: 'borrowerName' },
    { title: 'Borrower Contact', dataIndex: 'borrowerContact', key: 'borrowerContact' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Loan Management</h2>
        <div className="flex justify-end w-1/2">
          <ReusableButton
            text="Apply for a New Loan"
            onClick={showLoanApplicationForm}
            className="bg-success text-white w-full max-w-xs"
          >
            Apply for a New Loan
          </ReusableButton>
        </div>
      </div>

      <div className="overflow-x-auto mx-4">
        <ReusableTable
          data={loanData}
          columns={loanColumns}
          showDetails={showLoanDetails}
        />
      </div>

      {selectedLoan && (
        <LoanDetailsModal
          visible={isDetailModalVisible}
          loan={selectedLoan}
          onClose={handleDetailModalClose}
        />
      )}

      <LoanApplicationForm visible={isModalVisible} onClose={handleApplicationModalClose} />
    </div>
  );
};

export default LoanManagement;
