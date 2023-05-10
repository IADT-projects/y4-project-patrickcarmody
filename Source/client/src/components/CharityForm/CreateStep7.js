import { Grid, Typography } from "@mui/material";

const CreateStep7 = ({ formData, setFormData }) => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm Details</Typography>
            </Grid>
            <Grid item xs={12} display='flex'>
                <Typography variant='h4' sx={{mr: 3}}>Name:</Typography>
                <Typography variant='h4' sx={{ fontWeight: '500' }} >{formData.title}</Typography>
            </Grid>
            <Grid item xs={12} display='flex'>
                <Typography variant='h4' sx={{mr: 3}}>Category:</Typography>
                <Typography variant='h4' sx={{ fontWeight: '500' }} >{formData.category}</Typography>
            </Grid>
            <Grid item xs={12} display='flex'>
                <Typography variant='h4' sx={{mr: 3}}>Description:</Typography>
                <Typography variant='h4' sx={{ fontWeight: '500' }} >{formData.description}</Typography>
            </Grid>
            <Grid item xs={12} display='flex'>
                <Typography variant='h4' sx={{mr: 3}}>Website:</Typography>
                <Typography variant='h4' sx={{ fontWeight: '500' }} >{formData.website}</Typography>
            </Grid>
        </>
    )    
}

export default CreateStep7;