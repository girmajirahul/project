import React, { useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import HeroSection from './Home/HeroSection';
import CompaniesSection from './Home/CompaniesSection';
import WhatsAppButton from './Home/WhatsAppButton';
import { use } from 'react';
import axios from 'axios';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    const fetchJobs=async()=>{
      const resp=await axios.get(`${import.meta.env.VITE_BASE_URL}/api/jobs`)
      const data=resp.data.data || [] 
      setJobs(data);

    }
    fetchJobs();
  },[])
  
  return (
    <div className='overflow-auto hide-scrollbar'>
      <HeroSection />
      <WhatsAppButton />
      <CompaniesSection jobs={jobs}/> 
      <Testimonials />
    </div>
  );
}
