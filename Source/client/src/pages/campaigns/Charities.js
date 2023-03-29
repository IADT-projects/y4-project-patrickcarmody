import React from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Charities = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
        <Typography variant='h3' sx={{ marginY: 2 }}>Charity Pages</Typography>
          <Typography variant='h6'>Use this page to donate to existing charity organisations.</Typography>
        </Box>
      </PageContainer>
    );
  };
  
  export default Charities;