// assets
import { CalendarOutlined } from '@ant-design/icons';

// icons
const icons = {
  CalendarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const calendar = {
  id: 'group-calendar',
  title: 'Calendário',
  type: 'group',
  children: [
    {
      id: 'calendar',
      title: 'Calendário',
      type: 'item',
      url: '/calendar',
      icon: icons.CalendarOutlined,
      breadcrumbs: false
    }
  ]
};

export default calendar;
