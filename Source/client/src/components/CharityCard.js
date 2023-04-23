import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../assets/css/index.css'

const CharityCard = ({ charity }) => {
    const category = charity.category.charAt(0).toUpperCase() + charity.category.slice(1);

    return(
        <Box 
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
                width: { xs: '100%', md: '30%' },
                height: { xs: '450px', md: '300px'},
                m: 1
            }}
        >
            <Box 
                component={Link}
                to={`/charity/${charity._id}`}
                sx={{
                    display: 'flex-inline',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexDirection: 'column',
                    borderRadius: 3,
                    width: '99%', 
                    height: '99%',
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                    transition: 'all 0.2s ease',
                    '&:hover' : {
                        width: '100%',
                        height: '100%',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                    },
                }}
            >
                <Box
                    component='img'
                    src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/${charity.bannerImage}.png`}
                    sx={{
                        width: '100%',
                        height: '45%',
                        backgroundColor: '#FFFFFF',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                />
                <Box 
                    sx={{ 
                        
                        height: '54%',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    }}
                >
                    <Box sx={{ height: '40px', display: 'flex', p: '8px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#424242' }}>{charity.title}</Typography>
                    </Box>
                    <Box sx={{ height: '70px', display: 'flex', p: '8px' }}>
                        <Box
                            component='img'
                            src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/${charity.logoImage}.png`}
                            sx={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: '#FFFFFF'
                            }}
                        />
                        <Box sx={{ display: 'flex', height: '70px', alignItems: 'center', px: '5px'}}>
                            <Typography sx={{ fontWeight: '600', fontSize: '12px' }}>{category}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CharityCard