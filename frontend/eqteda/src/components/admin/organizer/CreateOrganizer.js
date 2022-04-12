import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CreateOrganizer = () => {
  let navigate = useNavigate();

  const [selectedFile, setSelectedFileFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [organizer, setOrganizer] = useState({}); // Need it Or No ?
  const [errors, setErrors] = useState([]);

  const createOrganizer = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3008/admin/organizers/create",
        data,
        { withCredentials: true }
      );
      navigate("/organizers");
    } catch (err) {
      console.log(err);
    }
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("image", selectedFile);
    createOrganizer(data);
  };

  return (
    <div className="flex justify-center justify-items-center ">
      <div className="bg-white py-8 px-4 shadow-md">
        <h2 className="text-center font-extrabold text-xl mb-6 text-emerald-500">
          إضافة منظم
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label htmlFor="" className="text-base">
              {" "}
              اسم المنظم
            </label>
            <input
              name="name"
              type="text"
              className="mt-1.5 border-b-2 border-gray-300 w-96 py-2 focus:border-emerald-500 focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="" className="text-base">
              وصف المنظم
            </label>
            <textarea
              name="description"
              type="text"
              rows={2}
              className=" mt-1.5 w-96 border-b-2 border-gray-300  focus:border-emerald-500 focus:outline-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="" className="text-base">
              صورة المنظم
            </label>
            <input
              type="file"
              className="mt-1.5"
              name="image"
              onChange={(e) => setSelectedFileFile(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-gray-500 hover:bg-emerald-500 hover:text-white w-96 py-2"
          >
            حفظ
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrganizer;
