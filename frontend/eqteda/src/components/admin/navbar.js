import React, {useState, useEffect} from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const signOut = async (event)=>{
    event.preventDefault()
    try{
      if(Cookies.get('access_token')){
        await axios.get('http://localhost:3008/signout',{withCredentials: true});
        Cookies.remove('access_token');
        navigate('/admin/signin')
      }else{
        navigate('/admin/signin')
      }
      
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <nav className="shadow">
        <div className="mx-4">
          <div className="grid grid-cols-5 py-4">
            <div>
              <img src="/img/logo-1.png" alt="" className="w-32" />
            </div>
            <div className="flex items-center justify-center col-start-5">
              <a
                className="font-medium text-sm text-slate-50 bg-emerald-500 ml-4 py-1 px-3 rounded-full cursor-pointer"
                onClick={signOut}
              >
                تسجيل خروج
              </a>
              <div className="flex items-center">
                <img
                  src="/img/ahmed.png"
                  alt=""
                  className="h-12 rounded-full"
                />
                <p className="text-xs font-bold mr-2"> أحمد السيد</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
