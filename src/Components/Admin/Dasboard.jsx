import React, { useEffect, useState } from "react";
import { Home, Menu, Plus, LogOut, Eye } from "lucide-react";
import { useNavigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminUser");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      {/* Sidebar */}
      <div className={`${collapsed ? "w-20" : "w-64"} bg-gray-900 transition-all duration-300`}>
        
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-bold">{!collapsed && "Dashboard"}</span>
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>

        <nav className="flex flex-col p-2">

          <div onClick={() => navigate("/admin/dashboard")}>
            <NavItem icon={<Home />} label="Home" collapsed={collapsed} />
          </div>

          <div onClick={() => navigate("/admin/dashboard/joblist")}>
            <NavItem icon={<Eye />} label="Job List" collapsed={collapsed} />
          </div>

          <div onClick={() => navigate("/admin/dashboard/userList")}>
            <NavItem icon={<Plus />} label="users" collapsed={collapsed} />
          </div>

          <div onClick={handleLogout}>
            <NavItem icon={<LogOut />} label="Logout" collapsed={collapsed} />
          </div>

        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-white overflow-auto">
        <Outlet />
      </div>

    </div>
  );
};

const NavItem = ({ icon, label, collapsed }) => (
  <div className="flex items-center gap-4 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
    {icon}
    {!collapsed && <span className="text-sm">{label}</span>}
  </div>
);

export default Dashboard;