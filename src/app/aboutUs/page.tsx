import image from "@/source/image";
import { Instagram } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";


// Reusable components
interface SectionHeader {
  title : string
}

interface SubSectionHeader {
  title : string
}

interface ProfileCard {
  name : string;
  program : string;
  role : string;
  imageSrc : string | StaticImageData ;
  instagram : string;
}


const SectionHeader : React.FC<SectionHeader> = ({ title }) => (
  <h1 className="text-[40px] text-secondary font-bold mt-4 ">{title}</h1>
);

const SubSectionHeader : React.FC<SubSectionHeader> = ({ title }) => (
  <h3 className="text-[20px] text-secondary font-bold mt-4">{title}</h3>
);

const ProfileCard : React.FC<ProfileCard> = ({ name, program, role, imageSrc, instagram }) => (
  <div className="flex items-center max-w-lg p-4 mt-4 ml-4 border-2 rounded-2xl border-secondary">
    <div className="flex-grow">
      <h3 className="text-[20px] text-secondary font-bold mt-4">{name}</h3>
      <p className="text-success text-[16px] leading-relaxed">Prodi: {program}</p>
      <p className="text-success text-[16px] leading-relaxed">{role}</p>
      <a href="#" className="flex items-center space-x-2">
        <Instagram />
        <p className="font-semibold text-4 text-primary">@{instagram}</p>
      </a>
    </div>
    <Image src={imageSrc} alt="Profile Picture" width="200" height="200" />
  </div>
);

