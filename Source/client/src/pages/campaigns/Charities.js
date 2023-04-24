import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search, Clear } from '@mui/icons-material';
import NoResults from '../../components/NoResults';
import CharityCard from '../../components/CharityCard';

const IndividualCampaigns = () => {

  const [charities, setCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/charities`)
    .then((response) => {
        setCharities(response.data)
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => setLoading(false));
  }, []);

  const handleSearch = (categoryValue) => {
    setLoading(true);
    axios.get(`/charities?title=${searchQuery}&category=${categoryValue}`)
      .then((response) => {
        setCharities(response.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
            setCharities([])
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
    handleSearch(category);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setShowClearButton(event.target.value !== '');
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  useEffect(() => {
    handleSearch(category);
  }, [searchQuery, category]); // Run handleSearch on searchQuery and category change

  if (loading) return <Loading />;

  const charitiesList = charities.length
    ? charities.map((charity) => {
      return (
          <CharityCard charity={charity} sx={{pl: 5}}/>
      )
    })
    : <NoResults />;
    
    return (
      <PageContainer title="Charities" description="charity organisations">
        <Typography variant='h3' sx={{ marginY: 2 }}>Charity Organisations</Typography>
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
            <Select fullWidth onChange={handleCategoryChange} defaultValue=''>
              <MenuItem value=" ">All</MenuItem>
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
        <Grid container spacing={3} direction="row" pt={3} justifyContent="center">
        {loading && (
        <Grid item xs={12}>
          <Loading />
        </Grid>
        )}
          {!loading && (
          <>
          {charities.length > 0 ? (
            charitiesList
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