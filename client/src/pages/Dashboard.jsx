import React from 'react'
import { useUser } from '@clerk/clerk-react';
import FinancialForm from '../components/FinancialForm';
import FinancialList from '../components/FinancialList';

const Dashboard = () => {
  const {user} = useUser()
  return (
    <div>
      <h1>Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <FinancialForm/>
      <FinancialList/>
    </div>
  );
}

export default Dashboard;
