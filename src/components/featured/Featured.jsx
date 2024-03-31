import React from 'react';

import House1 from './house1';
import House2 from './house2';

const Featured = () => {
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-bold mb-8 text-center'>Top Featured Listings</h1>
      <p className='flex justify-center mb-4'>Selected listings by City, State, & Zip based on views.</p>
      <House1/>
      <House2/>
    </div>
  );
};

export default Featured;

