import { Helmet } from "react-helmet-async";
import { Box, Button, Toolbar, Typography } from "@mui/material"


const Home = () => {
    return(
        <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Box component="main" sx={{ flexGrow: 1, p: 3, m: 2 }}>
        <Toolbar/>
        </Box>
        </>
    )
}

export default Home;