import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' bg-gray-100 p-8'>
      <div className='flex justify-center text-center py-10'>
        <FaFacebook size={35} className='icon text-2xl mx-3 text-indigo-700' />
        <FaInstagram size={35} className='icon text-2xl mx-3 text-indigo-700' />
        <FaTwitter size={35} className='icon text-2xl mx-3 text-indigo-700' />
        <FaPinterest size={35} className='icon text-2xl mx-3 text-indigo-700' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='col mx-auto'>
          <h3 className='mb-4 text-xl font-semibold'>About</h3>
          <p className='mb-2'>Company</p>
          <p className='mb-2'>Details</p>
          <p className='mb-2'>Planning</p>
          <p>About Us</p>
        </div>
        <div className='col mx-auto'>
          <h3 className='mb-4 text-xl font-semibold'>Company</h3>
          <p className='mb-2'>Company</p>
          <p className='mb-2'>Details</p>
          <p className='mb-2'>Planning</p>
          <p>About Us</p>
        </div>
        <div className='col mx-auto'>
          <h3 className='mb-4 text-xl font-semibold'>Legal</h3>
          <p className='mb-2'>Company</p>
          <p className='mb-2'>Details</p>
          <p className='mb-2'>Planning</p>
          <p>About Us</p>
        </div>
        <div className='col mx-auto'>
          <h3 className='mb-4 text-xl font-semibold'>Information</h3>
          <p className='mb-2'>Company</p>
          <p className='mb-2'>Details</p>
          <p className='mb-2'>Planning</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

