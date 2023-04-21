import { Grid, Typography } from "@mui/material";
import PreviewCard from "../ui/PreviewCard";

const CreateStep6 = ({ formData }) => {
    return(
        
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Make sure you're happy with your campaign</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h6">Title:</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body1">{formData.title}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h6">Category:</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body1">{formData.category}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h6">Goal:</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body1">{formData.goal}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="h6">Description:</Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body1">{formData.description}</Typography>
            </Grid>
        </>
    )    
}

export default CreateStep6;