import React from 'react';
import { Grid, Box, Divider } from '@mui/material';
import PageContainer from '../../components/PageContainer'
import DashboardCard from '../../components/DashboardCard';

const Campaigns = () => {
    return (
      <PageContainer title="Home" description="this is the home page">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h1>Campaigns</h1>
              
              <Divider/>
              <Grid xs={12} spacing={1}>
                  <Grid item xs={4}>
                    <DashboardCard title="Fundraiser"/>
                  </Grid>
                  <Grid item xs={4}>
                    <DashboardCard title="Fundraiser"/>
                  </Grid>
                  <Grid item xs={4}>
                    <DashboardCard title="Fundraiser"/>
                  </Grid>
                  <Grid item xs={4}>
                    <DashboardCard title="Fundraiser"/>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Campaigns;