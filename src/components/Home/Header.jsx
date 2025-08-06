import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className=" flex items-center text-sm  font-medium font-bfont justify-center mx-auto w-full  bg-gray-200 h-10 md:h-14 ">
      <p className=" cursor-pointer">
        <Link to="https://github.com/Tabrezhira/BrandfyUI">Enjoy BrandfyUI? Give it a star on GitHub</Link>
        <span className="text-sm  font-medium" aria-hidden="true" role="img">
          🎉
        </span>
      </p>
    </section>
  );
}

export default Header;
