import Login from 'pages/Login/loadable';
import SignUp from 'pages/SignUP/loadable';

// project import
import MinimalLayout from 'layout/MinimalLayout';

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
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
