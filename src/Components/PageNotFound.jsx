import React from "react";

const Not404Page = () => {
  return (
    <div className="bg-green-50 flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white shadow-lg rounded-xl max-w-lg">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4">✔️</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Everything’s Working!
        </h2>
        <p className="text-gray-600 mb-6">
          You are on the right page. No errors detected here.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Not404Page;