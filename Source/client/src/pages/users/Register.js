import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { PersonAdd } from "@mui/icons-material";
import { useState } from "react";
import axios from '../../config';
import { useNavigate } from "react-router-dom";
import UserCreated from "../../components/UserCreated";

const Register = () => {

    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [address, setAddress] = useState("");

    const [form, setForm] = useState({
        "address": "",
        "first_name": "",
        "last_name": "",
        "biography": "",
        "email": "",
        "password": "",
        "image": "",
    })

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axios.post(`/users/register`, form)
            .then((response) => {
                console.log(response.status);
                if(response.status === 201) {
                    // navigate to user page
                    console.log(response.data._id);
                    setSubmitted(true);
                    setAddress(response.data.address);
                }
                else {
                    console.log(response)
                    console.log("Response code: " + response.status);
                }
            })
            .catch((err) => {
                console.log("Error: ")
                console.log(err);
            })
    }

    return(
        <>
        <PageContainer title="Register" description="register">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                {submitted ? (
                <>
                    <UserCreated address={address}/>
                </>
                ) : (
                <>
                <Avatar sx={{ m: 1 , bgcolor: 'success'}}>
                    <PersonAdd/>
                </Avatar>
                <Typography variant="h3">
                    Get Started
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        onChange={handleForm}
                        name="first_name"
                        label="First Name"
                        id="first_name"
                        autoComplete="first-name"
                    />
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        onChange={handleForm}
                        name="last_name"
                        label="Last Name"
                        id="last_name"
                        autoComplete="family-name"
                    />
                    <TextField
                        variant="standard"
                        margin='normal'
                        required
                        fullWidth
                        onChange={handleForm}
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        />
                    <TextField
                        variant="standard"
                        margin='normal'
                        required
                        fullWidth
                        onChange={handleForm}
                        id='address'
                        label='ERC-20 Address'
                        name='address'
                        autoComplete='address'
                        autoFocus
                        />
                    <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        onChange={handleForm}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Box sx={{
                        marginY: 4,
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography variant="body1" fontSize={16}>
                            In the final version, the user will need to connect wallet here and sign to continue registering.
                        </Typography>
                        <Button variant="contained" disabled >Connect Wallet</Button>
                    </Box>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                            
                        </Grid>
                    </Grid> */}
                </Box>
                </>
            )}
            
        </Box>
    </PageContainer>
    </>
    )
}

export default Register;