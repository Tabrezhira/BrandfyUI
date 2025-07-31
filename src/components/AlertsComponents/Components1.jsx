import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar';
import Display from '../../utils/Display';
function Components1({ Component, name }) {
  const [viewportSize, setViewportSize] = useState('full');
  const [CurrestSize, setCurrentSize] = useState('');
  const [codeFormate, setCodeFormate] = useState('HTML');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sizes = {
    mobile: 'w-[340px]',
    small: 'w-[640px]',
    medium: 'w-[768px]',
    large: 'w-[1024px]',
    full: 'w-full',
  };

  useEffect(() => {
    if (viewportSize === 'mobile') {
      setCurrentSize('340px');
    } else if (viewportSize === 'small') {
      setCurrentSize('640px');
    } else if (viewportSize === 'medium') {
      setCurrentSize('768px');
    } else if (viewportSize === 'large') {
      setCurrentSize('1024px');
    } else {
      setCurrentSize('100%');
    }
  }, [viewportSize]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <section className="container mx-auto px-2 md:px-0 ">
      <h1 className=" font-bfont text-2xl  mx-2 md:mx-0 font-bold mb-4 mt-5">{name}</h1>
      <div className="flex flex-1 w-full  mx-2 md:mx-0 items-center justify-between ">
        <div className="flex items-center justify-center gap-4">
          <button className="border-1 font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-6 rounded-md">
            View
          </button>
          <button className="border-1 font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-6 rounded-md">
            Copy
          </button>
          <div className="relative dropdown-container">
            <button
              className="relative border-1 font-bfont text-md font-medium text-center shadow border-gray-400 py-2 px-6 rounded-md flex items-center gap-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {codeFormate}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-11 border-1 font-bfont text-md font-medium text-center shadow-lg border-gray-200 rounded-md bg-white min-w-[120px] py-1 z-10">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                  onClick={() => {
                    setCodeFormate('HTML');
                    setIsDropdownOpen(false);
                  }}
                >
                  HTML
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100"
                  onClick={() => {
                    setCodeFormate('JSX');
                    setIsDropdownOpen(false);
                  }}
                >
                  JSX
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => {
                    setCodeFormate('Vue');
                    setIsDropdownOpen(false);
                  }}
                >
                  Vue
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="lg:flex items-center hidden justify-center text-center gap-2">
          <p className=" text-sm font-bfont">
            @<span className="pl-1 text-sm font-bfont ">{CurrestSize}</span>
          </p>
          {Object.keys(sizes).map((size) => (
            <button
              key={size}
              className={`border-1  font-bfont text-md font-medium  text-center shadow border-gray-400 py-2 px-4 rounded-md
                ${viewportSize === size ? 'bg-teal-600 text-white' : 'bg-white'}`}
              onClick={() => setViewportSize(size)}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`
          flex justify-center mx-auto border-1 rounded-md border-gray-400 mt-4 
          overflow-x-auto transition-all duration-300 ease-in-out
          h-100 w-[${CurrestSize}]
        `}
      >
        {/* <Display Component={Component}/> */}
      </div>
    </section>
  );
}

export default Components1;
