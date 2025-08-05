import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import Header from '../components/Home/Header';
import Display from '../utils/Display';
import Components1 from './Components1';
import test from '../components/AlertsComponents/Test';
function Components() {
  const [viewportSize, setViewportSize] = useState('mobile');

  const sizes = {
    mobile: 'w-[340px]',
    small: 'w-[640px]',
    medium: 'w-[768px]',
    large: 'w-[1024px]',
    full: 'w-full'
  };

  return (
    <section className="container mx-auto">
      
    {/* <Components1 Component={test} name={"Base"}/>
    <Display Component={test} name={"Base"} /> */}
    </section>
  );
}

export default Components;
