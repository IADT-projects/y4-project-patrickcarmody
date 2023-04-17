import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";


const CharityCard = ({ charity }) => {
    // capitalize category
    const category = charity.category.charAt(0).toUpperCase() + charity.category.slice(1);

    return(
    <Card sx={{  minHeight: 375, borderRadius: 2 }}>
        <CardActionArea
            sx={{ height: '100%'}}
            component={Link}
            // Add link to charity page
        >
            <CardMedia
                component='img'
                height='200'
                image={`https://res.cloudinary.com/dzooewr3a/image/upload/c_scale,w_375/${charity.bannerImage}.png`}
            />
            <Box
                sx={{
                    paddingY: 3,
                    height: '150px'
                }}
                component={'img'}
                src={`https://res.cloudinary.com/dzooewr3a/image/upload/${charity.logoImage}.png`}
            />
            <Box sx={{paddingX: 2}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                    {charity.title}
                </Typography>
            </Box>
            <Box sx={{paddingX: 2}}>
                <Typography sx={{ fontWeight: 'medium', fontSize: '15px' }}>
                    {category}
                </Typography>
            </Box>
            
        </CardActionArea>
    </Card>
    );
};

export default CharityCard