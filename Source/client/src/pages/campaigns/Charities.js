import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Charities = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Typography variant='h3'>Charity Pages</Typography>
        </Box>
      </PageContainer>
    );
  };
  
  export default Charities;