import {
  AppBar,
  Avatar,
  Box,
  Button,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Logout, Widgets } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const AdminBox = styled(Box)(({ them }) => ({
  display: "flex",
  gap: "8px",
  alignItems: "center",
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  "& > span": {
    marginLeft: "8px",
    marginRight: "-2px",
  },
}));

const LogoutMenu = styled(Menu)(({ theme }) => ({
  top: "39px",
  "& .MuiMenu-list": {
    padding: "0",
  },
}));

const Navbar = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* Large */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img src="/img/eqteda.png" width="100px" alt="" />
        </Box>
        <Widgets
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => toggleSidebar(true)}
        />
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="search..." />
        </Search>
        {/* Small */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <img src="/img/eqteda.png" width="100px" alt="" />
        </Box>
        {/* Large Screens */}
        <AdminBox sx={{ display: { xs: "none", sm: "flex" } }}>
          <LogoutButton
            color="error"
            size="small"
            variant="contained"
            startIcon={<Logout fontSize="small" />}
          >
            تسجيل خروج
          </LogoutButton>
          <Avatar src="/img/ahmed.png" onClick={() => toggleSidebar(false)} />
          <Typography variant="span">أحمد السيد</Typography>
        </AdminBox>

        {/* Small screens */}
        <AdminBox
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={() => setOpen(true)}
        >
          <Avatar src="/img/ahmed.png" />
          <Typography variant="span">أحمد السيد</Typography>
        </AdminBox>
      </StyledToolbar>
      <LogoutMenu
        sx={{ display: { xs: "block", sm: "none" } }}
        id="basic-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
        }}
        transformOrigin={{
          vertical: "top",
        }}
      >
        <MenuItem>
          <Logout fontSize="small" sx={{ ml: "8px" }} />
          تسجيل خروج
        </MenuItem>
      </LogoutMenu>
    </AppBar>
  );
};

export default Navbar;
