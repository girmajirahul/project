import React, { useState } from 'react'
import candData from '../api/candidates.json';
import Card from './Card';

export default function Candidates() {
  
const [searchQuery,setSearchQuery]=useState("");
const filteredCand = candData.filter((cand) =>
  cand.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div>
      <div className="flex flex-wrap ">
      <form action="#" method='get'>
            <div className='flex flex-wrap pt-10'>
              <div className=''>
                <label htmlFor="search-keyword"></label>
                <input type="text" name="search-keyword" 
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}                  className='h-10 w-80 mx-10 my-7 bg-amber-50 text-center border-1 border-indigo-500 rounded-md'
                  placeholder='keywords' />
              </div>
             
              <div className='pt-7'>
                <button className='h-10 w-30  bg-sky-500 text-white rounded-md hover:bg-blue-600'>SEARCH</button>
              </div>
            </div>
          </form>
      </div>
      <div className='flex flex-wrap items-center'>
       <div className="p-4 items-center">
          <ul className="flex flex-wrap gap-6">
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
