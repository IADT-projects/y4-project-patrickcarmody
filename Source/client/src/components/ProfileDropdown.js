import { AccountBalanceWallet, Logout, MenuOutlined, PermDataSetting, Person, Settings } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { React, useState } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from "../context/UserContext";


const ProfileDropdown = (userData) => {
    const {setUserData, setIsAuthenticated} = useContext(UserContext);
    const user = userData.userData
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };

    console.log(user.image);
    if(!user.image) {
        console.log("no image");
    }

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
                { user.image ? (
                <Avatar
                    src={'https://res.cloudinary.com/dzooewr3a/image/upload/v1680787491/profile-temp_cpgaam.png'}
                    sx={{
                        width: 35,
                        height: 35
                    }}
                />
                ) : (
                <Avatar
                    sx={{ width: 35, height: 35, bgcolor: [500]}}
                >
                    {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                </Avatar>
                )}
                

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
                <MenuItem component={Link} to={`/users/${user.address}`}>
                    <ListItemIcon>
                        <Person width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Profile</ListItemText>
                    </ListItemIcon>
                </MenuItem>
                <MenuItem component={Link} to='/dashboard'>
                    <ListItemIcon >
                        <PermDataSetting width={20}/>
                        <ListItemText sx={{ paddingX: 2, color: '#36353b' }}>Dashboard</ListItemText>
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