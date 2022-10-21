import { lazyLoad } from 'utils/loadable';
import Loader from 'app/components/Loader';

const Login = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Login;
