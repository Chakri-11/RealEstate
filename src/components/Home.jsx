import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import House from "./images/house.jpg";
const Home = () => {
  return (
    <div className= "bg-opacity-80 bg-black/30 text-g h-screen relative mb-16 flex items-center justify-center">
      <div className='before absolute top-0 left-0 h-full w-full z-[-1]' style={{ backgroundImage: `url(${House})`, backgroundSize: 'cover' }}></div>
      <div className=' text-center max-w-2xl mx-auto p-4'>
        <h1 className='text-4xl md:text-5xl capitalize'>Find the perfect place</h1>
        <p className='search-text text-lg md:text-xl my-6'>
          Search the largest selection of luxury high-rise apartments, multi-family homes, and luxury homes.
        </p>
        <form className='search flex bg-white text-gray-700 border border-gray-300 rounded-md p-1'>
          <div className='flex items-center'>
            <input type='text' placeholder='Enter Keyword..' className='border-none bg-transparent w-36 md:w-full text-base md:text-lg p-2 focus:outline-none' />
          </div>
          <div className='radio flex items-center space-x-5 ml-auto'>
            <input type='radio' checked className='form-radio' />
            <label>Buy</label>
            <input type='radio' className='form-radio' />
            <label>Rent</label>
            <button type='submit' className='bg-gradient-to-r from-purple-600 to-blue-500 border border-purple-600 text-white p-2 rounded-md cursor-pointer'>
              <AiOutlineSearch className='icon' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

