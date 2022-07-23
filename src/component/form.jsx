import React from 'react';
import { IoMdPin } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
const form = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-10 text-center p-6">
      <h1 className=" col-span-2 font-bold text-2xl tracking-wide text-sky-400">
        Kontak Kami
      </h1>
      <div className="grid  grid-cols-2 text-left col-span-2 py-4 md:col-span-1 w-[550px] md:w-full mx-auto md: px-4 ">
        <p className="tracking-wide my-4  text-xl">
          <span className="mr-4">
            <IoCall className="inline-block align-top text-2xl text-sky-500 " />
          </span>
          0821-7980-8274
        </p>
        <p className="tracking-wide my-4 text-xl">
          <span className="mr-4">
            <MdEmail className="inline-block align-top text-2xl text-sky-500 " />
          </span>
          bemkmubb@gmail.com
        </p>
        <p className="col-span-2  tracking-wide text-center my-2 text-lg md:text-left w-auto">
          <span>
            <IoMdPin className="inline-block text-left align-top text-2xl mr-4  text-sky-500" />
          </span>
          Balai Ormawa, Kampus Terpadu Universitas Bangka Belitung. Balunijuk,
          Kabupaten Bangka, Provinsi Kepulauan Bangka Belitung
        </p>
      </div>
      <div className="col-span-2 border rounded-md shadow-md p-6 md:col-span-1 md:w-full">
        <form className="grid">
          <h2 className="text-lg font-bold">Send Mesage</h2>
          <label />
          <input
            className="col-span-1 my-2 border border-slate-400 p-2 rounded-md focus:outline-sky-300"
            placeholder="Nama"
          />
          <input
            className="col-span-1 my-2 border border-slate-400 p-2 rounded-md focus:outline-sky-300"
            placeholder="Email"
          />
          <textarea
            className="col-span-1 my-2 border border-slate-400 p-2 rounded-md focus:outline-sky-300"
            placeholder="Tulis Pesan Disini"
          />
          <button className=" font-bold text-slate-50 bg-sky-400 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default form;
