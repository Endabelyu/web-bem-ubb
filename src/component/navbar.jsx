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
      <div className="flex justify-between my-2.5 px-10 ">
        <div>
          <img
            src={Images.logoBEM}
            className=" cursor-pointer object-center h-20  w-20"
            alt="Logo-BEM-UBB"
          />
        </div>
        <ul className=" hidden md:flex justify-between mr-4 align-middle py-5 ">
          <li className="cursor-pointer mx-2 hover:text-sky-400 ">Beranda</li>
          <li className="cursor-pointer mx-2 hover:text-sky-400">
            Tentang Kami
          </li>
          <li className="cursor-pointer mx-2 hover:text-sky-400">Event</li>
          <li className="cursor-pointer mx-2 hover:text-sky-400">News</li>
          <li className="cursor-pointer mx-2 hover:text-sky-400">Kontak</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
