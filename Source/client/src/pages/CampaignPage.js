import { Grid, Paper } from "@mui/material";

const CampaignPage = () => {
    return (
        <>
            <Grid container spacing={3} direction="row">
                <Grid item xs={8} sx={{border: "1px solid grey"}}>
                    <Paper></Paper>
                </Grid>
                <Grid item xs={4} sx={{border: "1px solid grey"}}>
                    Item B
                </Grid>
            </Grid>
        </>
    )
}

export default CampaignPage;