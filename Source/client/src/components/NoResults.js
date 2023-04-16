import { SearchOff } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const NoResults = () => {
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
            <Grid item>
                <SearchOff sx={{fontSize: "120px"}}/>
            </Grid>
            <Grid item>
                <Typography variant="h5" paddingY={'5'}>No results found</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" paddingY={'5'}>Try something else, or remove your search query.</Typography>
            </Grid>
        </Grid>
    )
}

export default NoResults;