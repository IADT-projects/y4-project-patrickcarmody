import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

const CreateStep5 = ({ formData, setFormData, stepData, setStepData }) => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Typography</Typography>
            </Grid>
        </>
    )    
}

export default CreateStep5;