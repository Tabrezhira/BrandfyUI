
const components = import.meta.glob('../../components/AllComponents/application/grids/*.html', {
  eager: true,
  as: 'raw',
});

import Display from '../../utils/Display.jsx';
import { componentPreviewHtml } from '../../utils/transformers.js';

const title = 'Grids';
const descriptions =`Responsive grid layouts and grid systems created with Tailwind CSS v4 for modern web applications. Flexible, SEO-optimized grid components for dashboards, admin panels, and content organization with customizable columns and rows. Perfect for responsive design and CSS grid implementation.`
function Alerts() {
  const componentContainer = 'p-6';
  const wrapper = 'h-[400px]';

  let darkCount = 0;
  let lightCount = 0;

  return (
    <section className="container pr-5 pl-4 md:pr-0 md:pl-0 md:px-0 mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]">
      <h1 className="mt-12 mb-8 text-4xl mx-2 md:mx-0 font-bfont font-extrabold">
        {title} Components
      </h1>
      <p className="w-90 md:w-140 mx-2 md:mx-0 font-bfont font-light leading-relaxed">
        {descriptions}
      </p>
      <div className="container mb-5 mx-2 md:mx-0">
        {Object.entries(components).map(([path, module], index) => {
          const componentHtml = module; // ✅ FIXED
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

export default Alerts;
