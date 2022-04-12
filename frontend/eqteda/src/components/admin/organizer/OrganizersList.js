import React, { useState, useEffect } from "react";
import axios from "axios";
import EditOrganizer from "./EditOrganizer";

const OrganizersList = () => {
  const [organizers, setOrganizers] = useState([]);
  const [organizerId, setOrganizerId] = useState("");
  const [editModel, setEditModel] = useState("hidden");

  //Get Organizers
  useEffect(() => {
    const getOrganizers = async () => {
      const { data } = await axios.get("http://localhost:3008/organizers/");
      setOrganizers(data);
    };
    getOrganizers();
  }, []);

  // Delete Organizer
  const deleteOrganizer = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3008/admin/organizers/destroy/${id}`,
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const hideElemnt = (e)=>{
    e.preventDefault()
    setEditModel('hidden')
  }


  return (
    <div>
      <div className="grid grid-cols-12">
        {editModel == 'block'? <EditOrganizer hideElemnt={hideElemnt}/> : ''}
        {organizers.map((organizer) => {
          return (
            <div
              key={organizer.id}
              className="grid grid-cols-12 items-center justify-center col-start-2 col-end-12 border-b border-gray-200 pb-2 mb-5"
            >
              <div className="">
                <img
                  src={`http://localhost:3008/${organizer.image}`}
                  alt=""
                  className="rounded-full h-12"
                />
              </div>
              <div className="col-span-2">
                <p className="text-xs ml-6 font-bold">{organizer.name}</p>
              </div>
              <div className="col-start-4 col-end-11 flex">
                <p className="text-xs">{organizer.description}</p>
              </div>
              <div>
                <a
                  href=""
                  className="bg-emerald-200  hover:bg-emerald-400 hover:text-white  text-black py-1 px-6 rounded-full text-xs m-1"
                  onClick={(e) => {
                    e.preventDefault()
                    setEditModel("block");
                  }}
                >
                  تعديل
                </a>
                <a
                  href=""
                  className="bg-red-200 hover:bg-red-400 hover:text-white text-black py-1 px-6 rounded-full text-xs m-1"
                  onClick={(e) => deleteOrganizer(organizer.id)}
                >
                  حذف
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrganizersList;
