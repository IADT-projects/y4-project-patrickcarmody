import { Grid, LinearProgress, Typography } from "@mui/material";

const Progress = ({campaign}) => {
    return (
        <>
        <Grid container>
            <Grid item xs={12} marginY={"1px"}>
                <Typography variant="body2">Progress (32%)</Typography>
            </Grid>
            <Grid item xs={12} paddingY={1}>
                <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={50}
                    sx={{ height: 15, borderRadius: 1 }}
                    />
            </Grid>
            <Grid item xs={6} paddingY={1}>
                <Typography variant="body2">€{campaign.goal}</Typography>
            </Grid>
            <Grid item xs={6} paddingY={1}>
                <Typography variant="body2" textAlign={"right"}>€{campaign.goal}</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Progress;