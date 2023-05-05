import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Stack, Typography, Button, TextField, IconButton, Popover, Link, Dialog, Slide, TransitionProps, CircularProgress } from '@mui/material';
import axios from '../../config';
import PageContainer from "../../components/PageContainer";
import { ChevronLeft, HelpOutline } from '@mui/icons-material';
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import useVerifyWallet from '../../hooks/useVerifyWallet';

const Register = () => {

    const { isConnected } = useAccount();
    const [anchorEl, setAnchorEl] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasSigned, setHasSigned] = useState(false);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        address: null,
        email: '',
        password: ''
    })

    const isRequired = (fields) => {
        let error = false;
        fields.forEach(field => {
            if(!form[field]){
                error = true;
                setErrors(prevState => ({
                    ...prevState,
                    [field]: {
                        message: `Required`
                    }
                }));
            }
        });
        return error;
    };

    const {
        data, 
        signMessage, 
        isSuccess, 
        status,
        isLoading,
        address: verifiedAddress
    } = useVerifyWallet('WebRegistration');

    useEffect(() => {
        if(verifiedAddress) {
            setForm(prevState => ({
                ...prevState,
                address: verifiedAddress
            }));
            setHasSigned(true);
            setIsFormValid(Object.values(form).every(field => field !== ''));
            handleCloseDialog()
        }
    }, [verifiedAddress])

    const handleSign = () => {
        signMessage?.();
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDialog = () => {
        setDialogOpen(true);
    }

    const handleCloseDialog = () => {
        setDialogOpen(false);
    }

    const open = Boolean(anchorEl);
    
    const navigate = useNavigate();
    
    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
        setIsFormValid(Object.values(form).every(field => field !== ''));
    };

    const submitForm = () => {
        if(!isRequired(['first_name', 'last_name', 'address', 'email', 'password'])){
            axios.post('/users/register', {
                first_name: form.first_name,
                last_name: form.last_name,
                address: form.address,
                email: form.email,
                password: form.password
            })
            .then((response) => {
                console.log(response);
                if(response.status == 201) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                if(err.response.data.error.includes("Email is already in use")) {
                    setErrors(prevState => ({
                        ...prevState,
                        email: {
                            message: 'Email already in use'
                        }
                    }));
                }
                if(err.response.data.error.includes("Address is already in use")) {
                    setErrors(prevState => ({
                        ...prevState,
                        address: {
                            message: 'Address already in use'
                        }
                    }));
                }
                console.log(err.response.data)
                setErrorMessage(err.response.data.error);
            })
        }
    }

    return(
        <PageContainer title="Register" description="register">
            <Box>
                <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                    <Dialog open={dialogOpen} keepMounted onClose={handleCloseDialog}>
                        <Box
                            sx={{
                                height: '500px',
                                width: '600px',
                                p: 3
                            }}
                        >
                            <Typography fontWeight={550} variant='h3' textAlign={'center'}>
                                Verify your wallet
                            </Typography>
                            <Typography fontWeight={500} mt={7} fontSize={'15px'}>
                                To verify that you are the owner of your Ethereum wallet, you will need to sign a transaction
                            </Typography>
                            <Typography fontWeight={550} mt={10} fontSize={'20px'} textAlign={"center"}>
                                Click the button below to start
                            </Typography>
                            <Stack>
                                <Button
                                    onClick={handleSign}
                                    variant='contained'
                                    sx={{ height: '80px', width: '200px', mx: 'auto', mt: 10 }}
                                >
                                    {isLoading ? (
                                    <CircularProgress color='secondary'/>
                                    )
                                    : 
                                    "Verify Wallet"
                                    }
                                </Button>
                            </Stack>
                        </Box>
                    </Dialog>
                    <Box 
                        sx={{ 
                            width: '500px', 
                            borderRadius: 2, 
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            px: 3,
                            py: 5
                        }}
                    >
                        <Stack direction="row" alignItems="center" mb={3} spacing={3}>
                            <Box width={24}>
                                <IconButton onClick={() => navigate('/campaigns/explore')}>
                                    <ChevronLeft/>
                                </IconButton>
                            </Box>
                            <Typography fontWeight={550} variant='h3' textAlign={'center'}>
                                Create Account
                            </Typography>
                            </Stack>
                            <Stack>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight={500} component="label" htmlFor='username' mb="5px">
                                            First Name
                                    </Typography>
                                    <TextField 
                                        required
                                        id="first_name" 
                                        name='first_name'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                        error={errors.first_name}
                                        helperText={errors.first_name ? 'First name required' : ``}
                                    />
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1" fontWeight={500} component="label" htmlFor='username' mb="5px">
                                            Last Name
                                    </Typography>
                                    <TextField 
                                        id="last_name" 
                                        name='last_name'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                        error={errors.last_name}
                                        helperText={errors.last_name ? 'Last name required' : ``}
                                    />
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1" fontWeight={500} component="label" htmlFor='username' mb="5px">
                                            Email Address
                                    </Typography>
                                    <TextField 
                                        id="email" 
                                        name='email'
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                        error={errors.email}
                                        helperText={errors.email?.message}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        mt: '25px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Typography variant="subtitle1" fontWeight={500}mb={3}>Connect Wallet</Typography>
                                        <IconButton sx={{ height: '17px', width: '17px', ml: '10px', mt: '3px' }} disableRipple
                                            aria-label="help"
                                            onClick={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <HelpOutline sx={{ color: '#424242', fontSize: '17px'}} />
                                        </IconButton>
                                    </Box>

                                    {isConnected && !hasSigned ? (
                                    <>
                                        <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>Please click to verify your address</Typography>
                                        <Button variant='contained' sx={{width: '200px', height: '60px', mt: '10px'}} onClick={handleOpenDialog}>Verify</Button>
                                    </>
                                    ) : hasSigned ? (
                                    <>
                                        <Typography variant="subtitle1" fontWeight={500} mb="5px">
                                            Your wallet address
                                        </Typography>
                                        <Typography variant="subtitle1" fontWeight={500} mb="5px">
                                            {form.address}
                                        </Typography>
                                    </>
                                    ) : (
                                    <Web3Button />
                                    )}

                                    <Popover
                                        id='mouse-over-popover'
                                        sx={{ pointerEvents: 'none' }}
                                        open={open}
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'center',
                                            horizontal: 'right',
                                          }}
                                          transformOrigin={{
                                            vertical: 'center',
                                            horizontal: 'left',
                                          }}
                                          onClose={handlePopoverClose}
                                    >
                                    <Typography p={"3px"}>
                                        See 
                                        <Link href='/get-started'>
                                             get started.
                                        </Link>
                                    </Typography>
                                    </Popover>
                                </Box>
                                <Box mt="25px">
                                    <Typography variant="subtitle1" fontWeight={500} component="label" htmlFor='password' mb="5px">
                                        Password
                                    </Typography>
                                    <TextField 
                                        id="password" 
                                        name='password'
                                        type="password" 
                                        variant="outlined" 
                                        fullWidth 
                                        onChange={handleForm}
                                        error={errors.password}
                                        helperText={errors.password ? 'Please enter a password' : ``}
                                    />
                                </Box>
                            </Stack>
                            <Box mt={3}>
                                <Button
                                    disabled={!isFormValid}
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    onClick={submitForm}
                                >
                                    Register
                                </Button>
                            </Box>
                    </Box>
                </Grid>
            </Box>
        </PageContainer>
    )
    
}

export default Register;