import React from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Start = () => {
    return (
      <PageContainer title="Get Started" description="this is the home page">
        <Box>
          <Typography variant='h3' sx={{ marginY: 2 }}>Get Started</Typography>
          <Typography variant='h6'>Get started page.</Typography>  
        </Box>
      </PageContainer>
    );
  };
  
  export default Start;