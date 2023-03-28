import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import Progress from "./Progress"

const ContributeWindow = ({campaign}) => {
    console.log(campaign)
    return(
        <>
            <Card elevation={2}>
                <CardContent>
                    <Typography variant="h5" textAlign={"center"} paddingY={2}>Donate</Typography>
                    <Progress/>
                    <Box paddingY={3}>
                        <TextField variant='outlined' fullWidth label="Amount"/>
                    </Box>
                    <Button variant="contained">Donate</Button>
                </CardContent>
            </Card>
        </>
    )
}

export default ContributeWindow;