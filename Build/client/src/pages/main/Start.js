import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const Start = () => {
    return (
      <PageContainer title="Get Started" description="this is the home page">
        <Box>
          
            <Typography variant='h3' sx={{mt: 5}}>Welcome to BlockAid!</Typography>
            <Stack sx={{width: '70%', mt: 5}} spacing={4}>
            <Typography variant='h5' sx={{mt: 5}}>Here's a guide on getting started so you can start raising money for the causes that mean so much to you!</Typography>
            <Typography sx={{fontSize: '15px'}}>
              First, you will need an Ethereum-compatible wallet. This is usually a browser extension. We recommend you use MetaMask. To get started, <a href='https://metamask.io/' target='_blank' style={{color: '#3578F4'}}>visit the MetaMask website</a>.
            </Typography>
            <Typography sx={{fontSize: '15px'}}>
              This website uses the Polygon Mumbai test network. Users donate using a token called 'MATIC'. At the moment, the tokens have no value.
            </Typography>
            <Typography sx={{fontSize: '15px'}}>
              To get some MATIC on the Polygon Mumbai Testnet, <a style={{color: '#3578F4'}} href='https://faucet.polygon.technology/' target='_blank'>visit the Polygon Faucet</a> and follow the instructions
            </Typography>
            <Typography variant='h5'>
              Now, you're ready to start raising money!
            </Typography>
          </Stack>
          
        </Box>
      </PageContainer>
    );
  };
  
  export default Start;