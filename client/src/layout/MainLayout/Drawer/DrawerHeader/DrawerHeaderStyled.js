// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: open ? 'flex-start' : 'center',
  paddingLeft: theme.spacing(open ? 1 : 0),
  paddingRight: theme.spacing(open ? 1 : 0),
  paddingTop: theme.spacing(open ? 3 : 0),
}));

export default DrawerHeaderStyled;
