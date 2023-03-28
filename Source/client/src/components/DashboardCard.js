import React from 'react';
import { Card, CardContent, LinearProgress, Typography, Stack, Box, Button } from '@mui/material';

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  progress,
}) => {

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={undefined}
    >
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems={'center'}
              mb={3}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              
              
              {action}  
            </Stack>
          ) : null}
        <Box component='img' alt="image" sx={{ height: 100, width: 310}}
              src="https://i.imgur.com/7mYGrmY.jpg"/>
              <Typography>Progress:</Typography>
        <LinearProgress variant='determinate' color='secondary' sx={{height: 10, marginY: 1}} value={progress}/>
        <Button variant='contained' >View</Button>
          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;