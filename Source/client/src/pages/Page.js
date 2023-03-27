import React from 'react';
import { Grid, Box, Typography, Pagination } from '@mui/material';
import PageContainer from '../components/PageContainer'
import DashboardCard from '../components/DashboardCard';
import ExampleComponent from './ExampleComponent'

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
              <DashboardCard
                title={"Fundraiser"}
                action={"Sports"}
                progress={63}
               />
            </Grid>
            <Grid item xs={6} lg={4}>
              <DashboardCard
                title={"Buy Hospital Equipment"}
                action={"Medical"}
                progress={55}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <DashboardCard
                title={"New Fundraiser"}
                action={"Family"}
                progress={20}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <DashboardCard
                title={"Disaster Relief"}
                action={"Emergnecies"}
                progress={10}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <DashboardCard
                title={"Local Sports Team"}
                action={"Sports"}
                progress={40}
              />
            </Grid>
            <Grid item xs={6} lg={4}>
              <DashboardCard
                title={"Fundraiser"}
                action={"Sports"}
                progress={90}
              />
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