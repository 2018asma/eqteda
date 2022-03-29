import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const Organizers = () => {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: organizers } = await axios.get(
        "http://127.0.0.1:3008/organizers"
      );
      await setOrganizers(organizers);
      console.log(organizers)
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <Link to={"/organizers/create"}>Create</Link>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-4">
        {organizers.map((organizer) => {
          return (
            <div key={organizer.id} className="flex flex-col items-center justify-center text-center bg-gray-50 py-6 px-4 shadow-md rounded-2xl">

              <div>
                <Link to={`/organizers/${organizer.id}`}>
                  <img
                    src={`http://localhost:3005/${organizer.image}`}
                    className="h-24 w-24 rounded-full"
                  />
                </Link>
              </div>

              <div className="my-4">
                <p className="text-2xl pb-2">{organizer.name}</p>
                <p>{organizer.description}</p>
              </div>
          
              <div className="grid grid-cols-4 gap-2 text-white">
                {organizer.accounts.telegram ?<a href={organizer.accounts.telegram} className="bg-sky-500 px-2 py-1 rounded-full" target="_blank">تلجرام</a> :'' }
                  {organizer.accounts.youtube ?<a href={organizer.accounts.youtube} className="bg-sky-500 px-2 py-1 rounded-full" target="_blank">يوتيوب</a> :'' }
                 { organizer.accounts.twitter ?<a href={organizer.accounts.twitter} className="bg-sky-500 px-2 py-1 rounded-full" target="_blank">توتير</a> :'' }
                 { organizer.accounts.instagram ?<a href={organizer.accounts.instagram} className="bg-sky-500 px-2 py-1 rounded-full" target="_blank">انستاقرام</a> :'' }
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Organizers;
