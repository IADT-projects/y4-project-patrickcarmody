import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const About = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>About Us</h1>
              <p>This page is about this platform.</p>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default About;