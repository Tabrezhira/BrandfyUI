import React from 'react';

function Hero() {
  return (
    <section className=" mx-auto container w-full h-90 flex flex-col items-center justify-center">
      <h1 className=" font-bfont mb-4 text-6xl font-bold">BrandyUI</h1>
      <p className=" font-bfont text-gray-700 mb-6 text-lg font-normal">
        Free Open Source Tailwind CSS v4 Components
      </p>
      <p className=" font-bfont text-gray-700 mb-6 font-normal text-base  flex flex-col items-center text-center">
        BrandfyUI is a collection of free Tailwind CSS components that can be
        used in you <br />
        next project. With a range of components, you can build your next
        marketing <br />
        website, admin dashboard, eCommerce store and much more.
        <br />
      </p>
      <div>
        <ul class="flex items-center justify-center gap-6">
          <li class="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span class="text-sm font-medium text-gray-900">No install</span>
          </li>
          <li class="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span class="text-sm font-medium text-gray-900">No config</span>
          </li>
          <li class="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span class="text-sm font-medium text-gray-900">No setup</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
