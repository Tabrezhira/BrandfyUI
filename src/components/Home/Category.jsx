import React from 'react'
import Application from '../CategoryGroup.jsx/Application'
import Marketing from '../CategoryGroup.jsx/Marketing'

function Category() {
  return (
    <section className=' container mx-auto w-full'>
        <Application/>
        <Marketing/>
    </section>
  )
}

export default Category