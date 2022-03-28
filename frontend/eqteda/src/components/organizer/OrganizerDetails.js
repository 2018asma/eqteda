import { useState, useEffect } from "react";
import React, { useParams } from "react-router-dom";

import axios from "axios";

const Organizer = ({}) => {
  const [organizer, setOrganizer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data: organizer } = await axios.get(
        `http://localhost:3005/organizers/${id}`
      );
      await setOrganizer(organizer);
    };
    fetchData();
  }, []);

  return (
    <div key={organizer.id}>
      <p>{organizer.name}</p>
      <p>{organizer.description}</p>
        <img src={`http://localhost:3005/${organizer.image}`} height="150" />
        <a href="">انشاء</a>
    </div>
  );
};

export default Organizer;
