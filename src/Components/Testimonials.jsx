import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer",
    company: "TCS",
    feedback:
      "This job portal helped me land my first IT job within a month. The interface is clean and easy to use.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sneha Patil",
    role: "Frontend Developer",
    company: "Infosys",
    feedback:
      "Applying for jobs and tracking applications became effortless. Highly recommended for freshers!",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Rahul Verma",
    role: "Data Analyst",
    company: "Wipro",
    feedback:
      "The job recommendations are very accurate. I received multiple interview calls in just a few weeks.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=56",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by thousands of job seekers across India
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                “{item.feedback}”
              </p>

              <div className="flex">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
