import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// import './styles/output.css'
import Organizers from "./components/organizer/OrganizerList";
import Organizer from "./components/organizer/OrganizerDetails";
import CreateOrganizer from "./components/organizer/CreateOrganizer";
import UpdateOrganizer from "./components/organizer/UpdateOrganizer";



function App() {

  // const [organizers, setOrganizers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data: organizers } = await axios.get("http://127.0.0.1:3005/organizers");
  //     await setOrganizers(organizers);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/organizers" element={<Organizers/>}/>
          <Route path="/organizers/create" element={<CreateOrganizer/>}/>
          <Route path="/organizers/edit/:id" element={<UpdateOrganizer/>}/>
          <Route path="/organizers/:id" element={<Organizer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
