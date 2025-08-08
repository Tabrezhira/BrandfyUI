import { FaGithub } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Search from '../../utils/Search';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white w-full h-20 flex items-center justify-center border-b-1 border-gray-200 px-4 font-bfont">
      <div className="container mx-auto flex w-full items-center justify-between gap-4">
        <ul className="flex items-center gap-4 text-sm font-medium">
          <li className="cursor-pointer">
            <Link to="/" className="flex items-center gap-1">
              BrandfyUl 🚀
            </Link>
          </li>
          <li className="cursor-pointer hidden md:block">
            <Link to="/application">Application</Link>
          </li>
          <li className="cursor-pointer hidden md:block">
            <Link to="/marketing">Marketing</Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4 relative" ref={dropdownRef}>
          <Search />

          <div className="flex items-center gap-1 text-lg font-semibold">
            <Link to="https://github.com/Tabrezhira">
              <FaGithub className="cursor-pointer text-2xl" />
            </Link>
          </div>

          <div>
            <MdMenu
              className="text-2xl md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>

          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white rounded-md shadow-lg border-t border-gray-200 z-50">
              <ul className="flex flex-col items-start justify-center w-full">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                  <Link to="/application">Application</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full">
                  <Link to="/marketing">Marketing</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
