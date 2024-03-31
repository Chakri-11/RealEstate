import React, { useState } from 'react';
import Info from './info';
import House from '../images/house1.jpg';
import Bed1 from '../images/bed1.jpg';
import Bed2 from '../images/bed2.jpg';
import Kitchen from '../images/kitchen.jpg';
import Bathroom from '../images/bathroom.jpg';

const House1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='py-1'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen gap-2 md:py-2 px-8 md:px-16'>
        <div className='bg-red-300'>
          <img
            src={House}
            alt='House1'
            className='w-full h-full object-cover cursor-pointer'
            onClick={() => openModal(House)}
          />
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='bg-black'>
            <img
              src={Bed1}
              alt='Bed1'
              className='w-full h-full object-cover cursor-pointer'
              onClick={() => openModal(Bed1)}
            />
          </div>
          <div className='bg-gray-500'>
            <img
              src={Bed2}
              alt='Bed2'
              className='w-full h-full object-cover cursor-pointer'
              onClick={() => openModal(Bed2)}
            />
          </div>
          <div className='bg-black'>
            <img
              src={Kitchen}
              alt='Kitchen'
              className='w-full h-full object-cover cursor-pointer'
              onClick={() => openModal(Kitchen)}
            />
          </div>
          <div className='bg-gray-500'>
            <img
              src={Bathroom}
              alt='Bathroom'
              className='w-full h-full object-cover cursor-pointer'
              onClick={() => openModal(Bathroom)}
            />
          </div>
        </div>
      </div>
      <Info />
      {selectedImage && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-md bg-black bg-opacity-50'>
          <img
            src={selectedImage}
            alt='Selected'
            className='max-w-full max-h-full cursor-pointer'
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default House1;

