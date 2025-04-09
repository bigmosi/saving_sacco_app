/**
 * This component represents the SACCO member dashboard page. It displays important financial data for the user,
 * including active loans, pending applications, savings balance, and financial trends.
 *
 * Features:
 * - Displays current user's details (name, member number).
 * - Shows quick statistics like total active loans, pending applications, and savings balance.
 * - Visualizes loan data with line and doughnut charts for trends and financial distribution.
 * - Displays a list of active loans with details and links to their individual pages.
 *
 * Dependencies:
 * - React (for building UI components)
 * - react-router-dom (for routing to loan details page)
 * - Heroicons (for icons)
 * - chart.js (for rendering the charts)
 * - react-chartjs-2 (for integrating Chart.js with React)
 *
 * Author: Kinyera Amos
 * Date: 4th Apri 2025
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowTrendingUpIcon, 
  BanknotesIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

export default function Dashboard() {
  const currentUser = {
    name: 'John Doe',
    memberNumber: '12345'
  };

  const [activeLoans, setActiveLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalLoanAmount: 0,
    totalPendingAmount: 0,
    activeLoanCount: 0,
    pendingApplicationCount: 0
  });

  useEffect(() => {
    const fetchDashboardData = () => {
      const hardcodedActiveLoans = [
        { _id: '1', purpose: 'Education', amount: 5000, duration: 12 },
        { _id: '2', purpose: 'Car Purchase', amount: 12000, duration: 24 },
        { _id: '3', purpose: 'Home Renovation', amount: 8000, duration: 18 }
      ];

      const hardcodedApplications = [
        { _id: '4', purpose: 'Medical Bills', amount: 3000, status: 'pending' },
        { _id: '5', purpose: 'Business Expansion', amount: 15000, status: 'pending' }
      ];

      const pendingApplications = hardcodedApplications.filter(loan => loan.status === 'pending');
      
      setActiveLoans(hardcodedActiveLoans);

      setStats({
        totalLoanAmount: hardcodedActiveLoans.reduce((sum, loan) => sum + loan.amount, 0),
        totalPendingAmount: pendingApplications.reduce((sum, loan) => sum + loan.amount, 0),
        activeLoanCount: hardcodedActiveLoans.length,
        pendingApplicationCount: pendingApplications.length
      });

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  const distributionData = {
    labels: ['Active Loans', 'Pending Applications', 'Available Credit'],
    datasets: [
      {
        data: [stats.totalLoanAmount, stats.totalPendingAmount, 50000 - stats.totalLoanAmount - stats.totalPendingAmount],
        backgroundColor: ['#4338ca', '#0d9488', '#d1d5db'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Savings Balance',
        data: [3000, 3800, 4200, 5100, 5800, 6500],
        borderColor: '#4338ca',
        backgroundColor: 'rgba(67, 56, 202, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Loan Balance',
        data: [0, 0, 2000, 1800, 1600, 1400],
        borderColor: '#0d9488',
        backgroundColor: 'rgba(13, 148, 136, 0.1)',
        fill: true,
        tension: 0.4
      }
    ],
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Welcome, {currentUser.name}!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Member Number: {currentUser.memberNumber}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-primary-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Active Loans</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeLoanCount}</p>
              <p className="mt-1 text-sm text-gray-500">
                {formatCurrency(stats.totalLoanAmount)}
              </p>
            </div>
            <div className="bg-primary-100 p-2 rounded-lg">
              <BanknotesIcon className="h-8 w-8 text-primary-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-secondary-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Pending Applications</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingApplicationCount}</p>
              <p className="mt-1 text-sm text-gray-500">
                {formatCurrency(stats.totalPendingAmount)}
              </p>
            </div>
            <div className="bg-secondary-100 p-2 rounded-lg">
              <ClockIcon className="h-8 w-8 text-secondary-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Savings Balance</p>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(6500)}</p>
              <p className="mt-1 text-sm text-gray-500">
                +10.4% this month
              </p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Savings & Loan Trend</h2>
          <div className="h-64">
            <Line
              data={trendData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: value => formatCurrency(value)
                    }
                  }
                }
              }}
            />
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Financial Distribution</h2>
          <div className="h-64 flex items-center justify-center">
            <Doughnut
              data={distributionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Recent Loans */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Active Loans</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {activeLoans.length > 0 ? (
            activeLoans.map(loan => (
              <div key={loan._id} className="px-6 py-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{loan.purpose}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Amount: {formatCurrency(loan.amount)} | Duration: {loan.duration} months
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Link
                      to={`/loan-management`}
                      className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-4 text-sm text-gray-500">
              You have no active loans at the moment.
            </div>
          )}
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
         
        </div>
      </div>
    </div>
  );
}