const AboutHMPS = () => {
  return (
    <div className="flex p-8">
      <section>
        <SectionHeader title="Tentang HMPS Pendidikan Informatika" />
        <p className="text-success text-[18px] leading-relaxed max-w-3xl mt-2">
          <span className="font-bold text-secondary bg-bgaccent">Hai aku Amrullah </span>
          Ketua HMPS Pendidikan Informatika 2024, organisasi keren yang siap menggebrak dunia pendidikan di kampus! 🎉 Kami terdiri dari mahasiswa-mahasiswa kece dari jurusan Pendidikan Informatika yang berkomitmen untuk menciptakan inovasi dan kolaborasi seru di lingkungan kampus. Di HMPS, kita nggak cuma belajar teori, tapi juga langsung praktek! Kami mengadakan berbagai kegiatan seru, mulai dari workshop, seminar, hingga lomba-lomba yang bikin kalian semakin jago di bidang teknologi dan pendidikan. 
          <br /> Kami percaya bahwa setiap ide brilian bisa jadi nyata, makanya kami selalu mendukung kreativitas dan inisiatif teman-teman semua. Dengan bergabung di HMPS, kalian bisa memperluas jaringan, belajar bareng, dan pastinya, bersenang-senang! 🎊 Jadi, siap-siap untuk jadi bagian dari perubahan dan inovasi di dunia pendidikan bersama HMPS Pendidikan Informatika 2024! Let's make it happen! 🚀
        </p>
        <img className="mx-auto" src="/asset/Stars-1.svg" alt="" />

        <SubSectionHeader title="1. Devisi Kominfo" />
        <p className="text-success text-[18px] leading-relaxed max-w-3xl mt-2">
          Divisi Kominfo, atau Komunikasi dan Informasi, adalah salah satu bagian paling seru di organisasi kita! 🎉 Di sini, kita bertugas untuk menyebarkan informasi dan menjaga komunikasi yang lancar antara semua anggota. Kita nggak cuma nulis berita atau laporan, tapi juga bikin konten kreatif yang bikin semua orang tertarik! 
          <br /> Divisi Kominfo juga jadi jembatan antara kita dan dunia luar. Kita berusaha untuk memastikan semua informasi penting sampai ke tangan yang tepat, jadi semua orang bisa ikut terlibat dan merasakan vibe positif dari setiap acara yang kita adakan. Jadi, kalau kamu suka berkomunikasi, berkreasi, dan pengen jadi bagian dari tim yang bikin semua orang terhubung, divisi Kominfo adalah tempat yang tepat buat kamu! Ayo, bergabung dan tunjukkan kreativitasmu! 🚀✨
        </p>

        <SubSectionHeader title="2. Devisi Humas" />
        <p id="Humas" className="text-success text-[18px] leading-relaxed max-w-3xl mt-2">
          Divisi Humas, atau Hubungan Masyarakat, adalah garda terdepan kita dalam membangun citra positif organisasi! 🌟 Di sini, kita bertugas untuk menjalin komunikasi yang baik dengan semua pihak, mulai dari mahasiswa, dosen
          , hingga masyarakat luar. <br />
          Kita bikin konten-konten menarik, seperti berita, poster, dan video, supaya semua orang tahu tentang kegiatan seru yang kita adakan. Selain itu, kita juga siap menjawab pertanyaan dan mendengarkan masukan dari semua orang. Kalau kamu suka berinteraksi, kreatif, dan pengen jadi suara organisasi kita, divisi Humas adalah tempat yang pas buat kamu! Ayo, bareng-bareng kita bikin organisasi kita makin dikenal dan dicintai!
        </p>

        <img src="/asset/SmileEmoji.svg" alt="" width="50px" className="mx-auto" />

        <SubSectionHeader title="3. Devisi Sosial" />
        <p className="text-success text-[18px] leading-relaxed max-w-3xl mt-4">
          <span className="font-bold text-secondary bg-bgaccent">Divisi Sosial</span>
          itu kayak tim superhero yang peduli banget sama lingkungan dan masyarakat! 🌍✨ Tugas kita adalah bikin kegiatan yang bermanfaat, mulai dari bakti sosial, penggalangan dana, hingga kampanye kesadaran sosial. Kita berusaha untuk membantu mereka yang membutuhkan dan membuat perubahan positif di sekitar kita. Kita juga sering berkolaborasi dengan komunitas lain untuk memperluas jangkauan dan dampak dari kegiatan kita. Dengan semangat gotong royong, kita bisa bikin acara yang seru dan bermanfaat, seperti donor darah, pembagian sembako, atau kegiatan edukasi untuk anak-anak. Kalau kamu punya jiwa sosial yang tinggi, suka berinteraksi dengan orang-orang, dan pengen berkontribusi untuk kebaikan, divisi Sosial adalah tempat yang tepat buat kamu! Yuk, bareng-bareng kita ciptakan dampak yang positif dan bikin dunia ini jadi lebih baik!
        </p>

        <SubSectionHeader title="4. Devisi Keagamaan" />
        <p className="text-success text-[18px] leading-relaxed max-w-3xl mt-4">
          <span className="font-bold text-secondary bg-bgaccent">Divisi Keagamaan</span>
          adalah tempatnya kita untuk memperkuat iman dan kebersamaan! 🙏✨ Di sini, kita ngadain berbagai kegiatan seru, mulai dari pengajian, diskusi, sampai acara sosial yang bikin kita lebih dekat dengan Tuhan dan satu sama lain. <br /> Kita percaya, dengan saling mendukung dan berbagi, kita bisa tumbuh bareng dalam kebaikan. Jadi, kalau kamu pengen nambah wawasan, memperdalam spiritualitas, dan seru-seruan bareng teman-teman, yuk gabung di divisi Keagamaan! Let's spread positivity and faith together!
        </p>

        <div className="mt-4 ml-10">
          <SectionHeader title="Akhir kata" />
          <p className="text-success text-[18px] leading-relaxed max-w-3xl mt-2">
            <span className="font-bold text-secondary bg-bgaccent">Jadi, guys, jangan sampai ketinggalan</span>
            HMPS Pendidikan Informatika 2024 siap bikin seru! Ini adalah wadah buat mahasiswa yang ingin berkolaborasi, belajar, dan berkarya bareng. Di tahun ini, kita bakal adakan workshop, seminar, dan kompetisi seru seperti lomba coding dan hackathon. Jangan lewatkan juga kegiatan sosial untuk memberikan dampak positif di lingkungan sekitar, serta kesempatan untuk networking dengan alumni dan profesional di bidang TI. Kita juga akan menyediakan pelatihan untuk meningkatkan keterampilan teknis dan soft skills. Jadi, tunggu apa lagi? Yuk, gabung bareng kita di HMPS Pendidikan Informatika 2024! Biar makin kece dan siap terbang tinggi! 🚀✨
          </p>
        </div>
      </section>

      {/* Members Section */}
      <section className="gap-4 mt-10">
        <ProfileCard
          name="Lalu Muhammad Amrullah"
          program="Pendidikan Statistika"
          role="Ketua KKN Bina Desa"
          imageSrc={image.amrullah}
          instagram="Amrullah"
        />
        <ProfileCard
          name="Yunita Uswatun Azizah"
          program="Pendidikan Matematika"
          role="Sekretaris KKN Bina Desa"
          imageSrc={image.yunita}
          instagram="Amrullah"
        />
        <ProfileCard
          name="Dewi Wulan Sari"
          program="Pendidikan Informatika"
          role="Bendahara KKN Bina Desa"
          imageSrc={image.wulan}
          instagram="Amrullah"
            />
          <ProfileCard
            name="Syaiful Haris Nawawi"
            program="Pendidikan Informatika"
            role="Humas KKN Bina Desa"
            imageSrc={image.haris}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Putri Rifi Natania"
            program="Pendidikan Statistika"
            role="Humas KKN Bina Desa"
            imageSrc={image.putri}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Almum Tahanah"
            program="Pendidikan Informatika"
            role="Humas KKN Bina Desa"
            imageSrc={image.almum}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Rona Firda"
            program="Pendidikan Informatika"
            role="Acara KKN Bina Desa"
            imageSrc={image.rona}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Ririn Robiatul Husnaeni"
            program="Pendidikan Statistika"
            role="Acara KKN Bina Desa"
            imageSrc={image.ririn}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Siti Warnia Wati"
            program="Pendidikan Informatika"
            role="Pdd KKN Bina Desa"
            imageSrc={image.nia}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Syarifatul Uyun"
            program="Pendidikan Informatika"
            role="Pdd KKN Bina Desa"
            imageSrc={image.uyun}
            instagram="Amrullah"
          />
          <ProfileCard
            name="Rina Agustina"
            program="Pendidikan Informatika"
            role="Pdd KKN Bina Desa"
            imageSrc={image.rina}
            instagram="Amrullah"
          />
        </section>
      </div>
    );
  };
  
  export default AboutHMPS;