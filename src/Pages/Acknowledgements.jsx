import { Link } from 'react-router-dom';

function Acknowledgements() {
  return (
    <div className="container w-xl pr-5 pl-4 md:pr-0 md:pl-0 md:px-0 mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]">
      <h1 className="font-bfont text-4xl font-black mt-12 mb-8">
        Project Acknowledgements
      </h1>
      <p className="font-bfont font-light">
        This list does not include all of the tools and libraries used to create
        BrandfyUI, but it does highlight those that may otherwise go unnoticed,
        despite their significant contribution to the project.
      </p>
      <ul className="list-disc font-bfont underline font-semibold flex flex-col gap-4 mt-6 pl-5">
        <Link to="https://www.hyperui.dev"><li className=' cursor-pointer'>HyperUI</li></Link>
        <Link to="https://react.dev"><li className=' cursor-pointer'>React</li></Link>
        <Link to="https://github.com/rehypejs"><li className=' cursor-pointer'>Rehype</li></Link>
        <Link to="https://github.com/PrismJS/prism"><li className=' cursor-pointer'>PrismJS</li></Link>
        <Link to="https://github.com/streamich/react-use"><li className=' cursor-pointer'>React Use</li></Link>
        <Link to="https://tailwindcss.com"><li className=' cursor-pointer'>TailwindCSS</li></Link>
      </ul>
    </div>
  );
}

export default Acknowledgements;
