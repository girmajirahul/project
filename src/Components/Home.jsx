import React, { useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import HeroSection from './Home/HeroSection';
import CompaniesSection from './Home/CompaniesSection';
import WhatsAppButton from './Home/WhatsAppButton';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8081/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='overflow-auto hide-scrollbar'>
      <HeroSection />
      <WhatsAppButton />
      <CompaniesSection jobs={jobs}/> 
      <Testimonials />
    </div>
  );
}
