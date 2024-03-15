import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    name: '',
    age: '',
    phone:'',
    email:'',
    address:'',
    password:'',
  })
  const registerUser = async(e) =>{
    e.preventDefault();
    const {name, age, phone, email, address, password} = data
  
    try{
      const {data} = await axios.post('/register',{
        name,age,phone,email,address,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Successfully Registered.')
        navigate('/login');
      }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <div className="register">
      <h1 className="title">Register Now</h1>
      <div className="form">
        <form onSubmit={registerUser}>
          <input className="set-input" type="text" placeholder="User Name" value={data.name} onChange={(e) => setData({...data,name:e.target.value})} required />
          <input className="set-input" type="number" placeholder="Enter Your Age" value={data.age} onChange={(e) => setData({...data,age:e.target.value})} required />
          <input className="set-input" type="tel" pattern="[0-9]{10}" placeholder="Enter Phone number" value={data.phone} onChange={(e) => setData({...data,phone:e.target.value})} required />
          <input className="set-input" type="email" placeholder="Enter Email Id" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} required />
          <input className="set-input" type="text" placeholder="Enter Address" value={data.address} onChange={(e) => setData({...data,address:e.target.value})} required />
          <input className="set-input" type="password"  pattern=".{6,}" value={data.password} onChange={(e) => setData({...data,password:e.target.value})} placeholder="Password (atleast 6 digits)" required />
          <button className=" btn" type="submit">SIGN UP</button>
        </form>
      </div>
    </div>


    </>
  )
}
