import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { Grid } from "@mui/material";

import Navbar from "./navbar";
import SideNav from "./sideNav";
import OrganizerTabs from "./organizerTabs";

const Dashboard = () => {
  const navigate = useNavigate();
  const isAuth = Cookies.get("access_token");
  useEffect(() => {
    if (!isAuth) {
      navigate("/admin/signin");
    }
  });
  return (
    <div>
      <Grid container >
        <Grid item xs={2}>
          <SideNav/>
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <OrganizerTabs />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Dashboard;
