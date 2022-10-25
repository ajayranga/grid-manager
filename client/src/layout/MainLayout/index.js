import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';

import Drawer from './Drawer';

// types
import { selectDrawerOpen, UseMenuSlice } from 'store/menu';
import Header from './Header/index';

const MainLayout = () => {
  const theme = useTheme();
  const { actions } = UseMenuSlice();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector(selectDrawerOpen);

  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(actions.openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(actions.openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component='main'
        sx={{
          width: '100%',
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: `${matchDownLG ? '60px' : 0}`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
