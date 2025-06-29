import React from "react";
import { FaMapMarkerAlt, FaPhone, FaAngleDoubleRight, FaFacebook, FaTwitter, FaGooglePlus, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 mt-20  text-white">
      {/* Footer Info Section */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <a href="/">
                <img src={logo} alt="Logo" className="h-12 mb-4" />
              </a>
              <p className="pt-4 text-sm">
                Provide a seamless platform for job seekers to find opportunities and employers to recruit the right candidates. Offer an intuitive, user-friendly interface for easy navigation.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-sky-500" />
                  Pune, India
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-sky-500" /><a href="http://wa.me/919021710342" target="_blank">
                  (+91) 90217 10342
                  </a>
                 
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/addjobs" className="flex items-center hover:text-sky-500">
                    <FaAngleDoubleRight className="mr-2" />
                    Add Job
                  </a>
                </li>
                <li>
                  <a href="/apply" className="flex items-center hover:text-sky-500">
                    <FaAngleDoubleRight className="mr-2" />
                    Apply
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center hover:text-sky-500">
                    <FaAngleDoubleRight className="mr-2" />
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="/Candidates" className="flex items-center hover:text-sky-500">
                    <FaAngleDoubleRight className="mr-2" />
                    View Candidates
                  </a>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div>
              <iframe
                className="rounded w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2202.7743425718077!2d73.83811387183668!3d18.45499107118075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29534bf615555%3A0x19062bb90d45a17c!2sPUNE%20CAMBRIDGE%20INSTITUTE%20OF%20MANAGEMENT%20AND%20COMPUTER%20APPLICATIONS!5e1!3m2!1sen!2sin!4v1739806831874!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Social Media */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm">
            Copyright &copy; <a href="#" className="hover:text-sky-500">Online Job Portal</a>. All Rights Reserved
          </span>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-sky-500">
              <FaFacebook size={20} />
            </a>
            
            <a href="#" className="text-white hover:text-sky-500">
              <FaGooglePlus size={20} />
            </a>
            <a href="#" className="text-white hover:text-sky-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-sky-500">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
