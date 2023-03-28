import React from 'react';
import { Grid, Box, Typography, Pagination } from '@mui/material';
import PageContainer from '../components/PageContainer'
import PreviewCard from '../components/ui/PreviewCard';

const Home = () => {
    return (
      
      <PageContainer title="All Campaigns" description="this is page 2">
        
        <Box>
          <Grid container spacing={3} direction="row">
            <Grid item xs={12} lg={12}>
              <Typography variant='h4'>
                All active campaigns
              </Typography>
              <Typography variant='subtitle'>
                This page shows all active campaigns from the site
              </Typography>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={6} lg={4}>
              <PreviewCard/>
            </Grid>
            <Grid item xs={12} lg={12} justifyItems={"center"} justifyContent={"center"}>
              <Pagination/>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Home;