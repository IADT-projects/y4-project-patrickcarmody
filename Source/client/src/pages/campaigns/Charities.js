import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../../components/PageContainer'
import PreviewCard from '../../components/ui/PreviewCard';

const Charities = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <h1>Charities</h1>
              <p>Donation pages for charity organisations.</p>
              <PreviewCard/>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Charities;