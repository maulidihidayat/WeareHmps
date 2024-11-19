import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Devisionprops {
  gambar : string | StaticImageData;
  judul : string;
  keterangan : string;
  ketua : string;
  
}

const Devision : React.FC<Devisionprops> = ({gambar, judul , keterangan, ketua }) => {
  return (
    <div className="p-4 w-96 border-4 shadow-md rounded-3xl border-secondary bg-bgproduk">
        
      <Image
        src={gambar}
        alt="Keripik Nanas"
        width={50}
        height={50}
        className="mx-auto"
      />
      <h3 className="text-[30px] text-secondary font-bold text-center">
        {judul}
      </h3>
      <p className="text-success text-[18px] leading-relaxed mt-2 max-w-lg mx-auto text-center">
        {keterangan}
      </p>
      <p className="mt-2 text-lg font-bold text-success text-center">
        {ketua}
      </p>
      <Link href={"/aboutUs"}>
      <button className="bg-primary text-white px-4 py-3 mt-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 mx-auto block">
        Selengkapnya
      </button>
      </Link>
    </div>
  );
};

export default Devision;
