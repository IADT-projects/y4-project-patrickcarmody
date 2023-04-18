import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search, Clear } from '@mui/icons-material';
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import NoResults from '../../components/NoResults';

const IndividualCampaigns = () => {

  const [campaigns, setCampaigns] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/campaigns`)
    .then((response) => {
        console.log(response.data)
        setCampaigns(response.data)
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`/campaigns?title=${searchQuery}`)
      .then((response) => {
        setCampaigns(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
            setCampaigns([])
          console.log('404 error');
        } else {
          console.error(err);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setShowClearButton(false);
    handleSearch();
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setShowClearButton(event.target.value !== '');
  };

  if (loading) return <Loading />;

  const campaignsList = campaigns.length
    ? campaigns.map((campaign) => {
      return (
          <CampaignCard campaign={campaign} sx={{pl: 5}}/>
      )
    })
    : <NoResults />;
    
    return (
      <PageContainer title="User Campaigns" description="user campaigns">
        <Typography variant='h3' sx={{ marginY: 2 }}>User campaigns</Typography>
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
                <InputAdornment position='end'>
                  {showClearButton ? (
                    <Clear onClick={handleClearSearch} />
                  ) : (
                    <Search onClick={handleSearch} />
                  )}
                </InputAdornment>
              )
            }}
            value={searchQuery}
            onChange={handleSearchInputChange}
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
        {loading && (
        <Grid item xs={12}>
          <Loading />
        </Grid>
        )}
          {!loading && (
          <>
          {campaigns.length > 0 ? (
            campaignsList
          ) : (
          <Grid item xs={12}>
            <NoResults />
          </Grid>
          )}
          </>
          )}
        <Grid item xs={12} lg={12}>
        {/* Pagination here */}
        </Grid>
        </Grid>
      </Box>
      </PageContainer>
    );
    
};

export default IndividualCampaigns;