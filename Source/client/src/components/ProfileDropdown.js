import { AccountBalanceWallet, Logout, MenuOutlined, Person, Settings } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { React, useState } from "react";


const ProfileDropdown = () => {
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };

    return(
        <Box>
            <IconButton
                size="large"
                color="inherit"
                aria-controls="profile"
                aria-haspopup='true'
                sx={{
                    ...(typeof anchorE12 === 'object' && {
                        color: 'primary.main',
                    }),
                }}
                onClick={handleClick2}
            >
                <Avatar
                    src={'https://res.cloudinary.com/dzooewr3a/image/upload/v1680787491/stephanie_vmzgn2.png'}
                    sx={{
                        width: 35,
                        height: 35
                    }}
                />
            </IconButton>
           <Menu
                id="profile-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                sx={{
                    '& .MuiMenu-paper': {
                      width: '250px',
                    },
                  }}
           >
                <MenuItem>
                    <ListItemIcon>
                        <Person width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Profile</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <MenuOutlined width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Campaigns</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AccountBalanceWallet width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Withdraw</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <Settings/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Settings</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Log out</ListItemText>
                    </ListItemIcon>
                </MenuItem>
            </Menu>
        </Box>
    )
    
}

export default ProfileDropdown;