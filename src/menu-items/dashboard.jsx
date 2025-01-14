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
      url: '/vehicle/list',
      icon: icons.CarOutlined,
      breadcrumbs: true,
      children: [
        {
          id: 'vehicle_create',
          title: 'Novo veículo',
          type: 'item',
          url: '/vehicle/create',
          icon: icons.CarOutlined,
          breadcrumbs: true
        },
        {
          id: 'vehicle_list',
          title: 'Meus veículos',
          type: 'item',
          url: '/vehicle/list',
          icon: icons.CarOutlined,
          breadcrumbs: true
        },
        {
          id: 'vehicle_details',
          title: 'detelhes',
          type: 'item',
          url: '/vehicle/details/1',
          icon: icons.CarOutlined,
          breadcrumbs: true
        }
      ]
    }
  ]
};

export default dashboard;
