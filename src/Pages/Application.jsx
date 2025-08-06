import Application from '../components/CategoryGroup.jsx/Application';
function Home() {
  return (
    <>
      <section className=" mx-auto overflow-y-hidden ">
        <section className=" mx-auto container w-full h-100 md:h-90 flex flex-col items-center justify-center">
          <h1 className=" font-bfont mb-4 text-6xl font-bold">Application</h1>
          <p className=" font-bfont text-gray-700 mb-4 md:mb-6 text-lg text-center font-normal">
            Free Tailwind CSS Application Components
          </p>
          <p className="w-100 px-2 md:px-0 md:w-160 font-bfont text-gray-700 mb-6 font-normal text-base  flex flex-col items-center text-center">
            Working on an CMS, eCommerce platform or admin hub? HyperUI has a
            growing range of application Tailwind CSS components, that will help
            you build an accessible, responsive application for your next
            project.
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
                <span className="text-sm font-medium text-gray-900">
                  No config
                </span>
              </li>
              <li className="inline-flex items-center gap-1">
                <span role="img" aria-hidden="true">
                  ✅
                </span>
                <span className="text-sm font-medium text-gray-900">
                  No setup
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className=" container mx-auto w-full">
          <Application />
        </section>
      </section>
    </>
  );
}

export default Home;
