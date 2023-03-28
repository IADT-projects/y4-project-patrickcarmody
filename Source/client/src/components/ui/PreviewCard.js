import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Progress from "./Progress";

const paperSX = {}


const PreviewCard = ({
    address,
    title,
    description,
    category,
    creator,
    goal
}) => {
    return (
        <>
        <Card elevation={1} sx={{ padding: 0 }}>
            <CardMedia sx={{ height: 140, width: "100%" }} 
            image="https://images.pexels.com/photos/9108987/pexels-photo-9108987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h4">Campaign Title</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" textAlign={"right"}>Campaign Title</Typography>
                    </Grid>
                </Grid>
                <Progress/>
            </CardContent>
                <Button variant="contained" sx={{ margin: 2}}>
                    View
                </Button>
        </Card>
        </>
    )

}

export default PreviewCard;