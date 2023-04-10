import { Grid, LinearProgress, Typography } from "@mui/material";

const Progress = ({campaign}) => {
    return (
        <>
        <Grid container spacing={1}>
            <Grid item xs={12} >
                <Typography variant="body2">Progress (32%)</Typography>
            </Grid>
            <Grid item xs={12}>
                <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={50}
                    sx={{ height: 8, borderRadius: 1}}
                    />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2">€{campaign.goal}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2" textAlign={"right"}>€{campaign.goal}</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Progress;