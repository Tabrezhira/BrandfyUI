const components = import.meta.glob(
  '../../components/AllComponents/application/details-list/*.html',
  {
    eager: true,
    import: 'default',
    query: '?raw',
  }
);

import Display from '../../utils/Display.jsx';
import { componentPreviewHtml } from '../../utils/transformers.js';
const title = 'Details Lists';
function DetailsLists() {
  const componentContainer = 'p-6 max-w-3xl mx-auto';
   let darkCount = 0;
  let lightCount = 0;
  const wrapper = 'h-[400px]';

  return (
    <section className="container pr-5 pl-4 md:pr-0 md:pl-0 md:px-0 mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]">
      <h1 className="mt-12 mb-8 text-4xl mx-2 md:mx-0 font-bfont font-extrabold">
        {title} Components
      </h1>
      <p className="w-90 md:w-140 mx-2 md:mx-0 font-bfont font-light leading-relaxed">
        Responsive and customizable details list components for displaying
        structured data. Built with Tailwind CSS v4, these lists feature striped
        rows, borders, and dark mode support for modern web applications and
        dashboards. Optimized for SEO, accessibility, and mobile usability.
      </p>
      <div className="container mb-5 mx-2 md:mx-0">
        {Object.entries(components).map(([path, module], index) => {
          const componentHtml = module;
          const name = path.split('/').pop().replace('.html', '');
          const previewDark = name.includes('dark');

          const transformedHtml = componentPreviewHtml(
            componentHtml,
            componentContainer
          );
                     // Generate name like Badges, Badges1, BadgesDark, BadgesDark1
          let displayName = title;
          if (previewDark) {
            displayName += ' Dark ' + (darkCount > 0 ? darkCount : '');
            darkCount++;
          } else {
            displayName += lightCount > 0 ? lightCount : '';
            lightCount++;
          }
          return (
            <Display
              key={index}
              Component={transformedHtml}
              name={displayName} 
              previewDark={previewDark}
              previewWidth="100%"
              previewHeight={wrapper}
              plainCode={componentHtml}
            />
          );
        })}
      </div>
    </section>
  );
}

export default DetailsLists;
