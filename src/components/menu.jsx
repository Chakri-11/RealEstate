import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiHome } from 'react-icons/ti';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { IoCloseOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function menu()
  {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <div className="b cursor-pointer" onClick={menu}>
        <GiHamburgerMenu className="size-5" />
      </div>
      {isMenuOpen?<div className="bg-gray-800/60 fixed h-screen w-full z-10 top-0 right-0">
      </div>:''}
      <div className={isMenuOpen?'fixed top-0 right-0 w-[300px] h-screen bg-gray-100 z-10 duration-200 border-b':'fixed top-0 right-[-100%] w-[0px] h-screen bg-gray-100 z-10 duration-200 border-b'}>
          <div className="shadow-lg py-4 bg-blue-100">
              <IoCloseOutline size={30} className="hover:bg-blue-300 rounded-full cursor-pointer left-1 top-5 absolute" onClick={menu}/>
              <h2 style={{color:"#6082B6"}} className="text-2xl font-semibold pl-14">RealEstate
              <span className="pl-14 text-lg"><Link to='/login'><a href="https://amazon.in" className="p-1 px-2 rounded-lg border-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out duration-500">log in</a></Link></span>
              </h2>
          </div>
          <div>
              <ul className="flex flex-col p-4 text-gray-800">
                  <li className="text-xl py-3 flex">
                  <TiHome size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  Home
                  </li>
                  <li className="text-xl py-3 flex">
                  < BsPatchQuestionFill size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  About Us
                  </li>
                  <li className="text-xl py-3 flex">
                  <IoMdMail size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  Contact Us
                  </li>
                  <li className="text-xl py-3 flex">
                  <FaQuestionCircle size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  Services
                  </li>
                  <li className="text-xl py-3 flex">
                  <FaQuestionCircle size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  FAQs/Need Help
                  </li>
                  <li className="text-xl py-3 flex">
                  <FaQuestionCircle size={25} className="mr-4 mt-0.5" style={{color:"#4682B4"}}/>
                  FAQs/Need Help
                  </li>
              </ul>
          </div>
      </div>
    </div>
  );
};
export default Menu;