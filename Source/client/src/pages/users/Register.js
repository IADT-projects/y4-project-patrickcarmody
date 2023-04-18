import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, Button, FormGroup, Checkbox, TextField, FormControlLabel, IconButton } from '@mui/material';
import axios from '../../config';
import PageContainer from "../../components/PageContainer";
import { ChevronLeft } from '@mui/icons-material';

const Register = () => {

    const navigate = useNavigate();
    const gradient = 'linear-gradient( 0deg, hsl(240deg 80% 71%) 0%, hsl(242deg 81% 74%) 21%, hsl(244deg 81% 77%) 31%, hsl(246deg 82% 80%) 39%, hsl(247deg 83% 84%) 46%, hsl(248deg 84% 87%) 52%, hsl(249deg 85% 90%) 60%, hsl(250deg 85% 93%) 68%, hsl(251deg 86% 97%) 79%, hsl(0deg 0% 100%) 100% )'
    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        address: '0x0000000000',
        email: '',
        password: ''
    })

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = () => {
        console.log(form)
        axios.post('/users/register', {
            first_name: form.first_name,
            last_name: form.last_name,
            address: form.address,
            email: form.email,
            password: form.password
        })
        .then((response) => {
            console.log(response.data);
            setErrorMessage("")
            // set authenticated true
            // props.onAuthenticated(true, response.data.token);
        })
        .catch((err) => {
            console.log(err.response.data)
            setErrorMessage("Error")
        })
    }


    return(
        <PageContainer title="Login" description="login">
            <Box sx={{ 
                background: gradient}}>
                <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
                        <>
                        <Stack direction="row" alignItems="center" mb={3}>
                            <Box width={24}>
                                <IconButton onClick={() => navigate(-1)}>
                                    <ChevronLeft/>
                                </IconButton>
                            </Box>
                            <Typography fontWeight={550} variant='h3' textAlign={'center'}>
                                Create Account
                            </Typography>
                            </Stack>
                            <Stack>
                                
                                <Box>
                                    <Typography variant="subtitle1"
                                        fontWeight={500} 
                                        component="label" 
                                        htmlFor='username' mb="5px"
                                    >
                                            First Name
                                    </Typography>
                                    <TextField 
                                        id="first_name" 
                                        name='first_name'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                    />
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1"
                                        fontWeight={500} 
                                        component="label" 
                                        htmlFor='username' mb="5px"
                                    >
                                            Last Name
                                    </Typography>
                                    <TextField 
                                        id="last_name" 
                                        name='last_name'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                    />
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1"
                                        fontWeight={500} 
                                        component="label" 
                                        htmlFor='username' mb="5px"
                                    >
                                            Email Address
                                    </Typography>
                                    <TextField 
                                        id="email" 
                                        name='email'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                    />
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1"
                                        fontWeight={500} 
                                        component="label" 
                                        htmlFor='password' 
                                        mb="5px" 
                                    >
                                        Password
                                    </Typography>
                                    <TextField 
                                        id="password" 
                                        name='password'
                                        type="password" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                    />
                                </Box>
                            </Stack>
                            <Box mt={3}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={submitForm}
                                >
                                    Register
                                </Button>
                            </Box>
                        </>
                    </Card>
                </Grid>
            </Box>
        </PageContainer>
    )
    
}

export default Register;