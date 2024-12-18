// assets
import { DashboardOutlined, CarOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  CarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'vehicle',
      title: 'Veículo',
      type: 'collapse',
      url: '/dashboard/default',
      icon: icons.CarOutlined,
      breadcrumbs: false,
      subItems: [
        {
          id: 'vehicle_create',
          title: 'Novo veículo',
          type: 'item',
          url: '/vehicle/create',
          icon: icons.CarOutlined,
          breadcrumbs: false
        },
        {
          id: 'vehicle_list',
          title: 'Meus veículos',
          type: 'item',
          url: '/vehicle/create',
          icon: icons.CarOutlined,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboard;
