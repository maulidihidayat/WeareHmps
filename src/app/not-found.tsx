import React from "react";
import Image from "next/image";
import image from "@/source/image"; // Pastikan jalur ini benar
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src={image.notFound}
        alt="Not Found"
        width={400}
        height={400}
        className="mb-4"
      />
      <h1 className="text-2xl font-black text-primary">404 Not Found</h1>
      <p className="mt-2 text-secondary">Maaf, halaman yang kamu cari tidak ada.</p>
      <div className="flex justify-center items-center mt-4">
        <Link href="/" className="bg-primary flex items-center space-x-2 text-white px-4 py-3 rounded-2xl border-b-[7px] border-secondary border-2 duration-all duration-300 hover:border-b-[8px]">
          <span className="font-bold text-[18px]">Halaman Utama</span>
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
        </Link>
      </div>
    </div>
  );
}