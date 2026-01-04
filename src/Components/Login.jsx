import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Alert from "./Alert";

export default function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setAlert({ message: "", type: "" }), 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/users/signup", values);
      setAlert({ message: "Signup successful", type: "success" });
      setShowSignup(false);
    } catch {
      setAlert({ message: "Signup failed", type: "error" });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/users/login", { email, password });
      if (res.data.success) {
        setAlert({ message: "Login successful", type: "success" });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("currentUser", JSON.stringify(res.data.user));
        setTimeout(() => navigate("/"), 1200);
      } else {
        setAlert({ message: res.data.message, type: "error" });
      }
    } catch (err) {
      setAlert({ message: err.response?.data?.message || "Server error", type: "error" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      {alert.message && <Alert {...alert} onClose={() => setAlert({ message: "", type: "" })} />}

      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {showSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          {showSignup ? "Sign up to get started" : "Login to continue"}
        </p>

        {!showSignup ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
              Login
            </button>

            <p className="text-center text-sm">
              Don’t have an account?
              <button type="button" onClick={() => setShowSignup(true)} className="text-blue-600 ml-1 font-medium">
                Sign up
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full h-11 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
             <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
              Create Account
            </button>

            <p className="text-center text-sm">
              Already have an account?
              <button type="button" onClick={() => setShowSignup(false)} className="text-blue-600 ml-1 font-medium">
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
