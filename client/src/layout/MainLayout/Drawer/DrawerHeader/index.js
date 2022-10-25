import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo2 from 'assets/images/icons/Logo2.png';

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
        sx={{ position: 'relative' }}
      >
        <img
          src={Logo2}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
          alt='GRID MANAGER 2.0'
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
