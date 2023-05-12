import { useEffect, useState } from "react";
import { Clear, Search } from "@mui/icons-material";
import { Box, Grid, InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import NoResults from "../../components/NoResults";
import axios from '../../config'
import Loading from "../../components/Loading";
import CampaignCard from "../../components/CampaignCard/CampaignCard";

const UserCampaigns = () => {

    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [showClearSearch, setShowClearSearch] = useState(false);
    
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`/campaigns`)
        .then((response) => { setCampaigns(response.data) })
        .catch((err) => { console.error(err) })
        .finally(() => setLoading(false));
      }, []);

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        handleSearch();
    }

    const handleSearch = () => {
        setLoading(true);
        axios.get(`/campaigns?category=${category}&title=${searchQuery}`)
        .then((response) => { setCampaigns(response.data) })
        .catch((err) => { console.error(err) })
        .finally(() => setLoading(false));
    }

    const handleClearSearch = () => {
        setCategory("");
        setSearchQuery("");
        handleSearch();
    }

    const campaignsList = campaigns.length ? campaigns.map((campaign) => {
        return(
            <CampaignCard campaign={campaign}/>
        )
    })
    : <NoResults/>

    return(
        <PageContainer title='User campaigns'>
            <Typography variant='h3' sx={{ marginY: 2 }}>User campaigns</Typography>
            <Grid container paddingBottom={2} spacing={2}>
                <Grid item xs={12} lg={4}>
                    <TextField
                        label='Search'
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    {showClearSearch ? (
                                        <Clear onClick={handleClearSearch}/>
                                    ) : (
                                        <Search onClick={handleSearch}/>
                                    )}
                                </InputAdornment>
                            )
                        }}
                        value={searchQuery}
                        onChange={handleSearchInput}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Select 
                        fullWidth
                        onChange={handleCategoryChange}
                        defaultValue={""}
                    >
                        <MenuItem value=''>All</MenuItem>
                        <MenuItem value='animals'>Animals</MenuItem>
                        <MenuItem value='community'>Community</MenuItem>
                        <MenuItem value='emergencies'>Emergencies</MenuItem>
                        <MenuItem value='environment'>Environment</MenuItem>
                        <MenuItem value='events'>Events</MenuItem>
                        <MenuItem value='family'>Family</MenuItem>
                        <MenuItem value='medical'>Medical</MenuItem>
                        <MenuItem value='sports'>Sports</MenuItem>
                        <MenuItem value='other'>Other</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Box>
                <Grid container spacing={3} direction="row" pt={3} pl={2} justifyContent='center'>
                {loading && (
                    <Grid item xs={12}>
                       <Loading />
                    </Grid>
                )}
                {!loading && (
                <>
                    {campaigns.length > 0 ? (
                        campaignsList
                    ) : (
                    <Grid item xs={12}>
                        <NoResults />
                    </Grid>
                    )}
                </>
                )}
                <Grid item xs={12} lg={12}>
                {/* Pagination here */}
                </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}

export default UserCampaigns;