// project import
import SimpleBar from 'components/third-party/SimpleBar';
import {
  Accordion,
  Button,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { UseLoginSlice } from 'pages/Login/slice/index';
import { UseSignUpSlice } from 'pages/SignUp/slice/index';

const DrawerContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { actions } = UseLoginSlice();
  const { actions: signUpActions } = UseSignUpSlice();
  return (
    <SimpleBar
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <GridViewOutlinedIcon sx={{ mr: 4 }} /> Dash Board
      </Typography>
      <Accordion
        sx={{
          '& .MuiAccordion-gutters': {
            background: 'none',
            display: 'none',
          },
          '& .MuiAccordionSummary-gutters': {
            padding: '0',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <GridViewOutlinedIcon sx={{ mr: 4 }} /> Dash Board
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>

      <Typography sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => {
            dispatch(actions.logout());
            dispatch(signUpActions.logout());
            navigate('/');
          }}
        >
          <PowerSettingsNewOutlinedIcon sx={{ mr: 4 }} /> Log Out
        </Button>
      </Typography>
    </SimpleBar>
  );
};

export default DrawerContent;
