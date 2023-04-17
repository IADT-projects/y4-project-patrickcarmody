import { Divider, Typography, Paper, ListItemButton, ListItemIcon, List, ListItem } from "@mui/material";
import { AccountBalanceWallet, Logout, MenuOutlined, PersonRounded, Settings } from "@mui/icons-material";

const UserMenu = () => {

    return(
        <Paper sx={{
            elevation: 0,
            width: "250px",
            border: "1px solid #ebebeb"
            }}
        >
            <List>
                <ListItem disablePadding sx={{ paddingY: "2px" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <PersonRounded/>
                        </ListItemIcon>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                color: "#36353b",
                                fontWeight: 'medium'
                            }}
                        >
                            Profile
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ paddingY: "2px" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuOutlined/>
                        </ListItemIcon>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                color: "#36353b",
                                fontWeight: 'medium'
                            }}
                        >
                            Campaigns
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ paddingY: "2px" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBalanceWallet/>
                        </ListItemIcon>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                color: "#36353b",
                                fontWeight: 'medium'
                            }}
                        >
                            Withdraw
                        </Typography>
                    </ListItemButton>
                </ListItem>

                <Divider sx={{ marginY: 1 }}/>

                <ListItem disablePadding sx={{ paddingY: "2px" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                color: "#36353b",
                                fontWeight: 'medium'
                            }}
                        >
                            Settings
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ paddingY: "2px" }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                color: "#36353b",
                                fontWeight: 'medium'
                            }}
                        >
                            Log out
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}

export default UserMenu;