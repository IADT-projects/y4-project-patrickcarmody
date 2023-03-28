import React, { useEffect, useState } from 'react';
import { Grid, Box, Divider, Typography, Pagination } from '@mui/material';
import PageContainer from '../../components/PageContainer'
import PreviewCard from '../../components/ui/PreviewCard';
import axios from '../../config'

const Campaigns = () => {

  const [ campaign, setCampaign ] = useState(null);

  useEffect(() => {
    console.log('Mounted');
    axios.get(`/campaigns`)
      .then((response) => {
        console.log(response.data);
        setCampaign(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  if(!campaign) return(
    <h1>Loading...</h1>
  )

  const campaignsList = campaign.map((campaign) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <PreviewCard campaign={campaign}/>
      </Grid>
    )
  })

    return (
      <PageContainer title="Home" description="this is the home page">
        <Typography variant='h3' sx={{ marginY: 2 }}>All campaigns</Typography>
        <Box>
          <Grid container spacing={3} direction="row">
            { campaignsList }
            <Grid item xs={12} lg={12}>
              <Pagination/>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Campaigns;