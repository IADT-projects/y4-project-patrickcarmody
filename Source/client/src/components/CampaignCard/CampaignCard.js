import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Progress from './Progress';

const CampaignCard = ({ campaign }) => {

    // capitalize category
    const category = campaign.category.charAt(0).toUpperCase() + campaign.category.slice(1);

    return (
        <>
        <Card sx={{ maxWidth: 345, minHeight: 375, borderRadius: 2 }}>
        <CardActionArea 
            sx={{ height: '100%', paddingBottom: 5}}
            component={Link}
            to={`/campaigns/${campaign._id}`}
        >
            <CardMedia
            component="img"
            height="160"
            image={`https://res.cloudinary.com/dzooewr3a/image/upload/c_scale,w_375/${campaign.image}.png`}
            alt={`${campaign.image}`}
            />
            <CardContent>
                <Typography
                    variant="h5" 
                    component="div" 
                    fontFamily={'Poppins'}
                    sx={{
                        fontWeight: 'bold',
                        color: '#31343d'
                    }}
                >
                    {campaign.title}
                </Typography>
                <Typography 
                    gutterBottom 
                    variant="body1" 
                    component="div" 
                    fontFamily={'Poppins'}
                    sx={{
                        fontWeight: 'medium',
                        color: '#31343d'
                    }}
                >
                    {category}
                </Typography>
                <Progress campaign={campaign} />
            </CardContent>
        </CardActionArea>
        </Card>
        </>
    );
}

export default CampaignCard;