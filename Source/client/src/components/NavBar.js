import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from '@mui/icons-material';

const NavBar = ({ darkMode, handleDarkModeToggle, }) => {

    return(
        <AppBar color="transparent" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                </Typography>
                <Box>
                    <IconButton color="inherit" onClick={handleDarkModeToggle}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    <Button variant="contained">CONNECT WALLET</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;