import React from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer'

const About = () => {
    return (
      <PageContainer title="About" description="this is the home page">
        <Box>
          <Typography variant='h3' sx={{ marginY: 2 }}>About</Typography>
          <Typography variant='h6'>About</Typography>  
        </Box>
      </PageContainer>
    );
  };
  
  export default About;