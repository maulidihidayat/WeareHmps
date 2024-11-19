// pages/news.js
import image from "@/source/image"
import Image from "next/image";
import React from "react";

const newsData = [
  {
    title: "Kegiatan PKKMB Mahasiswa Baru",
    content:
      "Yo, untuk semua mahasiswa baru Prodi Informatika! Kita bakal ngadain acara PBAK, alias Pengenalan Budaya Akademik dan Kemahasiswaan. Ini kesempatan buat kalian buat kenalan, seru-seruan, dan ngebangun semangat bareng di kampus! Jangan sampai ketinggalan, ya!",
    date: "23 Agustus 2024",
  },
  {
    title: "Workshop Ui/Ux",
    content:
      "Hey, teman-teman mahasiswa baru! 🌟 Kalian pasti udah nggak sabar untuk memulai petualangan di dunia Informatika, kan? Nah, ada kabar gembira nih! Kita bakal ngadain workshop seru tentang UI/UX Design yang wajib kalian ikuti!",
    date: "16 September 2024",
  },
  {
    title: "Diesnatalis Pendidikan Informatika",
    content:
      "Kami dengan bangga mengumumkan bahwa kita akan merayakan Dies Natalis Prodi Informatika yang ke-[angka tahun]! Ini adalah momen spesial untuk kita semua, di mana kita bisa merayakan pencapaian, berbagi pengalaman, dan memperkuat solidaritas antar mahasiswa dan dosen.",
    date: "26 Oktober 2024",
  },
];

const News = () => {
  return (
    <div>
      <div className="min-h-screen  max-w-5xl flex flex-col mx-auto">
      <Image
            src={image.smile2}
            alt="Stars decoration"
            className="absolute right-0"
          />
        <header className="bg-bgproduk font-bold text-Secondary py-4">
        <Image
            src={image.vektor}
            alt="Stars decoration"
            className="absolute ml-32"
          />
          <h1 className="text-[40px] text-center mt-4">
            Berita HMPS Pendidikan Informatika
          </h1>
        </header>
        <main className=" mx-auto p-4  ">
          <section>
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 mb-4 transition-transform transform  border-4 border-secondary border-b-[7px] hover:border-b-[10px]"
              >
                <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                <p className="text-secondary mb-4">{news.content}</p>
                <p className="text-background text-sm">{news.date}</p>
              </div>
            ))}
          </section>
          <Image
            src={image.star2}
            alt="Stars decoration"
            className="absolute right-0 mr-20 mt-96"
          />
          <Image
            src={image.star}
            alt="Stars decoration"
            className="absolute right-0"
          />
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {newsData.map((news, index) => (
              <div key={index} className="max-w-sm">
                <div className="bg-white rounded-3xl p-6 mb-4 transition-transform transform border-4 border-secondary border-b-[7px] hover:border-b-[10px]">
                  <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                  <p className="text-secondary mb-4">{news.content}</p>
                  <p className="text-background text-sm">{news.date}</p>
                </div>
              </div>
            ))}
          </section>

          {/* berita ketiga */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {newsData.map((news , index) => (
                    <div key={index} className="max-w-sm">
                        <div className="bg-white rounded-3xl p-6 mb-4 transition-transform transform border-4 border-secondary border-b-[7px] hover:border-b-[10px]">
                            <h1 className="text-xl font-bold mb-2">{news.title}</h1>
                            <p className="text-background text-sm">{news.content}</p>
                            <p className="text-background text-sm">{news.date}</p>
                        </div>

                    </div>
                ))}
            </section>
        </main>
      </div>
      {/* <Footer className="w-full" /> */}
    </div>
  );
};

export default News;
