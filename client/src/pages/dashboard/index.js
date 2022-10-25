import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Box, Grid, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import CreateAlert from './features/CreateAlert/loadable';
import AlertTable from './features/AlertsTable/loadable';
import PowerCostChart from './features/PowerCostChart/loadable';
import { selectSuccess } from 'pages/Login/slice/selectors';
import { selectUserName } from 'pages/SignUp/slice/selectors';
import Meta from 'components/Meta/index';

const DashboardDefault = () => {
  const navigate = useNavigate();
  const successLogIn = useSelector(selectSuccess);
  const successSignUp = useSelector(selectUserName);

  useEffect(() => {
    if (!successLogIn && !successSignUp) navigate('/');
  }, [successLogIn, successSignUp, navigate]);

  return (
    <Fragment>
      <Meta title='Dashboard Page' />
      <Grid container rowSpacing={0} columnSpacing={1.5}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant='h3' sx={{ mb: 3 }}>
            Peak Shaving and alert
          </Typography>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <PowerCostChart />
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
