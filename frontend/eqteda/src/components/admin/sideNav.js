import { useNavigate } from "react-router-dom";
import { Home, Inbox, NoteAlt, People } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import { navBarItems } from "./const/navBarItems";
const SideNav = ({ openSidebar, toggleSidebar }) => {
  const navigate = useNavigate()
  const CustomDrawer = styled(Drawer)(({ theme }) => ({
    "& 	.MuiPaper-root": {
      backgroundColor: "#ddd",
      width: "281.602px",
      [theme.breakpoints.up("xs")]: {
        top: "64px",
      },
      [theme.breakpoints.down("sm")]: {
        top: "56px",
      },
    },
  }));

  return (
    <Box bgcolor="green" flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      {/* Large screen */}
      <CustomDrawer open={openSidebar} anchor="right" variant="permanent">
        <List>
          {navBarItems.map((item) => {
            const { text, icon, path } = item;
            return (
              <ListItem component="a" onClick={()=>navigate(path)} key={path}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ textAlign: "right" }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </CustomDrawer>
      {/* Small screen */}
      <CustomDrawer
        open={openSidebar}
        onClose={() => toggleSidebar(false)}
        onOpen={() => toggleSidebar(true)}
        anchor="right"
        variant="temporary"
      >
        <List>
          {navBarItems.map((item) => {
            const { text, icon, path } = item;
            return (
              <ListItem key={path} component="a" onClick={()=>{
                toggleSidebar(false)
                navigate(path);
                }}>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} sx={{ textAlign: "right" }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </CustomDrawer>
    </Box>
  );
};

export default SideNav;
