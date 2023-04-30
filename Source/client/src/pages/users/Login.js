import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography, Button, FormGroup, Checkbox, TextField, FormControlLabel, IconButton } from '@mui/material';
import axios from '../../config';
import PageContainer from "../../components/PageContainer";
import { ChevronLeft } from '@mui/icons-material';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';

const Login = () => {
    
    const { userData, setUserData, setIsAuthenticated} = useContext(UserContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [form, setForm] = useState({
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
        axios.post('/users/login', {
            email: form.email,
            password: form.password
        })
        .then((response) => {
            setErrorMessage("")
            setUserData({
                token: response.data.token,
                id: response.data.user._id,
                address: response.data.user.address,
                email: response.data.user.email,
                first_name: response.data.user.first_name,
                last_name: response.data.user.last_name,
                image: response.data.user.image,
            })
            setIsAuthenticated(true)
            navigate(`/dashboard`);
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage("Error")
        })
    }

    return(
        <PageContainer title="Login" description="login">
            <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
                    <>
                    <Stack direction="row" alignItems="center" mb={3} spacing={3}>
                        <Box width={24}>
                            <IconButton onClick={() => navigate(-1)}>
                                <ChevronLeft/>
                            </IconButton>
                        </Box>
                        <Typography fontWeight={550} variant='h3' textAlign={'center'}>
                            Login
                        </Typography>
                    </Stack>
                    <Stack>
                        <Box>
                            <Typography variant="subtitle1"
                                fontWeight={500} 
                                component="label" 
                                htmlFor='username' mb="5px"
                            >
                                    Email
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
                        <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Remember me"
                                />
                            </FormGroup>
                            <Typography
                                component={Link}
                                to="/"
                                fontWeight="500"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                }}
                            >
                                Forgot Password ?
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            fullWidth
                            onClick={submitForm}
                        >
                            Sign In
                        </Button>
                    </Box>
                    <Stack direction='row' spacing={1} justifyContent='center' mt={3}>
                        <Typography fontWeight='500'>
                            Don't have an account yet?
                        </Typography>
                        <Typography component={Link} to='/register' fontWeight="500" sx={{textDecoration: 'none', color: 'primary.main'}}>
                            Register
                        </Typography>
                    </Stack>
                    </>
                </Card>
            </Grid>
        </PageContainer>
    )
    
}

export default Login;