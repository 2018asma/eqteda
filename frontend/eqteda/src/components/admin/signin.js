import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const isAuth = Cookies.get('access_token')

  // if user loggedin direct him to dashboard
  useEffect(()=>{
    if(isAuth){
      navigate('/admin/dashboard')
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    axios
      .post("http://localhost:3008/signin", data, {
        withCredentials: true, 
      })
      .then((res) => {
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        setError(err.response.data)
        navigate("/admin/signin");
      });
      
  };

  return (
    <div className="h-screen bg-emerald-500">
      <div className="grid grid-cols-3 h-full items-center">
        <div className="col-start-2 col-end-3 bg-white rounded p-6 shadow-md">
          <h2 className="text-emerald-500 font-extrabold text-center text-xl pt-6 pb-3">
            تسجيل الدخول
          </h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-3">
              <label htmlFor="email">البريد الالكتروني</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-gray-100 py-2 border focus:border-emerald-500  focus:outline-none mt-2 rounded px-4"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <label htmlFor="password">كلمة المرور</label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full bg-gray-100 py-2 border focus:border-emerald-500  focus:outline-none mt-2 rounded px-4"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error ? <p className="mt-3 py-2 rounded bg-red-50 px-4 border border-red-300 text-sm">{error}</p>: ''}
            <button
              type="submit"
              className="bg-emerald-400 hover:bg-emerald-500 text-white py-2 px-6 mt-3 rounded mb-6"
            >
              الدخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
