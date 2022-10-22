// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Meta from 'components/Meta/index';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = (text = 'sample page') => (
  <MainCard title="Sample Card">
    <Meta title={text} />
    <Typography variant="body2">text</Typography>
  </MainCard>
);

export default SamplePage;
