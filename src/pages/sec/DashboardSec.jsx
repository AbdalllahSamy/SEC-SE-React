import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { useCheckValidation } from '../../hooks/useCheckValidation';

const DashboardPage = () => {
  useCheckValidation("SEC");
    const auth = JSON.parse(sessionStorage.getItem("auth"));
  return (
    <>
    <Navbar />
      <div className='d-flex justify-content-around align-items-center'>
        <h1 className='mt-5 '>Hello, {auth.firstName}</h1>
        <button className='btn-request mt-5'>request to chat manager</button>
      </div>
    </>
      
  );
};

export default DashboardPage;