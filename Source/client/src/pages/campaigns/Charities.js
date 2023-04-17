import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, InputAdornment, Select, MenuItem } from '@mui/material';
import PageContainer from '../../components/PageContainer';
import axios from '../../config';
import Loading from '../../components/Loading';
import { Search } from '@mui/icons-material';
import CharityCard from '../../components/CharityCard';
import NoResults from '../../components/NoResults';

const Charities = () => {

  const [charities, setCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/charities`)
    .then((response) => {
        console.log(response.data)
        setCharities(response.data)
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    setLoading(true);
    axios.get(`/charities?title=${searchQuery}`)
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

  const charitiesList = charities.length
    ? charities.map((charity) => {
      return (
        <Grid item xs={12} md={4} lg={3}>
          <CharityCard charity={charity} />
        </Grid>
      )
    })
    : <NoResults />;

    return (
      <PageContainer title="Charities" description="charity campaigns">
        <Typography variant='h3' sx={{ marginY: 2 }}>Charity campaigns</Typography>
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

export default Charities;