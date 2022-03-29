import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ()=>{
    const [username, setUsername] = useState('') 
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append("username", username);
        data.append("email", email);
        data.append('password', password)
    
        axios
          .post("http://localhost:3008/signup", data)
          .then((user) => {
            console.log(user)
            navigate("/signin")
          })
          .catch(err=>{
            console.log('Error', err)
          })
      };

    return(
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
            <input className="border border-cyan-800" type="text" name="username" onChange={(e)=> setUsername(e.target.value)} placeholder="usernamw"/>
            <input className="border border-cyan-800" type="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="email"/>
            <input className="border border-cyan-800" type="password" name="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
            <button type="submit">signup</button>
        </form>
    )
}

export default Signup;