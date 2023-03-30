import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Pagination, TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import PreviewCard from '../../components/ui/PreviewCard';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search } from '@mui/icons-material';

const Campaigns = () => {

  const [campaigns, setCampaigns] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Mounted');
    axios.get(`/campaigns`)
    .then((response) => {
        console.log(response.data)
        setCampaigns(response.data)
    })
    .catch((err) => {
        console.error(err);
    });
  }, []);

  const handleSearch = () => {
    console.log('Enter')
    axios.get(`/campaigns?title=${searchQuery}`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
            setCampaigns(null)
          console.log('404 error');
        } else {
          console.error(err);
        }
      });
  };

  if (!campaigns) return <Loading />;

  const campaignsList = campaigns.map((campaign) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <PreviewCard campaign={campaign} />
      </Grid>
    )
  });


  return (
    <PageContainer title="Home" description="this is the home page">
      <Typography variant='h3' sx={{ marginY: 2 }}>All campaigns</Typography>
      <Grid container paddingBottom={2} spacing={2}>
        <Grid item xs={12} lg={4}>
        <TextField
          label='Search'
          fullWidth
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
          InputProps={{
          endAdornment: (
            <InputAdornment position='end' onClick={handleSearch}>
              <Search />
            </InputAdornment>
          )
          }}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <Select fullWidth>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value='animals'>Animals</MenuItem>
            <MenuItem value='community'>Community</MenuItem>
            <MenuItem value='emergencies'>Emergencies</MenuItem>
            <MenuItem value='environment'>Environment</MenuItem>
            <MenuItem value='events'>Events</MenuItem>
            <MenuItem value='family'>Family</MenuItem>
            <MenuItem value='medical'>Medical</MenuItem>
            <MenuItem value='sports'>Sports</MenuItem>
            <MenuItem value='other'>Other</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Box>
        <Grid container spacing={3} direction="row">
          {campaignsList}
          <Grid item xs={12} lg={12}>
            {/* Pagination here */}
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Campaigns;