import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ImageUpload from "../ImageUpload";
import { height } from "@mui/system";

const CreateStep5 = ({ formData, setFormData, stepData, setStepData }) => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm</Typography>
            </Grid>
            <ImageUpload/>
        </>
    )    
}

export default CreateStep5;