import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import PageContainer from '../../components/PageContainer'
import { Article, East } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from '../../config/';
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import CharityCard from '../../components/CharityCard';

const Home = () => {

  const [campaigns, setCampaigns] = useState([]);
  const [charities, setCharities] = useState([]);

  useEffect(() => {
        axios.get(`/campaigns?limit=3`)
        .then((response) => {
            setCampaigns(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    useEffect(() => {
        axios.get(`/charities?limit=3`)
        .then((response) => {
            setCharities(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const campaignsList = campaigns.map((campaign) => {
        return(
          <CampaignCard campaign={campaign} sx={{ pl: 5 }}/>
        )
    })

    const charitiesList = charities.map((charity) => {
        return(
            <CharityCard charity={charity} sx={{ pl: 5 }}/>
        )
    })
  
    return (
      <PageContainer title="BlockAid" description="home page">
        <Box>
          <Grid container columnSpacing={3} padding={4} rowSpacing={10}> 
            {/* ----- Section 1 ----- */}
            <Grid item xs={12} md={5}>
              <Typography 
                variant='h1'>
                  Raising money
              </Typography>
              <Typography 
                variant='h1' 
                color={'primary'}
                >
                  decentralised.
              </Typography>
              <Typography variant='subtitle1' sx={{fontSize: 18, marginY: 4}}>
                Receive cryptocurrency donations for your cause directly from users on the Ethereum blockchain.
              </Typography>
              <Button
                variant='contained'
                endIcon={<East/>}
                component={Link}
                to='/campaigns/explore'
                sx={{
                  height: '40px',
                  width: '150px',
                  borderRadius: 0
                }}
              >
                Donate Now
              </Button>
            </Grid>
            <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center'}}>
              
              <Box component={'img'}
                src='/images/DonateExample.png' 
                sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', ml: 18}}
              />
            </Grid>
            {/* ----- Section 4 ----- */}
            <Grid item xs={12} container alignItems={'center'}>
              <Grid item xs={12} md={7} sx={{paddingY: 1}}>
                <Typography variant='h3' textAlign={'center'}>Start accepting crypto today</Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{paddingY: 1}} justifyContent='center' display='flex'>
                  <Button 
                    variant='contained'
                    endIcon={<Article/>}
                    component={Link}
                    to='/get-started'
                    sx={{
                      height: '50px',
                      width: '200px',
                      borderRadius: 0
                    }}
                  >
                    Get Started
                  </Button>
              </Grid>
            </Grid>
            {/* ----- Section 3 ----- */}
            <Grid item xs={12} md={8}>
                <Typography variant='h2'>Donate to user campaigns</Typography>
            </Grid>
            <Grid item xs={12} md={4} display='flex' justifyContent={'flex-end'}>
              <Button 
                variant='outlined'
                endIcon={<East/>}
                component={Link}
                to='/campaigns/user'
                sx={{
                  height: '50px',
                  width: '200px',
                  borderRadius: 0
                }}
              >
                View all
              </Button>
            </Grid>
            <Grid item xs={12} container spacing={1} justifyContent="center">
              {campaignsList}
            </Grid>
            {/* ----- Section 4 ----- */}
            <Grid item xs={8} container>
              <Typography variant='h2'>Donate to organisations</Typography>
            </Grid>
            <Grid item xs={4} display='flex' justifyContent={'flex-end'}>
              <Button 
                variant='outlined'
                endIcon={<East/>}
                component={Link}
                to='/campaigns/charity'
                sx={{
                  height: '50px',
                  width: '200px',
                  borderRadius: 0
                }}
              >
                View all
              </Button>
            </Grid>
            <Grid item xs={12} container spacing={1} justifyContent="center">
              {charitiesList}
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Home;