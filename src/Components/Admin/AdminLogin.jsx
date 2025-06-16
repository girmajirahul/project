import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Alert from '../Alert';
export default function AdminLogin() {
   // const [values,setValues]=useState({email,password});
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [users,setUsers]=useState([]);
    const [alert ,setAlert]=useState({message:'',type:''})
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
                setAlert({ message: "Login SucessFully !", type: "success" })
                localStorage.setItem("adminUser",JSON.stringify(user.name))
                window.location.href="/admin/dasboard/";
            }
            else{
                setAlert({ message: "Incorrect password ", type: "error" })

            }
        }else{
            setAlert({ message: "Login Failed !", type: "error" })
        }
    }

    useEffect(() => {
        if (alert.message) {
          const timer = setTimeout(() => setAlert({ message: '', type: '' }), 5000);
          return () => clearTimeout(timer);
        }
      }, [alert]);
  return (
    <div className=' flex justify-center items-center min-h-screen ng-grey'>
        {alert.message && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
        />
      )}
      <div className="text-black font-bold  mb-5 h-[100] w-auto ">
           <div className='h-10 text-center p-2'>
            <h3>Admin Login</h3>
           </div>
            <form action="post" onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <label htmlFor="email">Enter email</label>
                    <input type="text" name='email'
                        id='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        className='border border-black rounded-md p-2 focus:outline-cyan-600'
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Enter password</label>
                    <input type="password" name='password'
                        id='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        className='border border-black rounded-md p-2 focus:outline-cyan-600'
                    />
                </div>
                <div className="pt-4">
                    <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4  transition duration-300"
                    >Login</button>
                </div>
            </form>
            <div className='mt-2 text-center hover:text-blue-400'><a href="/">Back to Home</a></div>
      </div>
    </div>
  )
}
