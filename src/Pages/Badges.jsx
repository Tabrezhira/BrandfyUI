const components = import.meta.glob(
  '../components/AllComponents/Badges/*.html',
  {
    eager: true,
    as: 'raw',
  }
);

import Display from '../utils/Display.jsx';
import { componentPreviewHtml } from '../utils/transformers.js';

function Badges() {
  const componentContainer = 'p-6 flex flex-wrap justify-center gap-4';
  const wrapper = 'h-[200px]';

  return (
    <section className="container pr-5 pl-4 md:pr-0 md:pl-0 md:px-0 mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]">
      <h1 className="mt-12 mb-8 text-4xl mx-2 md:mx-0 font-bfont font-extrabold">
        Badge Components
      </h1>
      <p className="w-90 md:w-140 mx-2 md:mx-0 font-bfont font-light leading-relaxed">
        Responsive badge and tag components for Tailwind CSS v4. These
        customizable UI elements include base badges, icon badges, dismissible
        badges, and themed variations—ideal for notifications, statuses, and
        labels in web applications and dashboards. Optimized for SEO and
        accessibility.
      </p>
      <div className="container mb-5 mx-2 md:mx-0">
        {Object.entries(components).map(([path, module], index) => {
          const componentHtml = module; // ✅ FIXED
          const name = path.split('/').pop().replace('.html', '');
          const previewDark = name.includes('Dark');

          const transformedHtml = componentPreviewHtml(
            componentHtml,
            componentContainer
          );
          return (
            <Display
              key={index}
              Component={transformedHtml}
              name={name}
              previewDark={previewDark}
              previewWidth="100%"
              previewHeight= {wrapper}
              plainCode={componentHtml}
              pHeight={wrapper}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Badges;
