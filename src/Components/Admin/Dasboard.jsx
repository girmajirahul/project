import React, { useState } from "react";
import { Home, User, Settings, Menu, Plus } from "lucide-react";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-20' : 'w-64'} bg-gray-900 transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-xl font-bold">{!collapsed && "Dashboard"}</span>
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
        <nav className="flex flex-col p-2">
          <a href="/"><NavItem icon={<Home />} label="Home" collapsed={collapsed} /></a>
          <NavItem icon={<User />} label="Profile" collapsed={collapsed} />
          <NavItem icon={<Settings />} label="Settings" collapsed={collapsed} />
          <div onClick={() => setShowForm(!showForm)}>
            <NavItem icon={<Plus />} label="Add Job" collapsed={collapsed} />
          </div>
        </nav>
      </div>

      {/* Right Content Panel */}
      <div className="flex-1 p-6 bg-white overflow-auto">
        {showForm && <AddJobForm />}
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


const AddJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  

  return (
    <form  className="max-w-xl mx-auto bg-gray-700 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Job Title"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" required />
      
      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" required />
      
      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" required />
      
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Job Description"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" required />
      
      <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
  );
};

export default Dashboard;
