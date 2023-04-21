import { PersonOff, SearchOff } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

const NotAuthenticated = () => {
    return (
        <Grid
            height='100%'
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            sx={{height: '700px'}}
        >
            <Grid item justifyContent='center' justifyItems='center'>
                <PersonOff sx={{fontSize: "120px"}}/>
            </Grid>
            <Grid item>
                <Typography variant="h3" paddingY={'5'}>You must be logged in to view this page</Typography>
            </Grid>
            <Grid item justifyContent='center' justifyItems='center'>
                <Button href="/login" variant="contained" size='large' sx={{ mx: 2 }}>Log In</Button>
                <Button href="/register" variant="contained" size='large' sx={{ mx: 2 }}>Create Account</Button>
            </Grid>
        </Grid>
    )
}

export default NotAuthenticated;