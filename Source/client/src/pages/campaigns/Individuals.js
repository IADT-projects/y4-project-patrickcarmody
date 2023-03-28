import React from 'react';
import PageContainer from '../../components/PageContainer'
import { Box, Typography } from '@mui/material';

const Individuals = () => {
    return (
      <PageContainer title="Individual" description="this is the home page">
        <Box>
          <Typography variant='h2'>Individuals</Typography>
          <Typography variant='h6'>Use this page to contribute to user-created fundraising campaigns.</Typography>
        </Box>
      </PageContainer>
    );
  };
  
  export default Individuals;