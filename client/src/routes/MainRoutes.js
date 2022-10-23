import DashBoard from 'pages/dashboard/loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard

const MainRoutes = {
  path: '/home',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <DashBoard />,
    },
  ],
};

export default MainRoutes;
