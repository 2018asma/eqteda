import React from "react";
import { useNavigate } from 'react-router-dom'
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox as InboxIcon, Mail as MailIcon, AccountTreeOutlined, HomeOutlined,GroupOutlined, NoteAltOutlined } from "@mui/icons-material";

const MaterialUi = () => {
  const navigate = useNavigate()
  const drawerWidth = 240;
  const itemsList = [
    {
      text: "زيارة الموقع",
      icon: <AccountTreeOutlined />,
      path: "/",
    },
    {
      text: "الرئيسية",
      icon: <HomeOutlined />,
      path: "/admin/dashboard",
    },
    {
      text: "المنظمون",
      icon: <GroupOutlined />,
      path: "/admin/organizers/create",
    },
    {
      text: "البرامج",
      icon: <NoteAltOutlined  />,
      path: "/signup",
    },
  ];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: '#064e3b',
          color: '#f8fafc'
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Divider />
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, path } = item
          return (
            <ListItem button key={text} onClick={(e)=>navigate(path)}>
              <ListItemIcon sx={{color: '#f8fafc'}}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} style={{textAlign: 'right'}}/>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MaterialUi;
