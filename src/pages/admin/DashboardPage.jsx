import { Grid } from '@mui/material';
import React from 'react';
import { useCheckValidation } from '../../hooks/useCheckValidation';

import Table from '../../components/layout/Table';
const DashboardPage = () => {
  useCheckValidation("ADMIN");
  return (
  <Table/>
  );
};

export default DashboardPage;