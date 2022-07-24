import React from 'react';

const footer = () => {
  const urlWebBEM = 'https://bem-ubb.netlify.app/';
  return (
    <div className="p-10 border-t-2 border-gray-400">
      <div className="flex flex-col justify-center ">
        <p className=" text-center text-md">Built With love by BEM KM UBB</p>
        <p className=" text-center text-md">
          C All right Reversed |
          <a href={urlWebBEM} className="ml-2">
            2022
          </a>
        </p>
      </div>
    </div>
  );
};

export default footer;
