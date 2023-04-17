import React, { useState } from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Button, Popover } from '@mui/material';
import PropTypes from 'prop-types';
import {MenuOutlined}  from '@mui/icons-material';
import { Web3Button } from '@web3modal/react';
import UserMenu from './UserMenu';

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <MenuOutlined width="20" height="20" />
        </IconButton>

        <IconButton
          size="large"
          aria-label="show 11 new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
          // sx={{
          //   ...(typeof anchorEl2 === 'object' && {
          //     color: 'primary.main',
          //   }),
          // }}
        >
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="contained" color="primary"  target="_blank">
            Log In
          </Button>
          <Button
            variant="outlined" 
            color="primary"  
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
              Menu
          </Button>
          <Popover
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorReference="anchorPosition"
            anchorPosition={(anchorEl && anchorEl.getBoundingClientRect().bottom) ? 
              {
                top: anchorEl.getBoundingClientRect().bottom + 2,
                right: window.innerWidth - anchorEl.getBoundingClientRect().right - 30,
              } : undefined}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              marginTop: '8px',
              marginRight: '16px',
            }}
          >
            <UserMenu />
          </Popover>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
