import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";

const useStyles = makeStyles({
  active: {
    background: "blue",
    padding: "4rem",
  },
});

const SideNav = (props) => {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const itemsList = [
    {
      text: "زيارة الموقع",
      icon: <AccountTreeOutlinedIcon color="primary" />,
      path: "/",
      onclick: () => navigate("/"),
    },
    {
      text: "الرئيسية",
      icon: <HomeOutlinedIcon color="primary" />,
      path: "/admin/dashboard",
      onclick: () => navigate("/admin/dashboard"),
    },
    {
      text: "المنظمون",
      icon: <GroupOutlinedIcon color="primary" />,
      path: "/admin/organizers/create",
      onclick: () => navigate("/admin/organizers/create"),
    },
    {
      text: "البرامج",
      icon: <NoteAltOutlinedIcon color="primary" />,
      path: "/signup",
      onclick: () => console.log("/signup"),
    },
  ];

  return (
    <div>
      <Box>
        <Drawer  variant="permanent" anchor="right" sx={{'& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },}}>
            <Toolbar>
              <img src="/img/logo-1.png" alt="" width={110} />
            </Toolbar>
          <Divider />
          <List>
            {itemsList.map((item, index) => {
              const { text, icon, onclick, path } = item;
              return (
                <ListItem
                  button
                  key={text}
                  onClick={onclick}
                  className={location.pathname === path ? classes.active : ""}
                  style={{padding: "8px 16px"}}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} style={{textAlign: "right"}}/>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </div>
  );
};

export default SideNav;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const  SideNav = () => {
//   return (
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="right"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
    
//   );
// }

// export default SideNav;
