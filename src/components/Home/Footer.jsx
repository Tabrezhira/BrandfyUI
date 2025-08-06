import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=' mt-4 md:mt-12'>
      <div className='mb-4 md:mb-12 mx-2w-full h-[1px] bg-gray-200'/>
      <div className=' container px-2 mx-auto'>
        <p className=' text-lg cursor-pointer font-bfont font-medium '>
         <Link to="/"> BrandfyUI{' '}</Link>
          <span aria-hidden="true" role="img">
            🚀
          </span>
        </p>
        <p className='w-100  md:w-130  font-light font-bfont text-gray-500 md:mt-6 mt-2 mb-2 md:mb-4 '>
          Free open source Tailwind CSS components for marketing and eCommerce
          websites, as well as application interfaces.
        </p>
        <div className='md:flex items-center justify-between mb-12 '>
          <div className='flex text-sm font-semibold items-center md:gap-4  gap-4 mb-2'> 
            <p className='cursor-pointer'><Link to="/faqs">FAQs</Link></p>
            <p className='cursor-pointer'><Link to="/acknowledgements">Acknowledgements</Link></p>
          </div>
          <div>
            <p className='text-sm '>
              Created by <span className='font-semibold cursor-pointer'><Link to="https://github.com/Tabrezhira">Tabrez Hakimji</Link></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
