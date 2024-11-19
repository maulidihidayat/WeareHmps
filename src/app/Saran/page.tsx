'use client'
import image from '@/source/image';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div>
      {/* Field for suggestions */}
      <div className="max-w-3xl p-6 mx-auto">
        <div>
          <h1 className="text-[40px] w-full text-secondary font-bold text-center">Kritik & Saran untuk Kami</h1>
          {/* Image for stars */}
          <div className="absolute ml-[700px] space-y-2">
            <Image src={image.Svg1} alt="Star Rating" width={40} height={40} />
          </div>
          <p className="text-success text-[18px] leading-relaxed mt-2">
            Hallo bro & sist! 🙌 Kami super excited banget buat dengerin kritik dan saran dari kalian semua! 
            Jangan ragu, kasih tahu kami pendapat kalian ya! Kita pengen bareng-bareng bikin ini jadi lebih keren!
            Gimana menurut kalian? Yuk, share ide-ide menarik kamu di bawah ini! 🚀🚀
          </p>
        </div>
        <div>
          <form className="flex flex-col mt-4 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-[18px] font-bold text-secondary">Nama Lengkap:</label>
              <input
                type="text"
                id="name"
                required
                className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
                placeholder="Nama Kamu"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[18px] font-bold text-secondary">Email:</label>
              <input
                type="email"
                id="email"
                required
                className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
                placeholder="kamu@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[18px] font-bold text-secondary">Kritik & Saran:</label>
              <textarea
                id="message"
                required
                className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
                rows={4}
                placeholder="Isi kritik dan Saran"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-10"
              >
                Kirim Saran
              </button>
            </div>
          </form>
          {/* End form */}
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default Page;