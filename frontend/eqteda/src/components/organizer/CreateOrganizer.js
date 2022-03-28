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
  const [errors, setErrors] =useState([])

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("telegram", telegram);
    data.append("twitter", twitter);
    data.append("youtube", youtube);
    data.append("instagram", instagram);
    data.append("image", selectedFile);


    axios
      .post("http://localhost:3005/organizers/create", data)
      .then((organizer) => {
        setOrganizer(organizer);
        navigate("/organizers")
      })
      .catch(err=>{
        setErrors(err.response.data);
      })
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <form onSubmit={handleSubmit}>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              انشاء
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                اسم المنظم
              </label>
              <input
                type="text"
                name="name"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={(event) => setName(event.target.value)}
              />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.name}</span>): ''}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                وصف المنظم
              </label>
              <input
                type="text"
                name="description"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                onChange={(event) => setDescription(event.target.value)}
              />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.description}</span>): ''}
            </div>

            <div className="grid grid-cols-2 gap-2 ">
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  تلجرام
                </label>
                <input
                  type="text"
                  name="telegram"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onChange={(event) => setTelegram(event.target.value)}
                />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.telegram}</span>): ''}
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  يوتيوب
                </label>
                <input
                  type="text"
                  name="youtube"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onChange={(event) => setYoutube(event.target.value)}
                />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.youtube}</span>): ''}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 ">
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  توتير
                </label>
                <input
                  type="text"
                  name="twitter"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onChange={(event) => setTwitter(event.target.value)}
                />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.twitter}</span>): ''}

              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold"
                >
                  انستجرام
                </label>
                <input
                  type="text"
                  name="instagram"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onChange={(event) => setInstagram(event.target.value)}
                />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.instagram}</span>): ''}

              </div>
            </div>

            <div>
              <input
                type="file"
                onChange={(event) => setSelectedFileFile(event.target.files[0])}
              />
              {errors? errors.map((err)=> <span className="text-rose-600 text-sm">{err.file}</span>): ''}

            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            إنشاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganizer;
