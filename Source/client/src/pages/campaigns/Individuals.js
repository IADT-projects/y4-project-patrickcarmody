import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Individuals = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>Individuals</h1>
              <p>Fundraisers created by individual users.</p>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Individuals;