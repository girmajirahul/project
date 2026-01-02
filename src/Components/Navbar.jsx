import React, { useEffect, useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setProfileOpen(false);
    window.location.href = "/login";
  };

  return (
    <div className="relative w-full p-6 flex items-center justify-between shadow-2xl bg-white">

      {/* Logo */}
      <img src={logo} alt="logo" className="h-8 w-auto" />

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex md:items-center md:gap-6 
        ${menuOpen ? 'block' : 'hidden'} 
        absolute md:static top-16 left-0 w-full md:w-auto 
        bg-white shadow-md md:shadow-none p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 font-serif text-sm">
          <li className="hover:text-sky-500">
            <a href="/">HOME</a>
          </li>
          <li className="hover:text-sky-500">
            <a href="/about">ABOUT</a>
          </li>
          <li className="hover:text-sky-500">
            <a href="/candidates">CANDIDATES</a>
          </li>

          {/* Profile Avatar */}
          <li className="relative">
            
            <User
              onClick={() => setProfileOpen(!profileOpen)}
              className="h-10 w-10 p-2 rounded-full cursor-pointer border-2 border-gray-300"
            />


            {/* Profile Modal */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-lg  z-50">
                <ul className="flex flex-col text-sm">

                  {!user && (
                    <>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="/login">Login</a>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href="/admin/login">Admin Login</a>
                      </li>
                    </>
                  )}

                  {user && (
                    <>
                      <li className="px-4 py-2 text-gray-600">
                         <span className="font-semibold">{user.name}</span>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <a href={`/profile/${user.id}`}>Edit Profile</a>
                      </li>
                      <li
                        onClick={handleLogout}
                        className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                      >
                        Logout
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
