// assets
import { DashboardOutlined, CarOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  CarOutlined,
  UserOutlined
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
      id: 'client',
      title: 'Cliente',
      type: 'collapse',
      url: '/client/list',
      icon: icons.UserOutlined,
      breadcrumbs: true,
      children: [
        {
          id: 'client_create',
          title: 'Novo cliente',
          type: 'item',
          url: '/client/create',
          icon: icons.UserOutlined,
          breadcrumbs: true
        },
        {
          id: 'client_list',
          title: 'Meus clientes',
          type: 'item',
          url: '/client/list',
          icon: icons.UserOutlined,
          breadcrumbs: true
        },
        {
          id: 'client_details',
          title: 'detelhes',
          type: 'item',
          url: '/client/details/1',
          icon: icons.UserOutlined,
          breadcrumbs: true
        }
      ]
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
