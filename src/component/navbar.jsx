import React from 'react';
import { SiLinktree } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { FiSearch } from 'react-icons/fi';
import LogoBem from '../assets/LOGO BEM/LOGO BEM UBB.jpg';
const navbar = () => {
  return (
    <div className="p-2 bg-sky-400">
      <div className="flex  justify-between my-2">
        <ul className="flex ">
          <li>
            <SiYoutube className=" hover:text-red-800 cursor-pointer  mx-4 text-xl" />
          </li>
          <li>
            <SiLinktree className=" hover:text-green-600 hover:drop-shadow-md cursor-pointer mx-4 text-xl" />
          </li>
          <li>
            <SiInstagram className="ig hover:text-fuchsia-500 cursor-pointer mx-4 text-xl" />
          </li>
        </ul>
        <FiSearch className="hover:text-slate-300  cursor-pointer mx-4 text-xl" />
      </div>
      <hr className="bg-bg-zinc-500" />
      <div className="flex justify-between my-2.5 px-10 ">
        <div>
          <img
            src={LogoBem}
            className="rounded-full cursor-pointer object-cover h-24 w-24"
            alt="Logo-BEM-UBB"
          />
        </div>
        <ul className="flex justify-between mr-4 align-middle py-5 ">
          <li className="cursor-pointer mx-2 hover:text-emerald-50 ">
            Beranda
          </li>
          <li className="cursor-pointer mx-2 hover:text-emerald-50">
            Tentang Kami
          </li>
          <li className="cursor-pointer mx-2 hover:text-emerald-50">Event</li>
          <li className="cursor-pointer mx-2 hover:text-emerald-50">News</li>
          <li className="cursor-pointer mx-2 hover:text-emerald-50">Kontak</li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
