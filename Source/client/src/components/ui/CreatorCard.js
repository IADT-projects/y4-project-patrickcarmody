import { Box, Button, Card, CardContent, Typography } from "@mui/material"

const CreatorCard = ({creator}) => {
    return(
        <>
            <Card elevation={2}>
                <CardContent sx={{maxWidth: "350px"}}>
                    <Typography variant="h5" textAlign={"center"} >Creator</Typography>
                    <Box paddingY={1}>
                        <Typography variant="body1" paddingY={1}>Creator Name</Typography>
                    </Box>
                    <Box paddingY={1}>
                        <Button variant="contained" size="small">View Profile</Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default CreatorCard;