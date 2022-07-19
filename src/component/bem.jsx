import React from 'react';

const bem = () => {
  const openVideo = () => {
    window.open('https://youtu.be/4aw10ZYs9Fk ', '_blank');
  };
  return (
    <div className="my-4 text-center">
      <h1 className=" text-blue-900 font-'Montserrat' text-2xl font-bold my-4 md:text-4xl">
        Kembali Mengudara Bersama Energi Baru
      </h1>
      <img src="" alt="" />
      <div
        onClick={openVideo}
        className="  w-36 h-12 mx-auto hover:scale-125 delay-75 cursor-pointer text-xl  border-black border rounded-md p-2 m-4 md:text-2xl md:w-44 hover:text-sky-400 hover:border-sky-400"
      >
        BEM KM UBB
      </div>
      <div className="my-4 w-3/5 mx-auto p-4 border-black border rounded-md">
        <h2 className="font-bold">Visi BEM KM UBB 2022</h2>
        <p className="italic">
          "Restorasi BEM KM UBB sebagai suluh perjuangan dan Energi Karya dalam
          pengabdian untuk Bangka Belitung dan Indonesia."
        </p>
      </div>
    </div>
  );
};

export default bem;
