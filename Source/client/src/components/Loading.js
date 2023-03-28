import { CircularProgress, Grid, Typography } from "@mui/material";

const Loading = () => {
    return (
        <Grid
            height='100%'
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            sx={{height: '700px'}}
        >
            <Grid item>
                <CircularProgress size={80}/>
            </Grid>
            <Grid item>
                <Typography variant="h5" paddingY={'5'}>Loading...</Typography>
            </Grid>
            
            
        </Grid>
    )
}

export default Loading;