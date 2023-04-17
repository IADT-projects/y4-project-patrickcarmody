import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { ChevronRightRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../../config';
import CampaignCard from "../../components/CampaignCard/CampaignCard";

const Explore = () => {

    const [campaigns, setCampaigns] = useState([]);

    const categories = [
        "Animals",
        "Community",
        "Emergencies",
        "Environment",
        "Events",
        "Family",
        "Medical",
        "Sports"
    ]

    useEffect(() => {
        axios.get(`/campaigns`)
        .then((response) => {
            setCampaigns(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const campaignsList = campaigns.map((campaign) => {
        return(
            <Grid item xs={12}>
                <CampaignCard campaign={campaign}/>
            </Grid>
        )
    })

    return(
        <PageContainer title='Explore' description='explore campaigns'>
            <Typography variant="h3" sx={{marginY: 3}}>Explore </Typography>
            
            <Grid container>
                <Grid item xs={12} paddingBottom={3}>
                    <Typography sx={{fontWeight: 'medium'}}>Explore active fundraising campaigns</Typography>
                </Grid>
                {/* ----- User ----- */}
                <Grid container paddingY={2}>
                    <Grid item xs={8}>
                        <Typography variant='h4'>Campaigns created by users</Typography>
                    </Grid>
                    <Grid item xs={4} display='flex' justifyContent={'flex-end'} component={Link} to='/campaigns/user'>
                        <Typography>More</Typography>
                        <ChevronRightRounded/>
                    </Grid>
                    <Grid item xs={12} container spacing={1} paddingTop={2}>
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
                {/* ----- Categories ----- */}
                <Grid container paddingY={2}>
                    <Typography variant='h4' sx={{ paddingBottom: 2 }}>Browse campaigns by category</Typography>
                    <Box sx={{width: '100%'}} >
                        {
                            categories.map((category) => {
                                // Make these into links
                                return(
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 3,
                                            margin: 1
                                        }}
                                    >
                                    {category}
                                    </Button>
                                )
                            })
                        }
                    </Box>
                </Grid>
                {/* ----- Charity ----- */}
                <Grid container paddingY={2}>
                    <Grid item xs={8}>
                        <Typography variant='h4'>Donate to charity organisations</Typography>
                    </Grid>
                    <Grid item xs={4} display='flex' justifyContent={'flex-end'} component={Link} to='/campaigns/charity'>
                        <Typography>More</Typography>
                        <ChevronRightRounded/>
                    </Grid>
                    <Grid item xs={12} container spacing={1} paddingTop={2}>
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
            </Grid>
        </PageContainer>
    );
};

export default Explore;