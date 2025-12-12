import React, { useState } from 'react'
import candData from '../api/candidates.json';
import Card from './Card';

export default function Candidates() {

  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  }

  const filteredCand =
    submittedQuery.trim() === ""
      ? candData
      : candData.filter((cand) =>
        cand.name.toLowerCase().includes(submittedQuery.toLowerCase())
      );
  return (
    <div>
      <div className="flex justify-center w-full px-4">
        <form onSubmit={handleSearch} className="w-full max-w-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 pt-10">

            {/* Input */}
            <input
              type="text"
              name="search-keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full md:w-80 bg-amber-50 text-center border border-indigo-500 rounded-md px-3"
              placeholder="Search..."
            />

            {/* Button */}
            <button
              type="submit"
              className="h-10 w-full md:w-auto px-6 bg-sky-500 text-white rounded-md hover:bg-blue-600"
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>

      <div className='flex flex-wrap items-center'>
        <div className="pt-2">
          <ul className="flex flex-wrap gap-2">
            {filteredCand && filteredCand.length > 0 ? (
              filteredCand.map((curElem) => (
                <li key={curElem.id} className="list-none">
                  <Card data={curElem} type="candidate" />
                </li>
              ))
            ) : (
              <p className="text-center text-red-500 col-span-3">No Candidates are available</p>
            )}
          </ul>
        </div>

      </div>
    </div>
  )
}
