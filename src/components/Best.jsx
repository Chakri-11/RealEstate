import React, { useState } from 'react';
import Apt1 from './images/commercial.jpg';
import Apt2 from './images/residential.jpg';
import Apt3 from './images/agricultural.jpg';
import Apt4 from './images/Commercial1.webp';
import Apt5 from './images/commercial2.webp';
import Apt6 from './images/residential1.webp';
import Apt7 from './images/residential2.jpg';

const Best = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderImages = () => {
    const imagesByCategory = {
      All: [Apt1, Apt2, Apt3, Apt4, Apt5, Apt6, Apt7],
      Commercial: [Apt1, Apt4, Apt5],
      Residential: [Apt2, Apt6, Apt7],
      Agricultural: [Apt3],
    };

    const images = imagesByCategory[selectedCategory] || [];

    return images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt=''
        className='w-full h-72 rounded-md shadow-md cursor-pointer'
        onClick={() => openModal(image)}
      />
    ));
  };

  return (
    <div className='bg-white p-8 md:p-16'>
      <h1 className='text-2xl md:text-4xl font-bold mb-8 text-center'>Find Best Rated Properties</h1>
      <div className='flex justify-center mb-4'>
        <p
          className={`mx-2 md:mx-4 text-sm md:text-base font-bold cursor-pointer ${
            selectedCategory === 'All' ? 'text-blue-500' : ''
          }`}
          onClick={() => setSelectedCategory('All')}>
          All
        </p>
        <p
          className={`mx-2 md:mx-4 text-sm md:text-base cursor-pointer ${
            selectedCategory === 'Commercial' ? 'text-blue-500' : ''
          }`}
          onClick={() => setSelectedCategory('Commercial')}>
          Commercial
        </p>
        <p
          className={`mx-2 md:mx-4 text-sm md:text-base cursor-pointer ${
            selectedCategory === 'Residential' ? 'text-blue-500' : ''
          }`}
          onClick={() => setSelectedCategory('Residential')}>
          Residential
        </p>
        <p
          className={`mx-2 md:mx-4 text-sm md:text-base cursor-pointer ${
            selectedCategory === 'Agricultural' ? 'text-blue-500' : ''
          }`}
          onClick={() => setSelectedCategory('Agricultural')}>
          Agricultural
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-0'>{renderImages()}</div>
      <button className='btn bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-8 md:mt-12 mx-auto block'>
        View All
      </button>
      {selectedImage && (
        <div className='modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
          <div className='modal max-w-3xl bg-white p-4 rounded-md shadow-md'>
            <img src={selectedImage} alt='' className='w-full h-full object-cover rounded-md' />
            <button
              className='modal-close absolute top-0 right-0 p-4 cursor-pointer bg-white bg-opacity-75'
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Best;


