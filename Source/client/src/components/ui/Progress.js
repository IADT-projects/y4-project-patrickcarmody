import { Grid, LinearProgress, Typography } from "@mui/material";

const Progress = ({raised, goal}) => {
    return (
        <>
        <Grid container>
            <Grid item xs={12} marginY={"1px"}>
                <Typography variant="body2">Progress (32%)</Typography>
            </Grid>
            <Grid item xs={12}>
                <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={50}
                    sx={{ height: 15, borderRadius: 1 }}
                    />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2">€1,345</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2" textAlign={"right"}>€4,000</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default Progress;