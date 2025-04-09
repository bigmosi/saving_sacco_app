/**
 * A reusable table component for displaying loan data. The table includes an "Action" column
 * which allows users to view details of a specific loan.
 *
 * Features:
 * - Displays a table with dynamic columns and data passed as props
 * - Includes an "Action" column with a button to view loan details (using an eye icon)
 * - The `showDetails` function is called when the "View Details" button is clicked, passing the specific loan record
 * 
 * Props:
 * - `data` (Array): The array of loan data to be displayed in the table.
 * - `columns` (Array): The column definitions for the table (optional).
 * - `showDetails` (Function): A callback function to handle the action of viewing loan details.
 * - `rowKey` (String): The unique key for each row (defaults to 'id').
 *
 * Author: Kinyera Amos
 * Date: 4th Apri 2025
 */
import React from 'react';
import { Table, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

/**
 * 
 * @param {Array} data - Array of loan data to be displayed in the table.
 * @param {Array} columns - Array of column definitions for the table.
 * @param {Function} showDetails - Callback function to handle displaying loan details.
 * @param {String} rowKey - Key to uniquely identify rows (default is 'id').
 */
const ReusableTable = ({ data, columns, showDetails, rowKey = 'id' }) => {
  const actionColumn = {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button
        onClick={() => showDetails(record)}
        type="link"
        icon={<EyeOutlined />}
        style={{ padding: 0 }}
      />
    ),
  };

  const tableColumns = columns ? [...columns, actionColumn] : [actionColumn];

  return <Table columns={tableColumns} dataSource={data} rowKey={rowKey} />;
};

export default ReusableTable;
