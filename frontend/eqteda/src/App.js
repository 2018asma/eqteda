import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, Stack, Switch } from "@mui/material";
import SideNav from "./components/admin/sideNav";
import Organizer from "./components/admin/organizer/Organizer";
import Navbar from "./components/admin/navbar";
import { useState } from "react";
import EditOrganizer from "./components/admin/organizer/EditOrganizer";
// import CreateOrganizer from "./components/admin/organizer/CreateOrganizer";
import OrganizersLis from "./components/admin/organizer/OrganizersList";
import OrganizersList from "./components/admin/organizer/OrganizersList";
import Signin from "./components/admin/Signin";
import DeleteOrganizer from "./components/admin/organizer/DeleteOrganizer";
function App() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = (status) => {
    setOpen(status);
  };
  return (
    <Router>
      <Box>
        <Navbar toggleSidebar={toggleSidebar} />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <SideNav openSidebar={open} toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/admin/organizers" element={<OrganizersList />} />
            <Route path="/admin/signin" element={<Signin />} />
          </Routes>
        </Stack>
      </Box>
    </Router>
  );
}

export default App;
