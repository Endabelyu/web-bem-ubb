import React from 'react';

const bem = () => {
  const openVideo = () => {
    window.open('https://youtu.be/4aw10ZYs9Fk ', '_blank');
  };
  return (
    <div className="my-4 text-center">
      <h1 className="text-2xl bold my-4 md:text-4xl">
        Kembali Mengudara Bersama Energi Baru
      </h1>
      <img src="" alt="" />
      <div
        onClick={openVideo}
        className=" hover:text-sky-400 hover:border-sky-400 w-40 h-14 mx-auto hover:scale-125 delay-75 cursor-pointer text-xl md:text-2xl border-black border rounded-md p-2 m-4"
      >
        BEM KM UBB
      </div>
      <div className="my-4 w-3/5 mx-auto">
        <h2>Visi BEM KM UBB 2022</h2>
        <p>
          Restorasi BEM KM UBB sebagai suluh perjuangan dan Energi Karya dalam
          pengabdian untuk Bangka Belitung dan Indonesia.{' '}
        </p>
      </div>
    </div>
  );
};

export default bem;
