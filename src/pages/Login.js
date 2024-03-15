import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    email:'',
    password:'',
  })

  const loginUser = async(e) => {
    e.preventDefault();
    const {email,password} = data
    try{
      const {data} = await axios.post('/login',{
        email,
        password
      })
      
      if(data.error){
        toast.error(data.error);
      }
      else{
        setData({});
        toast.success('Succefully Login to Home Page')
        navigate('/');
      }
    }
    catch(error){
    console.log(error);
    }
  }

  return (
    <>
      <div className="login-form">
        <form onSubmit={loginUser}>
          <h1 className="login-title">Login</h1>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email Id" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data,password:e.target.value})} required />
          </div>
          <button type="submit" className="btn btn-dark text-center">SIGN IN</button>
        </form>
      </div>

    </>
  )
}
