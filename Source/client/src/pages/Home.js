import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../components/PageContainer'

const Home = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>This is the home page</h1>
              <p>It hasn't been created yet</p>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Home;