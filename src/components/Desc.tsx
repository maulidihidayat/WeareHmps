import image from "@/source/image";
import React from "react";
import Image from "next/image";


const Desc= () => {
  return (
    <div>
        <Image src={image.smile2} alt="Stars decoration" className="absolute " />
      <div className="flex justify-center items-center w-[888px] h-[198px] rounded-2xl border-b-[7px] mt-16 mx-[20%] bg-bgproduksekunder border-2 border-secondary ">
        <Image src={image.gambar3} alt="afs" width={144} height={140} />
        <div className="p-8 max-w-lg ">
          <h1 className="text-[25px] font-semibold text-primary  ">
            Apa HMPS Pendidikan Informatika?
          </h1>
          <p className="text-[16px] text-success mt-4">
            HMPS adalah Himpunan Mahasiswa Pendidikan Informatika yang mewadahi
            kegiatan mahasiswa jurusan Pendidikan Informatika Universitas
            Hamzanwadi.
          </p>
        </div>
      </div>

      {/* visi misi */}
    </div>
  );
};

export default Desc;
