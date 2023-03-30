import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

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
                <TextField 
                    variant="outlined" 
                    label='Category' 
                    sx={{ width: '40%'}}
                    type="text"
                    value={category}
                    onChange={handleChange}
                />
            </Grid>
        </>

    )    
}

export default CreateStep2;