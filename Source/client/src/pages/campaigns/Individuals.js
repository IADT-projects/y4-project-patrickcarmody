import React from 'react';
import PageContainer from '../../components/PageContainer'
import { Box, Grid } from '@mui/material';
import CampaignPage from '../CampaignPage';

const Individuals = () => {
    return (
      <PageContainer title="Individual" description="this is the home page">
        <Box>
          <h1>Individuals</h1>
          <CampaignPage/>
        </Box>
      </PageContainer>
    );
  };
  
  export default Individuals;