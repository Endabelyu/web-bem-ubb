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
      <p className="font-bold text-2xl md:text-3xl ">
        Kolaborasi 14 Kementerian BEM KM UBB 2022
      </p>
      <ul className="boder-black border rounded">
        <li>
          <img
            className="w-40 h-40"
            src={Images.kemensekneg}
            alt="KEMENSEKNEG"
          />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenkeu} alt="KEMENKEU" />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenlu} alt="KEMENLU" />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemendagri} alt="KEMENDAGRI" />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenpsdm} alt="KEMENPSDM" />
        </li>
        <li>
          <img
            className="w-40 h-40"
            src={Images.kemenkominfo}
            alt="KEMENKOMINFO"
          />
        </li>
        <li>
          <img
            className="w-40 h-40"
            src={Images.kemenadvokesma}
            alt="KEMENADVOKESMA"
          />
        </li>
        <li>
          <img
            className="w-40 h-40"
            src={Images.kemenrisbang}
            alt="KEMENRISBANG"
          />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenper} alt="KEMENPER" />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemensora} alt="KEMENSORA" />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenlh} alt="KEMENLH" />
        </li>
        <li>
          <img
            className="w-40 h-40"
            src={Images.kemenkeu}
            alt="KEMENPAREKRAF"
          />
        </li>
        <li>
          <img
            className="w-40 h-40"
            src={Image.kemenkastrat}
            alt="KEMENKASTRAT"
          />
        </li>
        <li>
          <img className="w-40 h-40" src={Images.kemenagsos} alt="KEMENAGSOS" />
        </li>
      </ul>
    </div>
  );
};

export default kabinet;
