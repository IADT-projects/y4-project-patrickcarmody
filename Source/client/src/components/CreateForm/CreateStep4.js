import { Grid, TextField, Typography } from "@mui/material";

const CreateStep4 = () => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Tell people about your cause</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Give a description of what you're raising money for, and why.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="standard" multiline label='Description' sx={{ width: '60%'}}/>
            </Grid>
        </>
    )    
}

export default CreateStep4;