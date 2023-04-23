import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { MenuOutlined }  from '@mui/icons-material';
import { Web3Button } from '@web3modal/react';
import ProfileDropdown from './users/ProfileDropdown';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { isAuthenticated, userData } = useContext(UserContext);
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

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
        <Web3Button/>
          {isAuthenticated ? (
            <ProfileDropdown userData={userData}/>
          ) : (
            <Button 
              variant="contained" 
              color="primary"
              LinkComponent={Link}
              to='/login'
            >
              Log In
            </Button>
          ) }
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;