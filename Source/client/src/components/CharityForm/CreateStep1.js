import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

const CreateStep1 = ({ formData, setFormData, stepData, setStepData }) => {

    const [title, setTitle] = useState(stepData.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
      };
    
    useEffect(() => {
        setFormData({ ...formData, title: title });
    }, [title]);

    useEffect(() => {
        setStepData({ title });
      }, [title]);

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    What is the name of your organisation?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    This is how users will find your campaign on our site.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    textAlign='center'
                    variant="outlined" 
                    label='Name' 
                    sx={{ width: '50%'}}
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
            </Grid>
        </>
        )   
}

export default CreateStep1;