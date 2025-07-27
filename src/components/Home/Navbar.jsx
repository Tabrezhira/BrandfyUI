import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  return (
    <nav className="container mx-auto w-full  h-20 flex items-center justify-between px-4 font-bfont">
      <div className="flex w-full items-center justify-between gap-4">
        <ul className="flex items-center gap-4 text-sm  font-medium">
          <li>
            BrandfyUl
            <span aria-hidden="true" role="img">
              🚀
            </span>
          </li>
          <li>Application</li>
          <li>Marketing</li>
          <li>Blog</li>
        </ul>

        <div className="flex items-center gap-4">
          <div className='border-2 border-gray-300 rounded-md p-2 px-6 flex items-center gap-2'>
            <input className=' border-none outline-none bg-transparent shadow-none focus:ring-0' placeholder='Search components'  type="text" />
          </div>
          <div className='flex items-center gap-1 text-lg font-semibold'>
            <FaGithub  className=' text-2xl'/>
            <span className='text-gray-600 text-sm font-medium'>
              {stars !== null ? stars : 'Loading...'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
