import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../../assets/css/index.css'
import Progress from "./Progress";

const CampaignCard = ({campaign}) => {
    
    const category = campaign.category.charAt(0).toUpperCase() + campaign.category.slice(1);

    return(
    <>
        <Box 
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{
                width: { xs: '100%', md: '30%' },
                height: { xs: '500px', md: '350px'},
                m: 1
            }}
        >
            <Box 
                component={Link}
                to={`/campaigns/${campaign._id}`}
                sx={{
                    overflow: 'hidden',
                    display: 'flex-inline',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexDirection: 'column',
                    border: '1px solid #e6e6e6', 
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
                // Image
                    component='img'
                    src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681845846/${campaign.image}.png`}
                    sx={{
                        height: '140px',
                        overflow: 'hidden',
                        aspectRatio: 8/3,
                        backgroundColor: '#3BBBEB',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}
                />
                {/* // --- Title Container --- */}
                <Box 
                
                    sx={{
                        width: '98%',
                        minHeight: '15%',
                        pt: 2,
                        pl: 1
                    }}
                >
                    {/* Title */}
                    <Typography sx={{
                            fontWeight: '600',
                            fontSize: '20px',
                        }}
                    >
                        {campaign.title}
                    </Typography>
                </Box>
                <Box 
                // Category Container
                    sx={{
                        width: '98%',
                        height: '10%',
                        pl: 1
                    }}
                >
                    {/* Title */}
                    <Typography sx={{
                            fontWeight: '500',
                            fontSize: '12px',
                            color: '#2b2b2b',
                        }}
                    >
                        {category}
                    </Typography>
                </Box>
                <Box display={'flexgrow'}
                    //Progress
                    sx={{
                        width: '97%',
                        height: '24%',
                        pl: 1,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10
                    }}
                >
                    <Progress campaign={campaign} />
                    
                </Box>
            </Box>
        </Box>
    </>
    )
}

export default CampaignCard;