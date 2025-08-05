import React from 'react'
const components = import.meta.glob('../components/AlertsComponents/*.jsx', { eager: true });
import Display from '../utils/Display'


function Alerts() {
  return (
    <section className='container mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]'>
      <h1 className='mt-12 mb-8 text-4xl mx-2 md:mx-0 font-bfont font-extrabold'>Alert Components</h1>
      <p className='w-90 md:w-140 mx-2 md:mx-0 font-bfont font-light leading-relaxed'>Selection of responsive Alert components for Tailwind CSS v4 applications. These notification elements display important messages, warnings, success feedback, and error alerts with customizable styles.</p>
      <div className='container mb-5 mx-2 md:mx-0'>
        {Object.entries(components).map(([path, module], index) => {
          const Component = module.default;
          const name = path.split('/').pop().replace('.jsx', '');
          const previewDark = name.endsWith('D');
          return (
            <Display key={index} Component={Component} name={name} previewDark={previewDark}/>
          );
        })}
      </div>
    </section>
  )
}

export default Alerts