
import Marketing from '../components/CategoryGroup.jsx/Marketing';

function Home() {
  return (
    <>
      <section className=" mx-auto overflow-y-hidden ">
                <section className=" mx-auto container w-full h-100 md:h-90 flex flex-col items-center justify-center">
      <h1 className=" font-bfont mb-4 text-6xl font-bold">Marketing</h1>
      <p className=" font-bfont text-gray-700 mb-4 md:mb-6 text-lg text-center font-normal">
        Free Tailwind CSS Marketing Components
      </p>
      <p className="w-100 px-2 md:px-0 md:w-160 font-bfont text-gray-700 mb-6 font-normal text-base  flex flex-col items-center text-center">
        Build your next marketing website with ease through the use of Tailwind CSS and HyperUI components. These components are not exclusive to marketing websites, but they will help you rapidly build your next marketing website.
        <br />
      </p>
      <div>
        <ul className="flex items-center justify-center gap-6">
          <li className="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span className="text-sm font-medium text-gray-900">
              No install
            </span>
          </li>
          <li className="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span className="text-sm font-medium text-gray-900">No config</span>
          </li>
          <li className="inline-flex items-center gap-1">
            <span role="img" aria-hidden="true">
              ✅
            </span>
            <span className="text-sm font-medium text-gray-900">No setup</span>
          </li>
        </ul>
      </div>
    </section>
        <section className=' container mx-auto w-full'>
          <Marketing/>
        </section>
      </section>
    </>
  );
}

export default Home;
