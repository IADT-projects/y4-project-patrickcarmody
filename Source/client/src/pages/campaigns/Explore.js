import { Box, Button, Grid, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { ChevronRightRounded } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../../config';
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import CharityCard from "../../components/CharityCard";

const Explore = () => {

    const [campaigns, setCampaigns] = useState([]);
    const [charities, setCharities] = useState([]);
    const navigate = useNavigate();

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
        axios.get(`/campaigns?limit=3`)
        .then((response) => {
            setCampaigns(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    useEffect(() => {
        axios.get(`/charities?limit=3`)
        .then((response) => {
            setCharities(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const campaignsList = campaigns.map((campaign) => {
        return(
            <CampaignCard campaign={campaign} sx={{ pl: 5 }}/>
        )
    })

    const charitiesList = charities.map((charity) => {
        return(
            <CharityCard charity={charity} sx={{ pl: 5 }}/>
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
                
                <Grid item xs={7}>
                    <Typography variant='h4'>Donate to user fundraisers</Typography>
                </Grid>
                <Grid item xs={4} display='flex' justifyContent={'flex-end'} component={Link} to='/campaigns/user'>
                    <Typography>More</Typography>
                    <ChevronRightRounded/>
                </Grid>
                <Grid container paddingY={2}>
                    {campaignsList}
                </Grid>
                {/* ----- Categories ----- */}
                <Grid container padding={3} pt={4} spacing={3} direction='row'>
                    <Typography variant='h4' sx={{ paddingBottom: 2 }}>Browse campaigns by category</Typography>
                    <Box sx={{width: '100%'}} >
                        {
                            categories.map((category) => {
                                return(
                                    <Button
                                        variant="outlined"
                                        onClick={() => navigate(`/campaigns/user?category=${category.toLowerCase()}`)}
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
                <Grid item xs={7}>
                    <Typography variant='h4'>Donate to charity organisations</Typography>
                </Grid>
                <Grid item xs={4} display='flex' justifyContent={'flex-end'} component={Link} to='/campaigns/charity'>
                    <Typography>More</Typography>
                    <ChevronRightRounded/>
                </Grid>
                <Grid container paddingY={2}>
                    {charitiesList}
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default Explore;