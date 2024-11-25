import Navbar from "@/components/Navbar";
import Image from "next/image";
import image from "@/source/image";
import Desc from "@/components/Desc";
import Visimisi from "@/components/Visimisi";
import Devision from "@/components/Devision";
import YoutubeBanner from "@/components/YoutubeBanner";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
export default function Home({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Main />
      {/* Halaman Utaman */}
      {/* end */}
      <main className="flex justify-center items-center">
        <Image
          src={image.gambar2}
          alt="Descriptive alt text" // Provide a meaningful alt text
          width={3416}
          height={1282.6}
          className="object-cover" // Optional: Add any additional styling
        />
      </main>
      {/* deskripsi pendidikan informatika */}

      <Desc />

      {/* end */}
      <div className="flex justify-center mt-28 bg-bgproduk h-64 p-8 border-2 border-secondary border-b-[7px]">
        <Visimisi
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
          nama="Visi"
        />
        <Visimisi
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
          nama="Misi"
        />
      </div>
      {/* Devision */}
      <Image
        src={image.star}
        alt="Stars decoration"
        className="absolute mt-96 "
      />
      <Image
        src={image.star}
        alt="Stars decoration"
        className="absolute right-0  mt-20"
      />
      <h1 className="text-[40px] text-secondary font-bold mt-32 text-center  ">
        Devisi Kami di{" "}
        <span className="text-primary">Hmps Pendidikan Informatika</span>
      </h1>
      <div className="flex gap-4 p-10 mt-2">
        <h1 className="fixed">Devisi</h1>
        <Devision
          gambar={image.Svg1}
          judul="Keagamaan"
          keterangan="Devisi yang berfokus pada kegiatan yang berkaitan dengan keagamaan "
          ketua="Berbudaya Santri"
        />
        <Devision
          gambar={image.Svg1}
          judul="Humas"
          keterangan="Devisi yang berfokus pada pendekatan kepada masyarakat pada umumnya"
          ketua="Kerja Kerja Kerja"
        />
        <Devision
          gambar={image.Svg1}
          judul="Sosial"
          keterangan="Devisi yang berfokus pada kegiatan di masyarakat dan terjun langsung"
          ketua="In harmonia"
        />
        <Devision
          gambar={image.Svg1}
          judul="Medinfo"
          keterangan="Devisi yang berfokus pada media informasi Hmps Pendidikan Informatika "
          ketua="Available"
        />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-[40px] text-primary font-bold mt-10  ">
          Jargon Kami
        </h1>
        <p className="text-success text-[18px] leading-relaxed">
          Berinovasi , Berkontribusi dan Berprestasi
        </p>
      </div>

      <div className="text-center mt-28">
        <h1 className="text-[40px] text-primary font-bold mt-10  ">
          Hmps Pendidikan Informatika di{" "}
          <span className="text-secondary">Youtube</span>
        </h1>
        <div className="flex justify-center gap-4 mt-4 ">
          <YoutubeBanner source="https://www.youtube.com/embed/a_iQqN1Hp74?si=A_3FDBsaz781LBFv" />
          <YoutubeBanner source="https://www.youtube.com/embed/wYzEwB7XDGE?si=i3PxBaLbEHuzux7C" />
        </div>
        <div className="flex justify-center gap-4 mt-4 mb-28">
          <YoutubeBanner source="https://www.youtube.com/embed/eLpdtQJ8qMU?si=0yTvwwq0jpsPa6bE" />
          <YoutubeBanner source="https://www.youtube.com/embed/hc11T89sGt0?si=AF_yv6llTwbwc2BW" />
        </div>
      </div>
      <Footer className="" />
    </div>
  );
}
