import { Box, Card, CardContent, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import { Sell } from "@mui/icons-material";

const CampaignInfo = ({campaign}) => {
    const category = campaign.category.charAt(0).toUpperCase() + campaign.category.slice(1)
    const campaignaddress = `${campaign.address.substring(0,6)}...${campaign.address.substring(38)}`
    return(
        <>
        <Box 
            sx={{
                display: 'flexgrow',
                flexDirection: 'column',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                width: '100%'
            }}
        >
            <Box
            // Image 
                component={'img'}
                src={`https://res.cloudinary.com/dzooewr3a/image/upload/${campaign.image}.png`}
                sx={{
                    height: '50%',
                    width: '100%',
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                }}
            />
            <Box
            // Bottom half
                sx={{
                    p: 2,
                    display: 'flexgrow',
                    flexDirection: 'column',
                    height: '50%',
                    width: '100%',
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                }}
            >
                <Box
                //Description
                sx={{
                    minHeight: '15%',
                    width: '100%'
                }}
                >
                    <Typography sx={{fontWeight: 'medium'}}>{campaign.description}</Typography>
                </Box>
                <Box
                //Category
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '30px',
                    width: '100%',
                    my: 1
                }}
                >
                    <Sell/>
                    <Typography sx={{fontWeight: '600', fontSize: '12px', color: '#636362' , ml: 2}}>{category}</Typography>
                </Box>
                <Box
                //Details
                sx={{
                    display: 'flexgrow',
                    height: '100px',
                    width: '100%',
                }}
                >
                    <Typography variant='h5' sx={{color: '#303030'}}>Campaign Details</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                            height: '25px',
                            borderBottom: '1px solid #ededed'
                        }}
                    >
                        <Box sx={{width: '50%'}}>
                            <Typography textAlign={'left'}>Initial Target</Typography>
                        </Box>
                        <Box sx={{width: '50%'}}>
                            <Typography textAlign={'right'}>€{campaign.goal}</Typography>
                        </Box>
                        
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '25px',
                            borderBottom: '1px solid #ededed'
                        }}
                    >
                        <Box sx={{width: '50%'}}>
                            <Typography textAlign={'left'}>View on Blockchain</Typography>
                        </Box>
                        <Box sx={{width: '50%'}}>
                            <Link href={`https://mumbai.polygonscan.com/address/${campaign.address}`} sx={{textDecoration: 'none'}}>
                                <Typography sx={{textAlign: 'right'}}>{campaignaddress}</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
        </Box>
        </>
    )
}

export default CampaignInfo;