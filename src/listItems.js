import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListIcon from '@material-ui/icons/List';
import {Link} from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/Itemtype">
      <ListItemIcon>
        <ListIcon/>
      </ListItemIcon>
      <ListItemText primary="Item Type" />
    </ListItem>
    <ListItem button component={Link} to="/Stores">
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Stores" />
    </ListItem>
    <ListItem button component={Link} to="/Stock">
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Stock" />
    </ListItem>
    
  </div>
);

/*export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);*/