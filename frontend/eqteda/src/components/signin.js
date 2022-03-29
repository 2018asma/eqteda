import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    axios
      .post("http://localhost:3008/signin", data)
      .then((res) => {
        console.log(res);
        navigate("/organizers/create");
      })
      .catch((err) => {
        const unauthorized = err.response.status == 401;
        if (unauthorized) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input
        className="border border-cyan-800"
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        className="border border-cyan-800"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">signup</button>
    </form>
  );
};

export default Signin;
