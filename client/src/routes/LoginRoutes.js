import Login from 'pages/Login/loadable';
import SignUp from 'pages/SignUp/loadable';

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
  ],
};

export default LoginRoutes;
