import * as React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Add, Article, Apartment, Info, Person, FormatListBulleted } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Logo = require('../assets/placeholder-logo.png');
const drawerWidth = 260;

function SideBar() {
  
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <img src={String(Logo)} alt=''/>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem>
              <Typography variant='h6'>CAMPAIGNS</Typography> 
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to='/'>
                <ListItemIcon>
                  <FormatListBulleted/>
                </ListItemIcon>
                <ListItemText primary="All Campaigns" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Individual Campaigns" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Apartment/>
                </ListItemIcon>
                <ListItemText primary="Charity Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Add/>
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItemButton>
            </ListItem>
            <Divider variant='middle'/>
            <ListItem>
              <Typography variant='h6'>ABOUT</Typography> 
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Info/>
                </ListItemIcon>
                <ListItemText primary="How to use" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Article/>
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <Divider variant='middle'/>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBar;
