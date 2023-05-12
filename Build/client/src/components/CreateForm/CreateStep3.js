import { useEffect, useState } from "react";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";

const CreateStep3 = ({ formData, setFormData, stepData, setStepData, setStepCompleted }) => {

    const [goal, setGoal] = useState(stepData.goal)

    const handleChange = (e) => {
        setGoal(e.target.value);
    };

    useEffect(() => {
        setFormData({ ...formData, goal: goal });
    }, [goal]);

    useEffect(() => {
        setStepData({ goal });
        { !!goal ? setStepCompleted(true) : setStepCompleted(false) }
      }, [goal]);
    
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">What's your initial target?</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">This is just your initial target, users will still be able to contribute to your campaign after it reaches this amount.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    // variant="standard" 
                    label='Target ' 
                    sx={{ width: '250px'}}
                    type="number"
                    value={goal}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                MATIC
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
        </>

    )    
}

export default CreateStep3;