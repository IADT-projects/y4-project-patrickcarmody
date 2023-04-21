import { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";

const CreateStep4 = ({ formData, setFormData, stepData, setStepData }) => {

    const [website, setWebsite] = useState(stepData.website)

    const handleChange = (e) => {
        setWebsite(e.target.value);
      };
    
    useEffect(() => {
        setFormData({ ...formData, website: website });
    }, [website]);

    useEffect(() => {
        setStepData({ website });
      }, [website]);

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Add a link to your organisation's website</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">Users can to visit your site to learn more about your cause.</Typography>
                <Typography variant="body1">If your organisation doesn't have a website, you can link your social media account</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField 
                    variant="outlined" 
                    label='Website URL' 
                    sx={{ width: '40%'}}
                    type="text"
                    value={website}
                    onChange={handleChange}
                />
            </Grid>
        </>
    )    
}

export default CreateStep4;