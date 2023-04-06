import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer"
import { useParams } from "react-router-dom";
import axios from '../../config'
import PreviewCard from "../../components/ui/PreviewCard";
import { Grid } from "@mui/material";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [campaigns, setCampaigns] = useState(null);
    const [campaignsList, setCampaignsList] = useState(null);

    // get user
    useEffect(() => {
        axios.get(`/users/${id}`)
            .then((response) => {
                setUser(response.data);
                console.log(user);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id])

    useEffect(() => {
        if(user !== null) {
        axios.get(`/campaigns?creator=${user.address}`)
            .then((response) => {
                setCampaigns(response.data);
                setCampaignsList(
                    campaigns.map((campaign) => {
                        return(
                            <Grid item xs={12} md={6} lg={4}>
                                <PreviewCard campaign={campaign}/>
                            </Grid>
                        )
                    })
                )
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            console.log("User is null")
        }
    }, [])

    return(
        <PageContainer title="User" description="user profile">
            {user ? (
            <>
                <h1>User Profile</h1>
                <h1>{user.first_name} {user.last_name}</h1>
                <img src={`https://res.cloudinary.com/dzooewr3a/image/upload/${user.image}.png`}/>
                <h3>{user.address}</h3>
                <h1>Campaigns created by {user.first_name} {user.last_name}:</h1>
                {/* display campaigns here */}
                <Grid container spacing={3} direction="row">
                    {campaignsList}
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