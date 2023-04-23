import { CircularProgress, Grid, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserCreated = ({address}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`/users/${address}`);
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }, []);

    return (
        <Grid
            height='100%'
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            sx={{height: '1000px'}}
        >
            <Grid item>
                <Check color="success" sx={{ width: 160, height: 160 }}/>
            </Grid>
            <Grid item>
                <Typography variant="h3" fontWeight='medium'>User Created!</Typography>
            </Grid>
            <Grid item>
                <CircularProgress variant="indeterminate"/>
            </Grid>
        </Grid>
    )
}

export default UserCreated;