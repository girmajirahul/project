import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const user1 = localStorage.getItem("currentuser");
    if (user1) {
      setUser(JSON.parse(user1));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentuser");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <div className="w-full p-6 flex items-center justify-between shadow-2xl bg-white">
      
      <div>
        <img src={logo} alt="logo" className='h-8 w-auto' />
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Navigation Links */}
      <div className={`md:flex md:items-center md:gap-6 ${menuOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none p-4 md:p-0` }>
        <ul className="flex flex-col md:flex-row gap-4 font-serif text-sm">
          <li className="cursor-pointer hover:text-sky-500"><a href="/">HOME</a></li>
          <li className="cursor-pointer hover:text-sky-500"><a href="/About">ABOUT</a></li>
          <li className="cursor-pointer hover:text-sky-500"><a href="/Candidates">CANDIDATES</a></li>
          <li className="cursor-pointer hover:text-sky-500"><a href="/admin/login">ADMIN</a></li>
          <li>
            {user ? (
              <div className="flex flex-col md:flex-row items-center gap-4">
                <a href={`/profile/${user.id}`} className="cursor-pointer text-blue-500">Welcome, {user.name}!</a>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 text-white rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/Login" className='bg-blue-500 py-2 px-4 text-white rounded-md'>LOGIN</a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
