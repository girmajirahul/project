import React, { useState, useEffect } from 'react';
import image from '../assets/image1.jpg';
import Card from './Card';
import jobsData from '../api/jobs.json';
import { FaWhatsapp } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [postQuery, setPostQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    job.post.toLowerCase().includes(postQuery.toLowerCase())
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className='overflow-auto hide-scrollbar'>
      {/* Hero Section */}
      <section>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='h-85 w-full bg-cover font-serif flex flex-col items-center'
        >
          <h1 className='text-center text-white text-4xl sm:text-5xl pt-10 sm:pt-20'>
            Your Career Starts Now
          </h1>
          <form action='#' method='get' className='w-full max-w-5xl px-4'>
            <div className='w-full flex flex-col md:flex-row justify-around items-center pt-5 md:pt-10 gap-4'>
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-10 w-full md:w-40 bg-amber-50 text-center rounded-md p-2'
                placeholder='Keywords'
              />
              <input
                type='text'
                value={postQuery}
                onChange={(e) => setPostQuery(e.target.value)}
                className='h-10 w-full md:w-70 bg-amber-50 text-center rounded-md p-2'
                placeholder='Search by post'
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

        {/* WhatsApp Button */}
        <div className="fixed right-2.5 bottom-2.5 rounded-full z-50">
          <a
            href="https://api.whatsapp.com/send/?phone=919021710342&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block bg-green-700 p-3 rounded-full text-amber-50'
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </section>

      {/* Jobs Section */}
      <section >
       <div className="mt-2"> 
         <h2 className='text-center pt-5 font-bold font-serif text-2xl'>Companies</h2>
       </div>
        <div className=" bg-blue-200 flex flex-wrap items-center mt-1">
          <div className="p-4 w-full">
            <ul className="flex flex-wrap gap-6 justify-center">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <li key={job.id} className="list-none">
                    <Card data={job} type="job" />
                  </li>
                ))
              ) : (
                <div className=" w-5/6 m-auto">
                  <div className="mt-10">
                    <Slider {...settings}>
                      {jobsData.map((job) => (
                        <div key={job.name} className='bg-white h-[350px] text-black rounded-xl'>
                          <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                            <img src={job.img_url} alt={job.name} className='h-33 w-33 rounded-full' />
                          </div>
                          <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-xl font-semibold'>{job.name}</p>
                            <p>{job.description}</p>
                            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl hover:scale-105 transition-all'>
                              Read More
                            </button>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
