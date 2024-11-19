import image from "@/source/image";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className=" flex items-start justify-normal">
      <Image
        src={image.star}
        alt="Stars decoration"
        className="absolute ml-10"
      />
      <Image
        src={image.star}
        alt="Stars decoration"
        className="absolute right-0"
      />
      <div className="flex items-center h-screen p-20 ">
        <div className="p-10">
          <h3 className="text-6xl font-bold text-secondary">
            Bingung Milih Organisasi Kampus?
          </h3>
          <h3 className="text-6xl font-bold text-secondary"></h3>
          <h3 className="text-5xl font-bold text-primary">
            Hmps Pendidikan Informatika Solusinya!
          </h3>
          <Image
            src={image.smile2}
            alt="Stars decoration"
            className="absolute right-0"
          />

          <div className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              width="300"
              height="20"
            >
              <path
                d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                fill="none"
                stroke="purple"
                strokeWidth="25"
                strokeDasharray="500"
                strokeDashoffset="500"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="500"
                  to="0"
                  dur="3s"
                  fill="freeze"
                  begin="2s; fadeOut.end + 2s"
                  id="draw"
                />
                <animate
                  attributeName="opacity"
                  values="1;0"
                  dur="4s"
                  fill="freeze"
                  begin="draw.end"
                  id="fadeOut"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="500"
                  dur="0s"
                  fill="freeze"
                  begin="fadeOut.end + 2s"
                />
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0s"
                  fill="freeze"
                  begin="fadeOut.end + 2s"
                />
              </path>
            </svg>
          </div>

          <h3 className="mt-4 text-lg font-bold text-success">
            Yuk gabung menjadi salah satu bagian dari HMPS Pendidikan
            Infomratika Universitas Hamzanwadi
          </h3>

          <div className="flex items-center mt-4 search-container">
            <button className="bg-primary flex items-center space-x-2 text-white px-4  py-3  rounded-2xl border-b-[7px] border-secondary border-2 duration-all duration-300 hover:border-b-[8px]">
              <a className="font-bold text-white text-[18px]" href="#">
                Selengkapnya{" "}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-arrow-right"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="m12 16 4-4-4-4" />
              </svg>
            </button>
            <p className="text-[#18181B] font-semibold mx-4">
              Mari bergabung menjadi salah satu bagian dari kami 🚀
            </p>
          </div>
        </div>
        <div>
          <img src="/asset/Stars-1.svg" alt="" className="absolute p-2" />
          <Image src={image.gambar3} alt="hallo" />
        </div>
        <img
          src="/asset/Avatar (1).svg"
          alt=""
          className="absolute right-0 p-2"
        />
      </div>
    </section>
  );
};

export default Home;
