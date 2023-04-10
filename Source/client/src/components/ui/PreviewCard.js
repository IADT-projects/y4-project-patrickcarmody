import { Button, Card, CardContent, CardMedia, Grid,Typography } from "@mui/material";
import Progress from "./Progress";
import { Link } from "react-router-dom";

const PreviewCard = ({campaign}) => {
    const category = campaign.category.charAt(0).toUpperCase() + campaign.category.slice(1);
    return (
        <>
        <Card elevation={2} sx={{ padding: 0, borderRadius: 3 }}>
            <Button 
                color="success"
                variant="contained"
                sx={{
                    height: "7px",
                    padding: "8px",
                    color: "white",
                    position: "absolute",
                    margin: 2,
                }}
            >{category}</Button>
            <CardMedia 
                sx={{ height: 140, width: "100%" }} 
                image={`https://res.cloudinary.com/dzooewr3a/image/upload/c_scale,w_300/${campaign.image}.png`}
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h6">{campaign.title}</Typography>
                    </Grid>
                    <Grid item xs={4} paddingBottom={2}>
                        
                    </Grid>
                </Grid>
                <Progress campaign={campaign}/>
            </CardContent>
                <Button 
                    variant="contained" 
                    sx={{ m: 1, borderRadius: 2 }} 
                    component={Link} 
                    to={`/campaigns/${campaign._id}`}
                    >
                        View
                </Button>
        </Card>
        </>
    )
}

export default PreviewCard;