import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import CreateAlert from './features/CreateAlert/loadable';
import AlertTable from './features/AlertsTable/loadable';
import PowerCostChart from './features/PowerCostChart/loadable';
import { selectSuccess } from 'pages/Login/slice/selectors';
import { selectUserName } from 'pages/SignUp/slice/selectors';
import Meta from 'components/Meta/index';

const DashboardDefault = () => {
  const [slot, setSlot] = useState('week');
  const navigate = useNavigate();
  const successLogIn = useSelector(selectSuccess);
  const successSignUp = useSelector(selectUserName);

  useEffect(() => {
    if (!successLogIn && !successSignUp) navigate('/');
  }, [successLogIn, successSignUp, navigate]);

  return (
    <Fragment>
      <Meta title='Dashboard page' />
      <Grid container rowSpacing={1.5} columnSpacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Typography variant='h5'>Power Cost</Typography>
            </Grid>
            <Grid item>
              <Stack direction='row' alignItems='center' spacing={0}>
                <Button
                  size='small'
                  onClick={() => setSlot('month')}
                  color={slot === 'month' ? 'primary' : 'secondary'}
                  variant={slot === 'month' ? 'outlined' : 'text'}
                >
                  Month
                </Button>
                <Button
                  size='small'
                  onClick={() => setSlot('week')}
                  color={slot === 'week' ? 'primary' : 'secondary'}
                  variant={slot === 'week' ? 'outlined' : 'text'}
                >
                  Week
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <PowerCostChart slot={slot} />
            </Box>
          </MainCard>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <CreateAlert />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <AlertTable />
          </MainCard>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashboardDefault;
