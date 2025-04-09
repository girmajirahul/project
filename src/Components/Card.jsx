import React from "react";

export default function Card({ data, type }) {
  if (!data) return null;

  // Common fields
  const { name, image, website } = data;

  return (
    <div className="ml-20 rounded-lg shadow-2xl overflow-hidden p-7">
      <div className="flex flex-col items-center">
        <img src={`/img/${image}`} alt={name} className="h-40 w-40 object-cover rounded-full" />
        <h2 className="mt-2 text-lg font-semibold text-center">{name}</h2>
        
      </div>
     

      {type === "job" && (
        <div className="mt-3">
          
          <p><strong>Post:</strong> {data.post}</p>
          <p><strong>Location:</strong> {data.location}</p>
        </div>
      )}

      {type === "candidate" && (
        <div className="mt-3">
          <p><strong>Skills:</strong> {data.skills}</p>
          
        </div>
      )}

      {website && (
        <div>
          <a href={website} target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 mt-3 rounded-lg hover:bg-blue-600">
            {type === "job" ? "Apply Now" : "View Profile"}
          </a>
        </div>
      )}
    </div>
  );
}
