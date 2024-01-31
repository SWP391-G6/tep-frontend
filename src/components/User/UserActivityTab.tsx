import React, { useState } from 'react';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApartmentIcon from '@mui/icons-material/Apartment';

const UserActivityTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (

    <List component="nav" aria-label="main mailbox folders"
      sx={{
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)'
      }}>
      {/* USER POSTING */}
      <Link to="/account/posting" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton sx={{ width: '100%' }}
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ContactsIcon fontSize='large' sx={{color:'black'}}/>
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="My Posting" />
        </ListItemButton>
      </Link>
      {/* USER PROFILE */}
      <Divider />
      <Link to="/account/profile" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ApartmentIcon fontSize='large' sx={{color:'black'}}/>
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="My Profile" />
        </ListItemButton>
      </Link>
      {/* USER REQUEST */}
      <Divider />
      <Link to="/account/request" style={{ textDecoration: 'none', color: 'black' }}>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <DisplaySettingsIcon fontSize='large' sx={{color:'black'}}/>
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="My Request" />
        </ListItemButton>
      </Link>
    </List>

  );
};

export default UserActivityTab;