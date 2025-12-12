import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ data, type }) {
  if (!data) return null;

  // Common fields
  const { name, logo, website } = data;
  console.log(data);
  const navigate=useNavigate();
  return (
    <div className="ml-10 rounded-lg shadow-2xl overflow-hidden p-7">
     
     {type==="candidate" &&(
        <>
          <div className="flex flex-col items-center">
           <img src={`img/${data.image}`} alt={name} className="h-40 w-40 object-cover rounded-full" />
           <h2 className="mt-2 text-lg font-semibold text-center">{name}</h2>
          </div>
          <div className="mt-3">
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Location:</strong> {data.location}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className=" bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-blue-600" 
            onClick={()=>navigate(`/Candidate/profile/${data.id}`)} >Details</button>
          
          <a href={website} target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-blue-600">
            Download CV
          </a>
        </div>
        </>   
      )}
      {type==="job" &&(
        <>
          <div className="flex flex-col items-center">
           <img src={`http://localhost:8081/uploads/${data.website}`} alt={name} className="h-40 w-40 object-cover rounded-full" />
           <h2 className="mt-2 text-lg font-semibold text-center">{name}</h2>
          </div>
          <div className="mt-3">
          <p><strong>Post:</strong> {data.post}</p>
          <p><strong>Location:</strong> {data.location}</p>
         
        </div>
        <div>
          <a href="/" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-blue-600">
          Apply Now
          </a>
        </div>
        </>  
      )}
      
    </div>
  );
}
