import React from 'react'
import Components from '../components/AlertsComponents/Components'

function Alerts() {
  return (
    <section className=' container mx-auto mt-7 min-h-[calc(100vh-360px)] md:min-h-[calc(100vh-440px)]'>
      <h1 className='mt-12 mb-8 text-4xl font-bfont font-extrabold'>Alert Components</h1>
      <p className='w-140 font-bfont font-light leading-relaxed'>Selection of responsive Alert components for Tailwind CSS v4 applications. These notification elements display important messages, warnings, success feedback, and error alerts with customizable styles.</p>
      <div className='container mb-5'>
        <Components/>
      </div>
    </section>
  )
}

export default Alerts