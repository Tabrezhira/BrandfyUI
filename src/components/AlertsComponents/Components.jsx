import React, { useState } from 'react';
import Navbar1 from '../Home/Navbar1';

function Components() {
  const [viewportSize, setViewportSize] = useState('mobile');

  const sizes = {
    mobile: 'w-[375px]',
    small: 'w-[640px]',
    medium: 'w-[768px]',
    large: 'w-[1024px]',
    full: 'w-full'
  };

  return (
    <section className="container mx-auto">
      <h1>Base</h1>
      <div className='flex w-full items-center justify-between bg-amber-200 p-4'>
        <div className="flex items-center justify-center gap-4">
          <button className='border-1 text-lg text-center border-gray-400 py-2 px-6 rounded-md'>
            <span aria-hidden="true" role="img">👀</span>View
          </button>
          <button className='border-1 text-lg text-center border-gray-400 py-2 px-6 rounded-md'>
            LTR
          </button>
          <button className='border-1 text-lg text-center border-gray-400 py-2 px-6 rounded-md'>
            Copy
          </button>
          <select className='border-1 text-lg text-center border-gray-400 py-2 px-6 rounded-md'>
            <option value="default">Select Version</option>
            <option value="v1">Version 1</option>
            <option value="v2">Version 2</option>
          </select>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <p className='mr-4'>
            @<span>100</span>%
          </p>
          {Object.keys(sizes).map((size) => (
            <button
              key={size}
              className={`border-1 text-lg text-center border-gray-400 py-2 px-6 rounded-md
                ${viewportSize === size ? 'bg-teal-600 text-white' : 'bg-white'}`}
              onClick={() => setViewportSize(size)}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 overflow-x-auto">
        <div className={`force-mobile border-2 border-gray-300 rounded-md overflow-hidden 
          ${sizes[viewportSize]} bg-white shadow transition-all duration-300`}>
          <Navbar1 viewportSize={viewportSize} />
        </div>
      </div>
    </section>
  );
}

export default Components;
