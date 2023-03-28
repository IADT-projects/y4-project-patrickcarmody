import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Charities = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Typography variant='h2'>Charities</Typography>
          <Typography variant='h6'>Use this page to donate to existing charity organisations.</Typography>
        </Box>
      </PageContainer>
    );
  };
  
  export default Charities;