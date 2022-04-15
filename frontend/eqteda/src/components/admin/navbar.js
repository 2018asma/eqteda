import React, {useState, useEffect} from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { AppBar, Avatar, Box, Toolbar, Search, SearchIcon, SearchIconWrapper, Styled, StyledInputBase, TextField } from "@mui/material";

const Navbar = () => {
  const drawerWidth = 240
  const navigate = useNavigate()
  const signOut = async (event)=>{
    event.preventDefault()
    try{
      if(Cookies.get('access_token')){
        await axios.get('http://localhost:3008/signout',{withCredentials: true});
        Cookies.remove('access_token');
        navigate('/admin/signin')
      }else{
        navigate('/admin/signin')
      }
      
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Box>
      <AppBar  position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}>
        <Toolbar >
          <Avatar src="/img/ahmed.png"/>
          <Box>
            <TextField/>

          </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


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

// export default function Navbar() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* <CssBaseline /> */}
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Permanent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
