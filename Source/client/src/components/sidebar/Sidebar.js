import { useMediaQuery, Box, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import SidebarItems from './SidebarItems';

const Sidebar = (props) => {

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Box p={3}>
              <Link to='/'>
              <img src='/images/Logo.png' style={{ width: '100%' }}/>
              </Link>
            </Box>
            <Box>
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
