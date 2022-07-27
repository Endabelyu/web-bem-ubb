import React from 'react';
import { SiLinktree } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { FiSearch } from 'react-icons/fi';
import { BsInfoLg } from 'react-icons/bs';
import { ImNewspaper } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { MdPermContactCalendar } from 'react-icons/md';
import Images from '../assets/images.js';
import { Link } from 'react-scroll';

const navbar = () => {
  return (
    <div className="p-2 shadow-xl top-0 left-0 bg-[#ffff] fixed z-10 w-full">
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
        <ul className=" hidden md:flex justify-around text-[#4E5166] w-[90%] align-middle py-5">
          <li className="cursor-pointer  hover:text-sky-400 ">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              <IoHome className="inline text-2xl mr-2 align-top" /> Beranda
            </Link>
          </li>
          <li className="cursor-pointer  hover:text-sky-400">
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsInfoLg className="inline align-top text-xl" /> Tentang Kami
            </Link>
          </li>
          <li className="cursor-pointer  hover:text-sky-400">
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <MdOutlineEventAvailable className="inline text-2xl mr-2 align-top" />
              Event
            </Link>
          </li>
          <li className="cursor-pointer  hover:text-sky-400">
            <ImNewspaper className="inline text-2xl mr-2 align-top" />
            News
          </li>
          <li className="cursor-pointer  hover:text-sky-400">
            <Link
              activeClass="active"
              to="kontak"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <MdPermContactCalendar className="inline text-2xl mr-2 align-top" />
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
