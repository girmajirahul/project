import React, { useEffect, useState } from "react";
import { Home, User, Settings, Menu, Plus, LogOut, Eye, DeleteIcon, CrossIcon } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import { MdModeEdit } from "react-icons/md";
const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  // const [showHome,setHome] =useState(false);
  const [activeSection,setActiveSection]=useState("home");
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminUser');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  }
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
          <div onClick={() => setActiveSection('home')}>
            <NavItem icon={<Home />} label="Home" collapsed={collapsed} />
          </div>
          <div onClick={()=>setActiveSection('joblist')}>
            <NavItem icon={<Eye />} label="View JobList" collapsed={collapsed} />
          </div>
          <div onClick={() => setActiveSection('addjobs')}>
            <NavItem icon={<Plus />} label="Add Job" collapsed={collapsed} />
          </div>
          <div onClick={handleLogout}>
            <NavItem icon={<LogOut />} label="Logout" collapsed={collapsed} />
          </div>
        </nav>
      </div>

      {/* Right Content Panel */}
      <div className="flex-1 p-6 bg-white overflow-auto">
        {activeSection==='home' && <HomeSection/>}
        {activeSection==='joblist' && <JobListSection/>}
        {activeSection==='addjobs' && <AddJobForm/>}
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
    name: '',
    location: '',
    post: '',
    image: null,
    website: ''
  });
  const [alert,setAlert]=useState({message:'',type:''});
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", formData.name)
    data.append("location", formData.location)
    data.append("post", formData.post)
    data.append("image", formData.image)
    data.append("website", formData.website)
    axios
      .post("http://localhost:8081/jobs/addjobs", data)
      .then((res) => {
        setAlert({message:res.data.message ,type:'success'});
      })
      .catch((err) => {
        setAlert({message:err,type:'error'})
      });
  };

  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setAlert({ message: '', type: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <div>
    {alert.message && (  
    <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
        />
      )}
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-700 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Job</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="company name"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" />

      <input name="location" value={formData.location} onChange={handleChange} placeholder="Location"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" />

      <input name="post" value={formData.post} onChange={handleChange} placeholder="Post"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" />

      <input
        name="image"
        type="file"
        onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files[0] }))}
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white"
      />

      <input name="website" value={formData.website} onChange={handleChange} placeholder="Website"
        className="w-full mb-3 p-2 rounded bg-gray-600 text-white" />


      <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
    </div>
  );
};

const HomeSection = () => {
  return (
    <div className="items-center text-center">
      <h1 className="text-black font-bold mt-3">This is Home</h1>
    </div>
  );
};

const JobListSection = () => {
  const [joblist,setJobList]=useState([]);
  useEffect(()=>{
     
    fetch("http://localhost:8081/jobs")
     .then(res=>res.json())
     .then(data=>setJobList(data))
     .catch(err=>console.log(err))
   
    },[])
   
  return (
    <>
      <div className="p-4">
      <h1 className="text-black text-xl font-bold mb-4">Job List</h1>
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-black">
          <tr>
            <th className="border font-sans text-white border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Post</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {joblist.map((job) => (
            <tr key={job.id}>
              <td className="border text-black border-gray-300 px-4 py-2">{job.id}</td>
              <td className="border text-black border-gray-300 px-4 py-2">{job.name}</td>
              <td className="border text-black border-gray-300 px-4 py-2">{job.post}</td>
              <td className="border text-black border-gray-300 px-4 py-2">{job.location}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>  
    </>
  );
};

export default Dashboard;
