import React from 'react';
import { SiLinktree } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { FiSearch } from 'react-icons/fi';
import Images from '../assets/images.js';

const navbar = () => {
  return (
    <div className="p-2 shadow-lg top-0 left-0">
      <div className="flex  justify-between my-2">
        <ul className="flex ">
          <li>
            <SiYoutube className=" hover:text-red-600 cursor-pointer  mx-4 text-xl" />
          </li>
          <li>
            <SiLinktree className=" hover:text-green-600 hover:drop-shadow-md cursor-pointer mx-4 text-xl" />
          </li>
          <li>
            <SiInstagram className="ig hover:text-fuchsia-500 cursor-pointer mx-4 text-xl" />
          </li>
        </ul>
        <FiSearch className="hover:text-sky-400 cursor-pointer mx-4 text-xl" />
      </div>
      <hr className="bg-bg-zinc-500" />
      <div className="md:flex justify-between my-2.5 md:px-36 ">
        <div className="md:mr-[80px]">
          <img
            src={Images.logoBEM}
            className=" cursor-pointer md:object-center w-16 h-16 ml-10 md:h-20  md:w-20"
            alt="Logo-BEM-UBB"
          />
        </div>
        <ul className=" hidden md:flex justify-around w-full align-middle py-5">
          <li className="cursor-pointer  hover:text-sky-400 ">Beranda</li>
          <li className="cursor-pointer  hover:text-sky-400">Tentang Kami</li>
          <li className="cursor-pointer  hover:text-sky-400">Event</li>
          <li className="cursor-pointer  hover:text-sky-400">News</li>
          <li className="cursor-pointer  hover:text-sky-400">Kontak</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
