import { useState } from 'react';

import { matchPath, useLocation } from 'react-router';

import PropTypes from 'prop-types';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { List } from '@mui/material';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

import NavItem from './NavItem';
import HoverTooltip from '../../../../../components/HoverTooltip';
import NavCollapseList from './NavCollapseList';

import { useGetMenuMaster } from 'api/menu';
import { useTheme } from '@emotion/react';
import { useSettingsStore } from '../../../../../zustand/settings';

export default function NavCollapse({ item, level }) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const { menuMaster } = useGetMenuMaster();

  const { drawerMode } = useSettingsStore();

  const drawerOpen = drawerMode === 'default';

  const openItem = menuMaster.openedItem;

  const { pathname } = useLocation();
  const isSelected = !!matchPath({ path: item.url, end: false }, pathname) || openItem === item.id;

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  return (
    <>
      <HoverTooltip disabled={drawerOpen} content={<NavCollapseList items={item.children} />}>
        <ListItemButton
          sx={{
            zIndex: 1201,
            pl: drawerOpen ? `${level * 28}px` : 1.5,
            py: !drawerOpen && level === 1 ? 1.25 : 1,
            ...(drawerOpen && {
              '&:hover': {
                bgcolor: 'primary.lighter'
              },
              '&.Mui-selected': {
                bgcolor: 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'primary.lighter'
                }
              }
            }),
            ...(!drawerOpen && {
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            })
          }}
          onClick={() => {
            console.log('on click');
            setOpen((value) => !value);
          }}
        >
          {itemIcon && (
            <ListItemIcon
              sx={{
                minWidth: 28,
                color: isSelected ? iconSelectedColor : textColor,
                ...(!drawerOpen && {
                  borderRadius: 1.5,
                  width: 36,
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: 'secondary.lighter'
                  }
                }),
                ...(!drawerOpen &&
                  isSelected && {
                    bgcolor: 'primary.lighter',
                    '&:hover': {
                      bgcolor: 'primary.lighter'
                    }
                  })
              }}
            >
              {itemIcon}
            </ListItemIcon>
          )}
          {drawerOpen && (
            <>
              <ListItemText primary={item.title} />
              {open ? <UpOutlined size={5} /> : <DownOutlined />}
            </>
          )}
        </ListItemButton>
      </HoverTooltip>

      <Collapse in={drawerOpen && open} timeout="auto" unmountOnExit placement="right-start">
        <List>
          {item.children.map((subItem) => (
            <NavItem key={subItem.id} item={subItem} level={level + 1} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

NavCollapse.propTypes = { item: PropTypes.object, level: PropTypes.number };
