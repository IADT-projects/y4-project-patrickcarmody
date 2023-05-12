import { useEffect, useState } from "react";
import { Grid, MenuItem, Select, TextField, Typography } from "@mui/material";

const CreateStep2 = ({ formData, setFormData, stepData, setStepData, setStepCompleted }) => {

    const [category, setCategory] = useState(stepData.category)

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        setFormData({ ...formData, category: category });
    }, [category]);

    useEffect(() => {
        setStepData({ category });
        { !!category ? setStepCompleted(true) : setStepCompleted(false) }
      }, [category]);

    return(

        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    What does your organisation raise money for?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Choose the category that best fits your charity
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Select
                    value={category}
                    onChange={handleChange}
                    sx={{ width: '50%' }}
                    displayEmpty
                    >
                        <MenuItem value="">Please select</MenuItem>
                        <MenuItem value="animals">Animals</MenuItem>
                        <MenuItem value="community">Community</MenuItem>
                        <MenuItem value="emergencies">Emergencies</MenuItem>
                        <MenuItem value="environment">Environment</MenuItem>
                        <MenuItem value="events">Events</MenuItem>
                        <MenuItem value="family">Family</MenuItem>
                        <MenuItem value="medical">Medical</MenuItem>
                        <MenuItem value="sports">Sports</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                </Select>
            </Grid>
        </>

    )    
}

export default CreateStep2;