import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateOrganizer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFileFile] = useState(null);


  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append('image', selectedFile)

    console.log(data)
    

    const updating = await axios.put(
      `http://localhost:3005/organizers/edit/${id}`,
      data
    );
    console.log(updating);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(event) => setSelectedFileFile(event.target.files[0])}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default UpdateOrganizer;
