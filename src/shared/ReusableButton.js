
import React from 'react';
import { Button } from 'antd';

const ReusableButton = ({ text, onClick, loading, type = 'default', className = '', icon }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      loading={loading}
      className={`w-full py-3 rounded-md shadow-lg ${className}`}
      icon={icon}
    >
      {text}
    </Button>
  );
};

export default ReusableButton;
