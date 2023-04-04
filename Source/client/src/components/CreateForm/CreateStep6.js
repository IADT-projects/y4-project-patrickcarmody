import { Grid, Typography } from "@mui/material";

const CreateStep6 = ({ formData, setFormData }) => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Step 6</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Final Step. Confirm.</Typography>
            </Grid>
        </>
    )    
}

export default CreateStep6;