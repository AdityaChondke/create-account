import { lazy } from 'react';

// project imports
// import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

const VerificationPage = Loadable(lazy(() => import('views/pages/authentication/auth-forms/VerificationPage')));
const PersonalDetails = Loadable(lazy(() => import('views/pages/authentication/auth-forms/PersonalDetails')));
const Completed = Loadable(lazy(() => import('views/pages/authentication/auth-forms/Completed')));
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

const MainRoutes = {
  children: [
    {
      path: '/',
      element: <AuthLogin3/>,
    },
    {
      path: 'personal-details',
      element: <PersonalDetails/>,
    },
    {
      path: 'verification-page',
      element: <VerificationPage/>,
    },
    {
      path: 'completed',
      element: <Completed/>,
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    }
  ]
};

export default MainRoutes;
