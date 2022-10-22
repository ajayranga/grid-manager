import { lazyLoad } from 'utils/loadable';
import Loader from 'components/Loader';

const AlertTable = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default AlertTable;
