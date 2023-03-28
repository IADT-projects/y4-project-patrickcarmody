import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Progress from "./Progress";
import { Link } from "react-router-dom";

const paperSX = {}


const PreviewCard = (props) => {

    return (
        <>
        <Card elevation={1} sx={{ padding: 0 }}>
            <CardMedia sx={{ height: 140, width: "100%" }} 
            image="https://images.pexels.com/photos/9108987/pexels-photo-9108987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h6">{props.campaign.title}</Typography>
                    </Grid>
                    <Grid item xs={4} paddingBottom={2}>
                        <Typography variant="subtitle1" textAlign={"right"}>{props.campaign.category}</Typography>
                    </Grid>
                </Grid>
                <Progress/>
            </CardContent>
                <Button variant="contained" sx={{ margin: 2}} component={Link} to={`/campaigns/${props.campaign._id}`}>
                    View
                </Button>
        </Card>
        </>
    )

}

export default PreviewCard;