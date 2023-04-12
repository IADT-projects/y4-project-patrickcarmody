import { Avatar, Box, Button, Link, Grid, TextField, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { Lock } from "@mui/icons-material";
import { useState } from "react";
import axios from '../../config';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        "email": "",
        "password": ""
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
                    // navigate 
                    console.log(response.data);
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
                <>
                <Avatar sx={{ m: 1 , bgcolor: 'success'}}>
                    <Lock/>
                </Avatar>
                <Typography variant="h3">
                    Login
                </Typography>
                <Box sx={{ mt: 1 }}>
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
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                            
                        </Grid>
                    </Grid>
                </Box>
                </>
        </Box>
    </PageContainer>
    </>
    )
}

export default Login;