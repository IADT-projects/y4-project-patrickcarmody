import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Pagination, TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import PreviewCard from '../../components/ui/PreviewCard';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search } from '@mui/icons-material';

const Campaigns = () => {

  const [campaigns, setCampaigns] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    console.log('Mounted');
    const endpoint = selectedCategory === 'all' ? '/campaigns' : `/campaigns/search?category=${selectedCategory.toString}`;
    axios.get(endpoint)
      .then((response) => {
        console.log(response.data);
        setCampaigns(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [selectedCategory])

  if (!campaigns) return <Loading />;

  const campaignsList = campaigns.map((campaign) => {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <PreviewCard campaign={campaign} />
      </Grid>
    )
  });

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    const endpoint = newCategory === 'all' ? '/campaigns' : `/campaigns/search?category=${newCategory}`;
    axios.get(endpoint)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  };

  return (
    <PageContainer title="Home" description="this is the home page">
      <Typography variant='h3' sx={{ marginY: 2 }}>All campaigns</Typography>
      <Grid container paddingBottom={2} spacing={2}>
        <Grid item xs={12} lg={4}>
          <TextField
            label='Search'
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Search />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}>
          <Select fullWidth value={selectedCategory} onChange={handleCategoryChange}>
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
            <Pagination />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Campaigns;
