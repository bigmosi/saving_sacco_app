import React from 'react';
import { Modal } from 'antd';

const LoanDetailsModal = ({ visible, loan, onClose }) => {
  return (
    <Modal
      title={`Loan Details - ${loan.loanNumber}`}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      className="rounded-lg"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Loan Number:</p>
            <p className="text-gray-600">{loan.loanNumber}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Amount:</p>
            <p className="text-gray-600">${loan.amount}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Interest Rate:</p>
            <p className="text-gray-600">{loan.interestRate}%</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Repayment Schedule:</p>
            <p className="text-gray-600">{loan.repaymentSchedule}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Outstanding Balance:</p>
            <p className="text-gray-600">${loan.outstandingBalance}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Status:</p>
            <p className="text-gray-600">{loan.status}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Due Date:</p>
            <p className="text-gray-600">{loan.dueDate}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Borrower Name:</p>
            <p className="text-gray-600">{loan.borrowerName}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-800">Borrower Contact:</p>
            <p className="text-gray-600">{loan.borrowerContact}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment History</h3>
          <ul className="list-disc pl-5 space-y-2">
            {loan.paymentHistory.map((payment, index) => (
              <li key={index} className="text-gray-600">
                <p>{payment.date} - Amount: <span className="font-semibold">${payment.amount}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default LoanDetailsModal;
