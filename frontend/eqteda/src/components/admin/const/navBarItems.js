import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";

export const navBarItems = [
  {
    text: "زيارة الموقع",
    icon: <AccountTreeOutlinedIcon/>,
    path: "/",
  },
  {
    text: "الرئيسية",
    icon: <HomeOutlinedIcon/>,
    path: "/admin/dashboard",
  },
  {
    text: "المنظمون",
    icon: <GroupOutlinedIcon/>,
    path: "/admin/organizers",
  },
  {
    text: "البرامج",
    icon: <NoteAltOutlinedIcon/>,
    path: "/signup",
  },
];
