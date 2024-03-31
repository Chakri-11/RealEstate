import React, { useState } from 'react';
import Info from './info';
import HouseImage from '../images/house2.jpg';
import Bed1Image from '../images/bed3.jpg';
import Bed2Image from '../images/bed4.jpg';
import BathroomImage from '../images/bathroom1.jpg';
import LivingRoomImage from '../images/livingRoom.jpg';

const House2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen gap-2 md:py-2 px-8 md:px-16'>
        <div className='md:grid-span-2 gap-2 grid md:grid-rows-2'>
          <div className='grid gap-2 grid-cols-2'>
            <div className='bg-black'>
              <img
                src={Bed1Image}
                alt='Bed1'
                className='w-full h-full object-cover cursor-pointer'
                onClick={() => openModal(Bed1Image)}
              />
            </div>
            <div className='bg-gray-500'>
              <img
                src={Bed2Image}
                alt='Bed2'
                className='w-full h-full object-cover cursor-pointer'
                onClick={() => openModal(Bed2Image)}
              />
            </div>
          </div>
          <div className='grid gap-2 grid-cols-2'>
            <div className='bg-black'>
              <img
                src={LivingRoomImage}
                alt='LivingRoom'
                className='w-full h-full object-cover cursor-pointer'
                onClick={() => openModal(LivingRoomImage)}
              />
            </div>
            <div className='bg-gray-500'>
              <img
                src={BathroomImage}
                alt='Bathroom'
                className='w-full h-full object-cover cursor-pointer'
                onClick={() => openModal(BathroomImage)}
              />
            </div>
          </div>
        </div>
        <div className='bg-red-300 md:grid-span-2'>
          <img
            src={HouseImage}
            alt='House2'
            className='w-full h-full object-cover cursor-pointer'
            onClick={() => openModal(HouseImage)}
          />
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

export default House2;

