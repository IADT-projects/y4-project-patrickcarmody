import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageContainer from '../PageContainer';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Check, SearchOff } from '@mui/icons-material';

const Created = ({ url, type }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(url);
        }, 5000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return(
        <PageContainer>
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
                    <Check color='success' sx={{fontSize: "120px"}}/>
                </Grid>
                <Grid item>
                    <Typography variant="h2" paddingY={'5'}>{type.charAt(0).toUpperCase() + type.slice(1)} Created!</Typography>
                </Grid>
                <Grid item>
                    <CircularProgress color='secondary'/>
                </Grid>
                <Grid item>
                    <Typography fontWeight='500' variant="h5" paddingY={'5'}>Redirecting you to your campaign page...</Typography>
                </Grid>
            </Grid>
        </PageContainer>
    )
}
export default Created;