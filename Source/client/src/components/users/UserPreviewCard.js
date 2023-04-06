import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from '../../config'
const UserPreviewCard = ({ address }) => {

    console.log("Creator Card:");
    console.log(address)
    const [creator, setCreator] = useState({
        "image": "wedding_pwjqrg"
    })
    // ^ temporary image until request is finished 
    
    useEffect(() => {
        axios.get(`/users?address=${address}`)
            .then((response) => {
                console.log(response.data[0])
                setCreator(response.data[0]);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [address])

    return(
        <>
        <Card>
            <Grid container display={'flex'}>
                <Grid item xs={12} padding={2}>
                    <Typography variant="h4" textAlign={'center'}>
                        Creator
                    </Typography>
                </Grid>
                <Grid item xs={6} sx={{height: 150}}>
                    <CardMedia
                        sx={{ height: '100px', width: '100px', borderRadius: '80%', marginX: 'auto'}}
                        image={`https://res.cloudinary.com/dzooewr3a/image/upload/${creator.image}.png`}
                    />
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={12}>
                        <Typography variant="h6" textAlign={'center'}>
                            {creator.first_name} {creator.last_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" textAlign={'center'} sx={{fontWeight: 'medium'}}>
                            2
                        </Typography>
                        <Typography variant="body1" textAlign={'center'} >
                            Campaigns
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" textAlign={'center'} sx={{fontWeight: 'medium'}}>
                            €4000
                        </Typography>
                        <Typography variant="body1" textAlign={'center'}>
                            Raised
                        </Typography>
                    </Grid>
                    <Grid item xs={12} justifyItems='center' textAlign={'center'}>
                        <Button 
                            variant="contained"
                            href={`/users/${creator.address}`}
                            >
                            View Profile
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default UserPreviewCard;