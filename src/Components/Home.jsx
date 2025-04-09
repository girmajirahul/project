import React, { useState } from 'react'
import image from '../assets/image1.jpg';
import Card from './Card';
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from 'react';

export default function Home() {
  const [jobs,setJobs]=useState([]);
  useEffect(()=>{
     
   fetch("http://localhost:8081/jobs")
    .then(res=>res.json())
    .then(data=>setJobs(data))
    .catch(err=>console.log(err))

    },[])

const [searchQuery,setSearchQuery]=useState("");
const [postQuery,setPostQuery]=useState("");
const filteredJobs = jobs.filter((job) =>
  job.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  job.post.toLowerCase().includes(postQuery.toLowerCase())
);
  return (
    <div >
      <section>
      <div
      style={{ backgroundImage: `url(${image})` }}
      className='h-85 w-full bg-cover font-serif md:w-full flex flex-col items-center'
    >
      <h1 className='text-center text-white text-4xl sm:text-5xl pt-10 sm:pt-20'>Your Career Starts Now</h1>
      <form action='#' method='get' className='w-full max-w-5xl px-4'>
        <div className='w-full flex flex-col md:flex-row justify-around items-center pt-5 md:pt-10 gap-4'>
          <input
            type='text'
            name='search-keyword'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='h-10 w-full md:w-40 bg-amber-50 text-center rounded-md p-2'
            placeholder='Keywords'
          />
          <input
            type='text'
            name='post-keyword'
            value={postQuery}
            onChange={(e) => setPostQuery(e.target.value)}
            className='h-10 w-full md:w-70 bg-amber-50 text-center rounded-md p-2'
            placeholder='Search on basis post'
          />
          <input
            type='text'
            name='location'
            className='h-10 w-full md:w-80 bg-amber-50 text-center rounded-md p-2'
            placeholder='Location'
          />
          <button className='h-10 w-full md:w-30 bg-sky-500 text-white rounded-md hover:bg-blue-600'>
            SEARCH
          </button>
        </div>
      </form>
    </div>
     <div className="fixed right-2.5 bottom-2.5 rounded-full z-999">
        <a href="https://api.whatsapp.com/send/?phone=919021710342&text&type=phone_number&app_absent=0" 
          target="_blank" 
          className='inline-block  bg-green-700   p-3  rounded-full text-amber-50' >
          <FaWhatsapp size={24} />
        
        </a>
      </div> 
    </section>
      <section>
        <h2 className='text-center pt-5 font-bold text-2xl text-'>Companies</h2>
        <div className="flex flex-wrap items-center">
        <div className="p-4">
          <ul className="flex flex-wrap gap-6">
            {filteredJobs&& filteredJobs.length > 0 ? (
              filteredJobs.map((curElem) => (
                <li key={curElem.id} className="list-none">
                  <Card data={curElem} type="job" />
                </li>
              ))
            ) : (
              <div className="text-center">
                <p className=" text-red-500 ">No jobs available</p>
              </div>
            )}
          </ul>
        </div>
         </div>   
      </section>
    </div>
  )
}
