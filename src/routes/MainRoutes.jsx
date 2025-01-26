import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const CalendarDefault = Loadable(lazy(() => import('pages/calendar/index')));

const VehiclePage = Loadable(lazy(() => import('pages/vehicle/create/createVehicle.jsx')));
const CreateClient = Loadable(lazy(() => import('pages/client/create/createClient.tsx')));
const ListVehiclePage = Loadable(lazy(() => import('pages/vehicle/list/listVehicle')));
const VehicleDetails = Loadable(lazy(() => import('pages/vehicle/details/index.jsx')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'calendar',
      element: <CalendarDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'client/create',
      element: <CreateClient />
    },
    {
      path: 'vehicle/create',
      element: <VehiclePage />
    },
    {
      path: 'vehicle/list',
      element: <ListVehiclePage />
    },
    {
      path: 'vehicle/details/:id',
      element: <VehicleDetails />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
