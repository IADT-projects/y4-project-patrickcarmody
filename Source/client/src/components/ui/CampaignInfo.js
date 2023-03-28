import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";


const CampaignInfo = () => {
    return(
        <>
        <Card elevation={2} sx={{padding: 0}}>
            <CardMedia 
            sx={{ height: 250, width: "100%" }}
            image="https://images.pexels.com/photos/9108987/pexels-photo-9108987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h3">Title</Typography>
                    </Grid>
                    <Grid item xs={6} paddingBottom={2}>
                        <Typography variant="subtitle1" textAlign={"right"}>Category</Typography>
                    </Grid>
                    <Grid item xs={6} paddingBottom={2}>
                        <Typography variant="subtitle1" textAlign={"left"}>This is an example description</Typography>
                    </Grid>
                    <Grid container item xs={12} paddingBottom={2}>
                        <Typography variant="h6" textAlign={"center"}>Campaign Details</Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Grid container>
                <Grid item xs={6}>
                        <Typography variant="body1" textAlign={"left"}>Initial Target:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" textAlign={"right"}>€5,000</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" textAlign={"left"}>View on Blockchain</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" textAlign={"right"}>0x000000000000</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>
    )
}

export default CampaignInfo;