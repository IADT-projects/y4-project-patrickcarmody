import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DogImage = require('../assets/placeholder/dog.jpg');

const PreviewCard = ({campaign}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={DogImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Raise Money
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="contained">View</Button>
      </CardActions>
    </Card>
  );
}

export default PreviewCard;
