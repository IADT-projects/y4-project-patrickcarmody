import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Start = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>Get Started</h1>
              <p>Here's a quick guide on how to get started with this site</p>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Start;