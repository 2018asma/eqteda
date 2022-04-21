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
  Button,
} from "@mui/material";
import { Inbox as InboxIcon, Mail as MailIcon, AccountTreeOutlined, HomeOutlined,GroupOutlined, NoteAltOutlined } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { navBarItems } from "./const/navBarItems";

const MaterialUi = () => {
  const navigate = useNavigate()
  const drawerWidth = 240;
 
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: '#0D8F75',
          color: '#000'
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <Divider />
      <List>
        {navBarItems.map((item, index) => {
          const { text, icon, path } = item
          return (
            <ListItem button key={text} onClick={(e)=>navigate(path)}>
              <ListItemIcon sx={{color: '#000'}}>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} style={{textAlign: 'right'}} primaryTypographyProps={{fontSize: '16px'}}  />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MaterialUi;
