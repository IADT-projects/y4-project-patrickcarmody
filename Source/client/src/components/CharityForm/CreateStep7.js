import { useEffect, useState, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { CloudinaryContext, Image } from "cloudinary-react";


const CreateStep7 = ({ formData, setFormData }) => {

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">You can edit this later</Typography>
            </Grid>
        </>
    )    
}

export default CreateStep7;