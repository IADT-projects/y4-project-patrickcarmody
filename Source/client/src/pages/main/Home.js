import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import PageContainer from '../../components/PageContainer'
import { Article, East } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <PageContainer title="Crowdfunding" description="home page">
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
            <Grid item xs={12} md={7}>
              <img 
                src='https://i.imgur.com/1Ksal3s.png'
                width={'100%'}
                height={'100%'}
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
            <Grid item xs={12} container spacing={1}>
              <Grid item xs={4} >
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
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
            <Grid item xs={12} container spacing={1}>
              <Grid item xs={4} >
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ height: "200px", bgColor: 'black', border: '1px dotted black' }}></Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Home;