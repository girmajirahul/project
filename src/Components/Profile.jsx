import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import png from "../assets/profile.jpg"
import axios from 'axios';
import Alert from './Alert';
export default function Profile() {
  const { id } = useParams();
  const [users, setUsers] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [file,setFile] = useState();
  const [alert,setAlert]=useState({message:'',type:''});
  
  useEffect(() => {
    if (alert.message) {
      const timer = setTimeout(() => setAlert({ message: '', type: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const upload=(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('file',file);
    formData.append('userId',id);
    axios.post('http://localhost:8081/users/upload',formData)
    .then(() =>
      setAlert({ message: "Profile Update SucessFully !", type: "success" })
    )
    .catch(() =>
      setAlert({ message: "Failed. Try again.", type: "error" })
    );
  }


  useEffect(() => {
    fetch(`http://localhost:8081/users`)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("error", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const user = users.find((u) => String(u.id) === String(id)); // safer comparison
  
  if(!user) return <p>User Not found</p>
  
  
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {alert.message && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert({ message: '', type: '' })}
        />
      )}
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
      {/* Header */}
      <div className="flex flex-row gap-3 ">
        {/* <img
          src={`/img/${user.images}`}
          alt={`${user.name} logo`}
          className="h-32 w-32 object-cover rounded-full border-4 border-blue-500 shadow-md"
        /> */}
        {!user.images ?(
            <img
            src={png}
            alt={`${user.name} logo`}
            className="h-32 w-32 object-cover rounded-full border-4 border-blue-500 shadow-md"
          />
        ):(
          <img
          src={`http://localhost:8081/uploads/${user.images}`}
          alt={`${user.name} logo`}
          className="h-32 w-32 object-cover rounded-full border-4 border-blue-500 shadow-md"
        />
        )};
        <h3 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h3>
        
      </div>

      {/* Info Section */}
      <div className="mt-8 space-y-4 text-gray-700">
      
        {user.email && (
            
          <p>
            <strong className="text-gray-900">email:</strong> {user.email}
          </p>
        )}

        <form  onSubmit={upload} className="mt-10 space-y-4">
          <label className="block">
            <span className="text-gray-700">Update Profile Picture:</span>
            <input
              type="file"
              name='file'
              onChange={(e)=>setFile(e.target.files[0])}
              className="mt-1 block w-full"
            />
          </label>
          <button
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
           Update
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}
