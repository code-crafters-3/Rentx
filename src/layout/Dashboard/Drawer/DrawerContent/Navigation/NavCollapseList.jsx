import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavCollapseList({ items }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {items.map((item) => {
            let itemTarget = '_self';
            if (item.target) {
              itemTarget = '_blank';
            }
            let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
            if (item?.external) {
              listItemProps = { component: 'a', href: item.url, target: itemTarget };
            }

            const Icon = item.icon;
            const itemIcon = item.icon ? <Icon style={{ fontSize: '1rem' }} /> : false;

            return (
              <ListItem disablePadding key={item.id}>
                <ListItemButton {...listItemProps}>
                  {itemIcon && (
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

export default NavCollapseList;

NavCollapseList.propTypes = {
  items: PropTypes.any
};
