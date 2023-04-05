import { useEffect, useState } from "react";
import { Grid, MenuItem, Select, TextField, Typography } from "@mui/material";

const CreateStep2 = ({ formData, setFormData, stepData, setStepData  }) => {

    const [category, setCategory] = useState(stepData.category)

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        setFormData({ ...formData, category: category });
    }, [category]);

    useEffect(() => {
        setStepData({ category });
      }, [category]);

    return(

        <>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Why are you raising money?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Choose the category that best fits your campaign
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Select
                    label="Category"
                    value={category}
                    onChange={handleChange}
                    sx={{ width: '50%' }}
                    >
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