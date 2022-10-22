import { lazyLoad } from 'utils/loadable';
import Loader from 'app/components/Loader';

const SideNavbar = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default SideNavbar;
