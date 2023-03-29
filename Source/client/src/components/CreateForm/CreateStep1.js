import { Grid, TextField, Typography } from "@mui/material";

const CreateStep1 = () => {
    return(

        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Give your campaign a title
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    This is how users will find your campaign on our site.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label='Title' sx={{ width: '40%'}}/>
            </Grid>
        </>
        
        )   
}

export default CreateStep1;