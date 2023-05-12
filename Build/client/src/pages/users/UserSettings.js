import { useEffect, useRef, useState } from "react";
import PageContainer from "../../components/PageContainer"
import axios from '../../config'
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const UserSettings = () => {
    const { userData, isAuthenticated} = useContext(UserContext);
    const [buttonMessage, setbuttonMessage] = useState("");
    const [passwordCheck, setPasswordCheck] = useState({});
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [ form, setForm ] = useState({
        first_name: "",
        last_name: "",
        biography: "",
        image: "",
        email: "",
    });
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`/users?address=${userData.address}`)
        .then((response) => {
            const user = response.data[0];
            setForm({
                first_name: user.first_name,
                last_name: user.last_name,
                biography: user.biography,
                image: user.image,
                email: user.email
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dzooewr3a',
            uploadPreset: 'kcjt9zeq',
            sources: ["local"],
            cropping: true,
            multiple: false,
            styles: {
                palette: {
                    window: "#FFFFFF",
                    windowBorder: "#191818",
                    tabIcon: "#0078FF",
                    menuIcons: "#437DC7",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                    link: "#3F84D4",
                    action: "#FF620C",
                    inactiveTabIcon: "#0E2F5A",
                    error: "#F44235",
                    inProgress: "#0078FF",
                    complete: "#20B832",
                    sourceBg: "#FFFFFF"
                },
                fonts: {
                    default: null,
                    "'Poppins', sans-serif": {
                        url: "https://fonts.googleapis.com/css?family=Poppins",
                        active: true
                    }
                }
            }
        }, (error, result) => {
            if (!error && result && result.event === 'success') {
            console.log("Image uploaded:", result.info)
            setForm(prevState => ({
                ...prevState,
                image: result.info.public_id
            }))
            }
        });
    
        }, [])

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if(passwordCheck.password1 == passwordCheck.password2) {
            setPasswordsMatch(true);
            setPasswordHelperText("")
            setForm(prevState => ({
                ...prevState,
                password: passwordCheck.password1,
            }))
        }
        else {
            setPasswordsMatch(false);
            setPasswordHelperText("Passwords do not match")
        }
    }, [passwordCheck]);

    const handleSubmit = () => {
        axios.put(`/users/${userData.id}`,form, {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        })
        .then((response) => {
            setbuttonMessage("Saved!")
        })
        .catch()
    };
    
    return(
        <PageContainer title={"Settings"} description="user settings">
            
            <Grid container direction={"row"}>
                {/* ----- Nav ----- */}
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardArrowLeft/>
                </IconButton>
                <Typography variant="h3" marginY={2}>Account Settings</Typography>
              </Grid>
              {isAuthenticated ? (
            <>
            <Box 
                sx={{ 
                    padding: 3, 
                    width: '100%', 
                    height: '100%', 
                    bgcolor: '#fafafa',
                    border: '1px solid #f2f2f2',
                    borderRadius: 2
                }}
            >
              <Grid container sx={{ spacing: 3 }}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 'bold' }}>
                        Edit Profile
                    </Typography>
                    <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>
                        <Stack>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='first_name'
                                >
                                    First name
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='first_name'
                                    name='first_name'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.first_name}
                                />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='last_name'
                                >
                                    Last name
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='last_name'
                                    name='last_name'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.last_name}
                                />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='email'
                                >
                                    Email
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='email'
                                    name='email'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.email}
                                />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='biography'
                                >
                                    Biography
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='biography'
                                    name='biography'
                                    variant="outlined"
                                    multiline
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.biography}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                
                <Grid item xs={12} md={6} sx={{mt: {xs: 5, md: 0}}}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 'bold' }}>
                        Change Password
                    </Typography>
                    <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>
                    <Stack>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='password1'
                                >
                                    New Password
                                </Typography>
                                <TextField
                                    error={!passwordsMatch}
                                    sx={{my: 1}}
                                    id='password1'
                                    name='password1'
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    onChange={ (e) => {
                                        setPasswordCheck(prevState => ({
                                            ...prevState,
                                            password1: e.target.value
                                        }));
                                    }
                                    }
                                />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='password2'
                                >
                                    Confirm New Password
                                </Typography>
                                <TextField
                                    error={!passwordsMatch}
                                    sx={{my: 1}}
                                    id='password2'
                                    name='password2'
                                    variant="outlined"
                                    type="password"
                                    helperText={passwordHelperText}
                                    fullWidth
                                    onChange={ (e) => {
                                        setPasswordCheck(prevState => ({
                                            ...prevState,
                                            password2: e.target.value
                                        }));
                                    }
                                    }
                                />
                            </Box>
                        </Stack>
                        <Grid item xs={12} md={6} sx={{mt: 5}}>
                            <Typography sx={{ fontSize: "20px", fontWeight: '500' }}>
                                Profile Image
                            </Typography>
                            
                            <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>
                            </Box>
                            <Button onClick={() => {widgetRef.current.open()}} sx={{mt: '20px'}} variant='contained'>Change image</Button>
                        </Grid>
                    </Box>
                    
                </Grid>

                
                <Grid item xs={12} mt={2} display>
                    <Button onClick={handleSubmit} variant="contained" size="large">Save</Button>
                    <Typography color='#16b56b' sx={{fontWeight: '500', pt: 1}}>{buttonMessage}</Typography>
                </Grid>
              </Grid>
            </Box>
            </>
          ) : (
            <>
              <h1>Please log in to view this page</h1>
            </>
          )}
        </PageContainer>
      )     
}

export default UserSettings; 