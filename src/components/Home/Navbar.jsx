import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdMenu } from "react-icons/md";

function Navbar() {
  const [stars, setStars] = useState(null);
  // Example of using axios to fetch data
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/TabrezHira/Full-Stack-Book-Store-Application'
        );
        setStars(response.data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error.message);
      }
    };

    fetchStars();
  }, []);

  const [isOpen,setIsOpen]= useState(false);



  return (
    <nav className="container mx-auto w-full  h-20 flex items-center justify-between px-4 font-bfont">
      <div className="flex w-full items-center justify-between gap-4">
        <ul className="flex items-center gap-4 text-sm font-medium ">
          <li className='cursor-pointer'>
            BrandfyUl
            <span aria-hidden="true" role="img">
              🚀
            </span>
          </li>
          <li className='cursor-pointer hidden md:block'>Application</li>
          <li className='cursor-pointer hidden  md:block'>Marketing</li>
          <li className='cursor-pointer hidden  md:block'>Blog</li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4 relative">
          <div className=' border-1  shadow-sm  border-gray-300 rounded-md p-1 md:p-2 md:px-6 px-4 py-2 flex items-center md:gap-2'>
            <input className='w-30 md:w-50  border-none outline-none bg-transparent shadow-none focus:ring-0' placeholder='Search components'  type="text" />
          </div>
          <div className='flex items-center gap-1 text-lg font-semibold'>
            <FaGithub  className=' text-2xl '/>
            {/* <span className='text-gray-600 text-sm font-medium'>
              {stars !== null ? stars : 'Loading...'}
            </span> */}
          </div>
          <div>
            <MdMenu className=' text-2xl md:hidden' onClick={() => setIsOpen(!isOpen)}/>
          </div>
          
            {isOpen && (
  <div className='absolute top-16 left-0 w-full bg-white rounded-md shadow-lg border-t border-gray-200 z-50'>
    <ul className='flex flex-col items-start justify-center w-full'>
      <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full'>Application</li>
      <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full'>Marketing</li>
      <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full'>Blog</li>
    </ul>
  </div>
            ) }


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
