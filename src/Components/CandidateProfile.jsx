import React from 'react';
import { useParams } from 'react-router-dom';
import candidates from '../api/candidates.json';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDollarSign } from 'react-icons/fa';
import { BsLinkedin, BsFacebook, BsTwitter, BsGoogle, BsGithub } from 'react-icons/bs';

export default function CandidateProfile() {
    const { id } = useParams();
    const candidate = candidates.find(c => c.id === id);

    if (!candidate) return <p className="text-center mt-10">Candidate not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                    src={`/img/${candidate.image}`}
                    alt={candidate.name}
                    className="h-40 w-40 rounded-full object-cover shadow-md"
                />

                <div className="flex-1">
                    <h2 className="text-2xl font-bold">{candidate.name}</h2>
                    <p className="text-gray-600 text-lg">{candidate.role || "Front-End Developer"}</p>
                    <p className="mt-3 text-gray-700">
                        {candidate.description || `Front end developers use HTML, CSS, and JavaScript to code the website and web app designs created by web designers. The code they write runs inside the user's browser...`}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-600">
                        <p><FaMapMarkerAlt className="inline mr-2" /> {candidate.location}</p>

                        <p><FaDollarSign className="inline mr-2" /> {candidate.rate || '$65 / hour'}</p>
                        <p><FaPhone className="inline mr-2" /> {candidate.phone || '(+1) 123 456 7890'}</p>
                        <p><FaEnvelope className="inline mr-2" /> {candidate.email || 'myemail@cariera.com'}</p>

                    </div>

                    <div className="flex space-x-4 mt-5 text-blue-600 text-xl">
                        <a href="#"><BsFacebook /></a>
                        <a href="#"><BsTwitter /></a>
                        <a href="#"><BsGoogle /></a>
                        <a href="#"><BsLinkedin /></a>
                        <a href="#"><BsGithub /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-center">My Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {candidate.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
