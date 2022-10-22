import { lazyLoad } from 'utils/loadable';
import Loader from 'components/Loader';

const PowerCostChart = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default PowerCostChart;
