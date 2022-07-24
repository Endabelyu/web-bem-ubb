import React from 'react';

const footer = () => {
  const BEM = {
    url: 'https://bem-ubb.netlify.app/',
    target: '_blank',
  };

  return (
    <div className="p-10 border-t-2 border-gray-400">
      <div className="flex flex-col justify-center ">
        <p className=" text-center text-md">
          Made With love by
          <a href={BEM.url} target={BEM.target} className="ml-2">
            BEM KM UBB
          </a>
        </p>
        <p className=" text-center text-md">C All right Reversed | 2022</p>
      </div>
    </div>
  );
};

export default footer;
