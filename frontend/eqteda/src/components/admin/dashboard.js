import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Navbar from "./navbar";
import SideNav from "./sideNav";
import OrganizerTabs from "./organizerTabs";

const Dashboard = () => {
  const navigate = useNavigate()
  const isAuth = Cookies.get('access_token')
  useEffect(()=>{
    if(!isAuth){
      navigate('/admin/signin')
    }
  })
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 bg-emerald-500 h-screen ">
        <SideNav />
        <OrganizerTabs />
      </div>
    </div>
  );
};

export default Dashboard;
