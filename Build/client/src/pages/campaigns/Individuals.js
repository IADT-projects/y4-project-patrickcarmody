import React from 'react';
import PageContainer from '../../components/PageContainer'
import { Box, Typography } from '@mui/material';

const Individuals = () => {
    return (
      <PageContainer title="Individual" description="this is the home page">
        <Box>
          <Typography variant='h3' sx={{ marginY: 2 }}>Individual Fundraisers</Typography>
          <Typography variant='h6'>Campaigns created by users</Typography>  
        </Box>
      </PageContainer>
    );
  };
  
  export default Individuals;