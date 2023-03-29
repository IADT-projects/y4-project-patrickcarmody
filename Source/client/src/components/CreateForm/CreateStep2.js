import { Grid, TextField, Typography } from "@mui/material";

const CreateStep2 = () => {
    return(

        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Why are you raising money?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Choose the category that best fits your campaign
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label='Title' sx={{ width: '40%'}}/>
            </Grid>
        </>

    )    
}

export default CreateStep2;