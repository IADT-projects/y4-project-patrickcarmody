import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer"
import axios from '../../config'
import { Button, Grid, IconButton, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { userData, isAuthenticated} = useContext(UserContext);
    const [buttonMessage, setbuttonMessage] = useState("");
    const [ form, setForm ] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
    });
    const navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        axios.get(`/campaigns/${id}`)
        .then((response) => {
            const campaign = response.data;
            setForm({
                title: campaign.title,
                description: campaign.description,
                category: campaign.category,
                image: campaign.image
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
        axios.put(`/campaigns/${id}`, {
            title: form.title,
            description: form.description,
            category: form.category,
            image: form.image
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
        <PageContainer title={"Edit Campaign"} description="edit campaign">
            
            <Grid container direction={"row"}>
                {/* ----- Nav ----- */}
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardArrowLeft/>
                </IconButton>
                <Typography variant="h3" marginY={2}>Edit Campaign</Typography>
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
                        Campaign Details
                    </Typography>
                    <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>
                        <Stack>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='title'
                                >
                                    Title
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='title'
                                    name='title'
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.title}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='category'
                                >
                                    Category
                                </Typography>
                                <Select
                                    label="Category"
                                    value={form.category}
                                    onChange={handleForm}
                                    sx={{ width: '50%', my: 1 }}
                                >
                                    <MenuItem value="animals">Animals</MenuItem>
                                    <MenuItem value="community">Community</MenuItem>
                                    <MenuItem value="emergencies">Emergencies</MenuItem>
                                    <MenuItem value="environment">Environment</MenuItem>
                                    <MenuItem value="events">Events</MenuItem>
                                    <MenuItem value="family">Family</MenuItem>
                                    <MenuItem value="medical">Medical</MenuItem>
                                    <MenuItem value="sports">Sports</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1"
                                    fontWeight={500}
                                    component='label'
                                    htmlFor='description'
                                >
                                    Description
                                </Typography>
                                <TextField
                                    sx={{my: 1}}
                                    id='description'
                                    name='description'
                                    variant="outlined"
                                    multiline
                                    fullWidth
                                    onChange={handleForm}
                                    value={form.description}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{mt: {xs: 5, md: 0}}}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 'bold' }}>
                        Change Image
                    </Typography>
                    <Box sx={{ borderRadius: 2, height: '100%', width: '100%', pr: 2, pt: 2 }}>
                        Put image upload here
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

export default Edit; 