import React from 'react';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import Menu from './menu'; 
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-opacity-80 backdrop-filter backdrop-blur-sm bg-NightShadow/30 p-4 border-transparent shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h4 className="text-2xl md:text-3xl lg:4xl ml-0 md:ml-5 lg:ml-20 flex flex-row" id="fnt">
          <SiHomeassistantcommunitystore />
          <span className="text-blue-600 ml-2">Real</span>Estate
        </h4>
        <div className="hidden md:flex md:space-x-5 lg:space-x-20 text-lg font-semibold ">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
        </div>
        <ul className="flex space-x-2 md:space-x-4 lg:pr-10">
           <li className=" md:text-lg font-semibold text-a hover:text-e px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-NightShadow/30">Sign Up</li>
           <Link to='/login'><li className=" md:text-lg font-semibold text-a hover:text-e px-2 py-1 md:px-4 md:py-2 rounded-full hover:bg-NightShadow/30">Sign In</li></Link>
        </ul>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

