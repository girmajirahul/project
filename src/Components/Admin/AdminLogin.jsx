import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Alert from '../Alert';
export default function AdminLogin() {
    // const [values,setValues]=useState({email,password});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({ message: '', type: '' })

   
    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email || !password){
            setAlert({message:'All Fields are required',type:'error'})
            return ;
        }

        
        try{
            const response= await axios.post('http://localhost:8081/admin/adminlogin',{
                 email,password
            });
            const {success,token}=response.data;
            if(success){
                setAlert({message:'Login Successful !',type:'success'});
                localStorage.setItem("adminUser",token);
                window.location.href='/admin/dashboard';
            }else{
                setAlert({message:'Wrong email or Password ',type:'error'});
            }
        }
        catch(err){
            console.log(err);
            setAlert({message:'Something went wrong',type:'error'});
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
            <div className="text-black  h-[100] w-[400px] ">
                <div className='bg-blue-800 text-white mb-6 h-10 text-center text-2xl font-semibold  '>
                    <h3>ADMIN LOGIN</h3>
                </div>
                <form action="post" onSubmit={handleLogin} autoComplete='off'>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-medium ">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="password" className="mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className='mt-2 text-center hover:text-blue-400'><a href="/">Back to Home</a></div>
            </div>
        </div>
    )
}
