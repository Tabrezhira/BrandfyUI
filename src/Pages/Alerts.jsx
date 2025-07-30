import React from 'react'
import Components1 from '../components/AlertsComponents/Components1'
import Components from '../components/AlertsComponents/Components'
function Alerts() {
  return (
    <section className='container mx-auto mt-7  min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]'>
      <h1 className='mt-12 mb-8 text-4xl mx-2 md:mx-0 font-bfont font-extrabold'>Alert Components</h1>
      <p className='w-90 md:w-140 mx-2 md:mx-0 font-bfont font-light leading-relaxed'>Selection of responsive Alert components for Tailwind CSS v4 applications. These notification elements display important messages, warnings, success feedback, and error alerts with customizable styles.</p>
      <div className='container mb-5 mx-2 md:mx-0'>
        <Components/>
      </div>
    </section>
  )
}

export default Alerts