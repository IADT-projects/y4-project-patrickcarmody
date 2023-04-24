import { Box, Divider, Grid, Typography } from "@mui/material";

const CreateStep6 = ({ formData }) => {
    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Confirm Details</Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h6" fontWeight={500}>When you submit this form, you will be prompted to confirm a transaction in your browsers wallet. This will deploy your fundraising campaign to the Polygon blockchain.</Typography>
                    <Typography mt={2} variant="h6" fontWeight={500}>You will need a small amount of MATIC to pay the fee for the transaction</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Divider sx={{width: '80%'}}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6">Here are your campaign details:</Typography>
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