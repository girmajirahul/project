import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function AdminLogin() {
   // const [values,setValues]=useState({email,password});
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:8081/users")
            .then((res)=>res.json())
            .then((data)=>setUsers(data))
            .catch((err)=>console.log(err));
    },[]);
    const handleLogin=(e)=>{
        e.preventDefault();
        const user=users.find((u)=>u.email==email);
        if(user){
            if(user.password===password){
                alert("login Successful");
                window.location.href="/admin/dasboard/";
            }
            else{
                alert("Incorrect password");
            }
        }else{
            alert("Login Failed");
        }
    }
  return (
    <div className='flex justify-center items-center min-h-screen ng-grey'>
      <div className="text-black font-bold  mb-6">
           <div className='bg-blue-200 h-10 text-center p-2'>
            <h3>Admin Login</h3>
           </div>
            <form action="post" onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <label htmlFor="email">Enter email</label>
                    <input type="text" name='email'
                        id='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        className='border border-gray-100 rounded-md p-2 focus:outline-cyan-600'
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Enter password</label>
                    <input type="password" name='password'
                        id='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        className='border border-gray-100 rounded-md p-2 focus:outline-cyan-600'
                    />
                </div>
                <div className="pt-4">
                    <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                    >Login</button>
                </div>
            </form>
      </div>
    </div>
  )
}
