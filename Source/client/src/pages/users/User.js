import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer"
import { useParams } from "react-router-dom";
import axios from '../../config'
import { Grid, IconButton, Link, Typography } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import PreviewCard from "../../components/ui/PreviewCard";

const User = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [campaigns, setCampaigns] = useState(null);
    const [numberOfCampaigns, setNumberOfCampaigns] = useState(0);
    const [pageTitle, setPageTitle] = useState("User");

    useEffect(() => {
      axios.get(`/users?address=${id}`)
        .then((response) => {
          setUser(response.data[0]);
          axios.get(`/campaigns?creator=${id}`)
            .then((response) => {
              setNumberOfCampaigns(response.data.length)
              setCampaigns(response.data);
            })
            .catch((err) => {
              console.error(err);
            })
          setPageTitle(`${response.data[0].first_name} ${response.data[0].last_name}`)
        })
        .catch((err) => {
          console.error(err);
        });
    }, [id])

    return(
        <PageContainer title={pageTitle} description="user profile">
          {user ? (
            <>
              <Grid container direction={"row"}>
                {/* ----- Nav ----- */}
                <IconButton onClick={() => navigate(-1)}>
                  <KeyboardArrowLeft/>
                </IconButton>
                <Typography variant="h3" marginY={2}>User Profile</Typography>
              </Grid>
              <Grid container spacing={3}> 
                {/* ----- User info ----- */}
                `<Grid item xs={12} width='100%'>
                  <Box
                    component="img"
                    sx={{ 
                      height: '200px', 
                      width: '200px', 
                      borderRadius: '80%',
                      display: 'block',
                      margin: '0 auto',
                    }}
                    src={`https://res.cloudinary.com/dzooewr3a/image/upload/${user.image}.png`}
                  />
                </Grid>`
                <Grid item xs={12}>
                  <Typography variant="h2" sx={{ textAlign: 'center' }}>{user.first_name} {user.last_name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: 17, textAlign: 'center' }}>{user.biography}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link href={`https://etherscan.io/address/${user.address}`} 
                        underline='hover'
                        rel='noopener'
                        target='blank'
                  >
                    <Typography sx={{ fontSize: 14, textAlign: 'center' }}>{user.address}</Typography>
                  </Link>
                </Grid>
                <Grid item container xs={12}>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 'medium', fontSize: 17, textAlign: 'center' }}>{numberOfCampaigns}</Typography>
                    <Typography sx={{ fontSize: 12, textAlign: 'center' }}>Campaigns</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ fontWeight: 'medium', fontSize: 17, textAlign: 'center' }}>€20,728</Typography>
                    <Typography sx={{ fontSize: 12, textAlign: 'center' }}>Raised</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant='h2' sx={{ textAlign: 'center', paddingTop: 9 }}>Campaigns created by {user.first_name} {user.last_name}</Typography>
              <Grid container spacing={3} direction="row" padding={3}>
                {campaigns &&
                  campaigns.map((campaign) => (
                    <Grid item xs={12} md={6}>
                      <PreviewCard campaign={campaign} />
                    </Grid>
                  ))
                }
              </Grid>
            </>
          ) : (
            <>
              <h1>User not found</h1>
            </>
          )}
        </PageContainer>
      )     
}

export default User; 