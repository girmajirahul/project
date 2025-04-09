import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import image from '/img/login-image.jpg'
export default function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signup", values)
      .then(() => alert("Registered Successfully!"))
      .catch((err) => console.log(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email);
    if (user) {
      if (user.password === password) {
        alert("Login Successfully!");
        localStorage.setItem("currentuser", JSON.stringify(user));
        window.location.href = "/";
      } else {
        setError("Invalid password");
      }
    } else {
      setError("Login Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-[85%] max-w-4xl">
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="w-[85%] md:w-1/2 p-6">
          {!showSignup ? (
            <div className='pt-1 pb-8'>
              <div className="pt-8 pb-8 text-center shadow-xl shadow-blue-300">
                <div className="text-center bg-cyan-400 h-20 rounded-t-md pt-7 text-2xl text-white">
                  <h4>LOGIN TO CARIERA</h4>
                </div>
                <form onSubmit={handleLogin} className="space-y-4 pt-2">
                  {error && (
                    <div className="bg-red-100 border  border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md flex items-center gap-2 mt-4">
                      <FiAlertCircle className="text-red-500 text-xl" />
                      <p className="font-medium">{error}</p>
                    </div>
                  )}
                  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}
                    className='h-10 w-[85%] border bg-amber-50 pl-2 rounded-md' placeholder='example@gmail.com' />
                  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}
                    className='h-10 w-[85%] border bg-amber-50 pl-2 rounded-md' placeholder='password' />
                  <button type="submit" className="h-10 w-[85%] bg-cyan-500 py-2 px-3 text-white rounded-md">Login</button>
                  <div className='text-center py-2'>
                    <label>Don't have an account?</label>
                    <button type="button" onClick={() => setShowSignup(true)} className="text-blue-500 hover:underline ml-2">Signup</button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className="pt-1 pb-8 text-center shadow-xl shadow-blue-300">
                <div className="text-center bg-cyan-400 h-20 rounded-t-md pt-7 text-2xl text-white">
                  <h4>SIGNUP FOR CARIERA</h4>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <input type="text" name="name" onChange={handleChange}
                    className='h-10 w-[85%] border bg-amber-50 pl-2 rounded-md' placeholder='Full Name' />
                  <input type="email" name="email" onChange={handleChange}
                    className='h-10 w-[85%] border bg-amber-50 pl-2 rounded-md' placeholder='example@gmail.com' />
                  <input type="password" name="password" onChange={handleChange}
                    className='h-10 w-[85%] border bg-amber-50 pl-2 rounded-md' placeholder='Password' />
                  <div className=" text-center py-2">
                  <button type="submit" className="h-10 w-[85%] bg-cyan-500 py-2 px-3 text-white rounded-md">Signup</button>
                  <label htmlFor="" className="block">Already have account </label><a href="/login" className=" text-blue-500 hover:underline">Login</a>
                  </div>  

                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
