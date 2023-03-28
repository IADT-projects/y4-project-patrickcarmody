import { Box, Button, Card, CardContent, CardMedia, TextField, Typography } from "@mui/material"
import Progress from "./Progress"

const ContributeWindow = () => {
    return(
        <>
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h5" textAlign={"center"} paddingY={2}>Contribute</Typography>
                    <Progress/>
                    <Box paddingY={2}>
                        <TextField fullWidth />
                    </Box>
                    <Button variant="contained">Contribute</Button>

                </CardContent>
            </Card>
        </>
    )
}

export default ContributeWindow;