import React from 'react';

function Footer() {
  return (
    <footer className='md:mt-12'>
      <div className='md:mb-12 w-full h-[1px] bg-gray-200'/>
      <div className=' container mx-auto'>
        <p className=' text-lg cursor-pointer font-bfont font-medium '>
          BrandfyUI{' '}
          <span aria-hidden="true" role="img">
            🚀
          </span>
        </p>
        <p className='w-130 font-light font-bfont text-gray-500 md:mt-6 md:mb-4 '>
          Free open source Tailwind CSS components for marketing and eCommerce
          websites, as well as application interfaces.
        </p>
        <div className='flex items-center justify-between md:mb-12'>
          <div className='flex text-sm font-semibold items-center md:gap-4 '> 
            <p className='cursor-pointer'>FAQs</p>
            <p className='cursor-pointer'>Acknowledgements</p>
          </div>
          <div>
            <p className='text-sm  '>
              Created by <span className='font-semibold cursor-pointer'>Tabrez Hakimji</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
