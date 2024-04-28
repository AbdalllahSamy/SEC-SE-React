import { Grid } from '@mui/material';
import React from 'react';
import SummaryGrid from '../../components/common/SummaryGrid';
import ToursData from '../../components/common/ToursData';
import Animate from '../../components/common/Animate';
import UserBookingCard from '../../components/common/UserBookingCard';
import TotalIncome from '../../components/common/TotalIncome';
import BookedData from '../../components/common/BookedData';
import StatisticData from '../../components/common/StatisticData';
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