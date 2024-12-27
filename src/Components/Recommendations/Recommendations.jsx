/* import React from "react";

const Recommendations = () => {
  return (
    <div className=" pt-4">
      <ul className="flex overflow-x-auto max-w-screen-xl  text-nowrap    ">
        <li
          className="px-2 mx-2  bg-slate-200 rounded-lg"
        >
          All
        </li>

        <li
          className="px-2 mx-2  bg-slate-200 rounded-lg"
        >
          Gaming
        </li>

        <li
          className="px-2 mx-2  bg-slate-200 rounded-lg"
        >
          Music
        </li>

        <li
          className="px-2 mx-2  bg-slate-200 rounded-lg "
        >
          Genshin Impact
        </li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Music</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          software Enginnering
        </li>
        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Gaming</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Music</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          Genshin Impact
        </li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Music</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          software Enginnering
        </li>
        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Gaming</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Music</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          Genshin Impact
        </li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">Music</li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          software Enginnering
        </li>

        <li className="px-2 mx-2  bg-slate-200 rounded-lg">
          software Enginnering
        </li>
      </ul>
    </div>
  );
};

export default Recommendations;
 */

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  "All", "Gaming", "Music", "Genshin Impact", "Software Engineering",
  "Cooking", "Travel", "Science", "Technology", "Sports",
  "Fashion", "Art", "Photography", "Movies", "Anime","laptop","Fortnite"
]

const Recommendations = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction) => {
    const container = document.getElementById('category-container')
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setScrollPosition(container.scrollLeft + scrollAmount)
    }
  }

  return (
    <div className='relative pt-4 pb-2 overflow-x-auto text-nowrap'>
      <div className='flex items-center'>
        <button 
          onClick={() => scroll('left')} 
          className='absolute left-0 z-10 p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          aria-label="Scroll left"
        >
          <ChevronLeft className='w-6 h-6 text-gray-700' />
        </button>
        <ul id='category-container' className='flex overflow-x-auto scrollbar-hide space-x-2 px-8 max-w-full'>
          {categories.map((category, index) => (
            <li key={index}>
              <button 
                className='px-3 py-1 text-sm whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => scroll('right')} 
          className='absolute right-0 z-10 p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          aria-label="Scroll right"
        >
          <ChevronRight className='w-6 h-6 text-gray-700' />
        </button>
      </div>
    </div>
  )
}

export default Recommendations

