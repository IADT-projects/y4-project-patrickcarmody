import { Grid, TextField, Typography } from "@mui/material";

const CreateStep3 = () => {
    
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">What's your initial target?</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">This is just your initial target, users will still be able to contribute to your campaign after it reaches this amount.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label='Target' sx={{ width: '40%'}}/>
            </Grid>
        </>

    )    
}

export default CreateStep3;