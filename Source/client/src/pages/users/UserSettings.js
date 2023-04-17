import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer"
import axios from '../../config'
import { Grid, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const UserSettings = () => {

    const { userData, isAuthenticated} = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <PageContainer title={"Settings"} description="user settings">
          
              <Grid container direction={"row"}>
                <Typography variant="h3" sx={{ fontWeight: '500' }} marginY={2}>Account Settings</Typography>
              </Grid>
              {isAuthenticated ? (
            <>
              <Grid container spacing={3}> 
                {/* ----- User info ----- */}
                <Grid item xs={6} sx={{height: "500px"}}>
                    <Box 
                        sx={{
                            padding: 4, 
                            height: "100%",
                            border: '1px solid #dbdbdb',
                            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.12)',
                            }}
                    >
                        <Grid item xs={12} width='100%'>
                            <Box
                                component="img"
                                sx={{ 
                                height: '200px', 
                                width: '200px', 
                                borderRadius: '80%',
                                display: 'block',
                                margin: '0 auto',
                                }}
                                src={`https://res.cloudinary.com/dzooewr3a/image/upload/${userData.image}.png`}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" sx={{ textAlign: 'center', mt: 4}}>{userData.first_name} {userData.last_name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 17, textAlign: 'center', mt: 4 }}>{userData.biography}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Link href={`https://etherscan.io/address/${userData.address}`} 
                                    underline='hover'
                                    rel='noopener'
                                    target='blank'
                            >
                                <Typography sx={{ fontSize: 14, textAlign: 'center', mt: 4 }}>{userData.address}</Typography>
                            </Link>
                        </Grid>
                    </Box>
                </Grid>
              </Grid>
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