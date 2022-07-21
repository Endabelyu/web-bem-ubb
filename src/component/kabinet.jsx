import React from 'react';
import Images from '../assets/images.js';
const kabinet = () => {
  return (
    <div className="my-1 text-center ">
      <img
        className=" mx-auto h-[30rem] w-[30rem]"
        src={Images.logoKabinet}
        alt="Logo Kabinet Energi Biru"
      />
      <p className="mt-4 mb-8 font-bold italic text-2xl text-sky-300 drop-shadow-md shadow-black md:text-3xl ">
        "Kolaborasi 14 Kementerian BEM KM UBB 2022"
      </p>
      <ul className="grid grid-cols-[0.5fr_0.5fr] h-auto w-[500px] mx-auto  border-slate-300 border-dashed  border-4 rounded md:h-auto md:w-auto content-center md:grid-cols-7 md:gap-3">
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemensekneg}
            alt="KEMENSEKNEG"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenkeu}
            alt="KEMENKEU"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenlu}
            alt="KEMENLU"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemendagri}
            alt="KEMENDAGRI"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenpsdm}
            alt="KEMENPSDM"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenkominfo}
            alt="KEMENKOMINFO"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenadvokesma}
            alt="KEMENADVOKESMA"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenrisbang}
            alt="KEMENRISBANG"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenper}
            alt="KEMENPER"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemensora}
            alt="KEMENSORA"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenlh}
            alt="KEMENLH"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenkeu}
            alt="KEMENPAREKRAF"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenkastrat}
            alt="KEMENKASTRAT"
          />
        </li>
        <li>
          <img
            className="w-40 h-40 block mx-auto"
            src={Images.kemenagsos}
            alt="KEMENAGSOS"
          />
        </li>
      </ul>
    </div>
  );
};

export default kabinet;
