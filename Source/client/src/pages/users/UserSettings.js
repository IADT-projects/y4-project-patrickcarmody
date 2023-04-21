import { useEffect, useState } from "react";
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
    const [ form, setForm ] = useState({
        first_name: "",
        last_name: "",
        biography: "",
        image: "",
        email: "",
        password: "",
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

    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        axios.put(`/users/${userData.id}`, {
            first_name: form.first_name,
            last_name: form.last_name,
            biography: form.biography,
            image: form.image,
            email: form.email
        }, {
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
                                    htmlFor='first_name'
                                >
                                    New Password
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='first_name'
                                    name='first_name'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                />
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='last_name'
                                >
                                    Confirm New Password
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='last_name'
                                    name='last_name'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt: 5}}>
                    <Typography sx={{ fontSize: "20px", fontWeight: '500' }}>
                        Profile Image
                    </Typography>
                    <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>

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