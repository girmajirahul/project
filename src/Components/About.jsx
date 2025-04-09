import React from 'react'
import { TiTick } from "react-icons/ti";

import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
export default function About() {
  return (
    <div id="About">
       <div className="container mx-auto py-5">
    <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="">
                <div className="grid grid-cols-2 gap-0 bg-gray-100 rounded overflow-hidden">
                    <div className="text-start">
                        <img className="w-full h-auto" src={about1} />
                    </div>
                    <div className="text-start">
                        <img className="w-[85%] " src={about2} />
                    </div>
                    <div className="text-end">
                        <img className="w-[85%]" src={about3} />
                    </div>
                    <div className="text-end">
                        <img className="w-full h-auto" src={about4} />
                    </div>
                </div>
            </div>
            <div className="wow fadeIn font-serif" data-wow-delay="0.5s">
                <h1 className="text-2xl font-bold font-serif mb-4">We Help To Get The Best Job And Find A Talent</h1>
                <p className="mb-4 text-gray-600">Provide a seamless platform for job seekers to find opportunities and employers to recruit the right candidates.Offer an intuitive, user-friendly interface for easy navigation.</p>
                <p className="flex items-center"><TiTick color="blue" /><i className=" text-blue-500 mr-3"></i>Connect job seeker and Employers</p>
                <p className="flex items-center"><TiTick color="blue" /><i className=" text-blue-500 mr-3"></i>Help to Enhance your experince</p>
                <p className="flex items-center"><TiTick color="blue" /><i className=" text-blue-500 mr-3"></i>Improve Job Search Efficiency</p>
                <a className="inline-block bg-blue-500 text-white py-3 px-5 mt-3 rounded-lg hover:bg-blue-600 transition" href="">Read More</a>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
