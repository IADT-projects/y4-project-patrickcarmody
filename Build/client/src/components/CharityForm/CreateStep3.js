import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

const CreateStep3 = ({ formData, setFormData, stepData, setStepData, setStepCompleted }) => {

    const [description, setDescription] = useState(stepData.description);

    const handleChange = (e) => {
        setDescription(e.target.value);
      };
    
    useEffect(() => {
        setFormData({ ...formData, description: description });
    }, [description]);

    useEffect(() => {
        setStepData({ description });
        { !!description ? setStepCompleted(true) : setStepCompleted(false) } 
      }, [description]);

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Tell people about your cause
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Write a description of what your organisation does
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    textAlign='center'
                    variant="outlined" 
                    multiline
                    label='Description' 
                    sx={{ width: '50%' }}
                    type="text"
                    value={description}
                    onChange={handleChange}
                />
            </Grid>
        </>
        )   
}

export default CreateStep3;