import { Helmet } from "react-helmet-async";
import { Box, Button, Grid, Toolbar, Typography } from "@mui/material"
import PreviewCard from "../components/PreviewCard";


const All = () => {
    return(
        <>
        <Helmet>
            <title>All</title>
        </Helmet>
        <Box component="main" sx={{ flexGrow: 1, p: 3, m: 2 }}>
            <Toolbar/>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
                <Grid item xs={4}>
                    <PreviewCard/>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}

export default All;