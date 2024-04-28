import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { useCheckValidation } from '../../hooks/useCheckValidation';

const DashboardPage = () => {
  useCheckValidation("SEC");
    const auth = JSON.parse(localStorage.getItem('auth'));
  return (
    <>
    <Navbar />
      <div>
        <h1 className='mt-5 '>Hello, {auth.firstName}</h1>
      </div>
    </>
      
  );
};

export default DashboardPage;