import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

const CreateStep4 = ({ formData, setFormData, stepData, setStepData, setStepCompleted }) => {

    const [description, setDescription] = useState(stepData.description)

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
                <Typography variant="h3">Tell people about your cause</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Give a description of what you're raising money for, and why.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    multiline
                    // variant="standard" 
                    label='Description' 
                    sx={{ width: '40%'}}
                    type="text"
                    value={description}
                    onChange={handleChange}
                />
            </Grid>
        </>
    )    
}

export default CreateStep4;