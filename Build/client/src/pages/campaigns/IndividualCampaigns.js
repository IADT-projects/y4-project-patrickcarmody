import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, InputAdornment, Select, MenuItem, IconButton } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search, Clear, ImportExport } from '@mui/icons-material';
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import NoResults from '../../components/NoResults';
import { useLocation, useNavigate } from 'react-router-dom';

const IndividualCampaigns = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title') || '';
  const category = searchParams.get('category') || '';

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(title);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [sortDate, setSortDate] = useState('');
  const [showClear, setShowClear] = useState(false);

  const handleSearch = () => {
    navigate(`/campaigns/user?title=${search}&category=${selectedCategory}`);
  }

  const handleClear = () => {
    setSearch("");
    setShowClear(false);
  }

  useEffect(() => {
    if (search.length != "") {
      setShowClear(true);
    }
  }, [search])

  useEffect(() => {
    setLoading(true);
    axios.get(`/campaigns?title=${title}&category=${selectedCategory}&sort=${sortDate}`)
      .then((response) => {
         setCampaigns(response.data)
        })
      .catch((err) => {
        console.error(err)
        if(err.response.status == 404) {
          setCampaigns({});
        }
      })
      .finally(() => setLoading(false));
  }, [title, selectedCategory, sortDate]);

  const campaignsList = campaigns.length ? campaigns.map((campaign) => {
      return(
          <CampaignCard campaign={campaign}/>
      )
  })
  : <NoResults/>

  return(
    <PageContainer title='User campaigns'>
        <Typography variant='h3' sx={{ marginY: 2 }}>User campaigns</Typography>
        <Grid container paddingBottom={2} spacing={2}>
            <Grid item xs={12} lg={4}>
                <TextField
                      label='Search'
                      fullWidth
                      InputProps={{
                          endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton onClick={showClear ? handleClear : handleSearch}>
                                  { showClear ? 
                                  (
                                    <Clear/>
                                  ) : (
                                    <Search/>
                                  )
                                  }
                                </IconButton>
                              </InputAdornment>
                          )
                      }}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                  />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Select 
                    fullWidth
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    displayEmpty
              >
                <MenuItem value=''>All</MenuItem>
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
            <Grid item xs={12} md={6} lg={3}>
              <Select 
                onChange={(e) => setSortDate(e.target.value)}
                fullWidth
                displayEmpty
                value={sortDate}
                startAdornment={
                  <InputAdornment position="start">
                    <ImportExport/>
                  </InputAdornment>
                }
              >
                <MenuItem value=''>Sort</MenuItem>
                <MenuItem value='new'>Newest first</MenuItem>
                <MenuItem value='old'>Oldest first</MenuItem>
              </Select>
            </Grid>
        </Grid>
          <Box>
              <Grid container spacing={3} direction="row" pt={3} pl={2} justifyContent='left'>
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
              </Grid>
            </Grid>
        </Box>
    </PageContainer>
  )
  
    
};

export default IndividualCampaigns;