import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './styles/output.css'
import Dashboard from "./components/admin/dashboard";
import Organizers from "./components/organizer/OrganizerList";
import Organizer from "./components/organizer/OrganizerDetails";
import CreateOrganizer from "./components/admin/organizer/CreateOrganizer";
import UpdateOrganizer from "./components/admin/organizer/UpdateOrganizer";
import CreateProgram from "./components/program/CreateProgram";
import Signup from "./components/signup";
import Signin from "./components/admin/signin";
import Notfound from "./components/notfound";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard/>}>Dashboard</Route>
          <Route path="/organizers" element={<Organizers/>}/>
          <Route path="/admin/organizers/create" element={<CreateOrganizer/>}/>
          <Route path="/organizers/edit/:id" element={<UpdateOrganizer/>}/>
          <Route path="/organizers/:id" element={<Organizer/>}/>
          <Route path="/organizers/:id/programs/create" element={<CreateProgram/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/admin/signin" element={<Signin/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
