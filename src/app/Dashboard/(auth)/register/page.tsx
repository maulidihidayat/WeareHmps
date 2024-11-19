import React from 'react'
import Image from 'next/image'
import image from '@/source/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className="max-w-sm p-6 mx-auto">
      <div className="absolute ml-96">
        <Image src={image.star2} alt={"star1"} />
        <Image src={image.star} alt={"star1"} className="ml-8" />
      </div>
      <h1 className="text-[40px] w-full text-secondary font-black mb-4">
        Yuk Buat Akun
      </h1>
      <p className="text-[18px] text-success">
        Menemani masa kuliahmu bareng kami
      </p>
      <form className="flex flex-col mt-4 space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-[18px] font-bold text-secondary"
          >
            Nama Lengkap:
          </label>
          <input
            type="email"
            id="email"
            required
            className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[18px] font-bold text-secondary"
          >
            Prodi:
          </label>
          <input
            type="email"
            id="email"
            required
            className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
            placeholder="Masukkan nama prodi"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[18px] font-bold text-secondary"
          >
            Semester:
          </label>
          <input
            type="email"
            id="email"
            required
            className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
            placeholder="Masukkan nama semester"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[18px] font-bold text-secondary"
          >
            Masukkan Email:
          </label>
          <input
            type="email"
            id="email"
            required
            className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
            placeholder="@hamzanwadi.ac.id"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-[18px] font-bold text-secondary"
          >
            Kata Sandi:
          </label>
          <input
            type="password"
            id="password"
            required
            className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
            placeholder="1-8 karakter"
          />
        </div>
        
        <div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
          >
            Daftar
          </button>
        </div>
        <p className="text-[18px] text-success font-semibold text-center">---------------atau---------------</p>
        <div className="flex justify-center">
          <button
            type="submit"
            className="flex items-center justify-center gap-4 bg-white text-secondary px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
          >
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt=""
              className="h-5 h-5"
            />
            <span>Login With Google</span>
          </button>
        </div>
        {/* Sign Up Prompt */}
        <div className="mt-4 text-center">
          <p className="text-secondary">
            Sudah punya akun?{" "}
            <Link
              href={"/Dashboard/login"}
              className="text-primary hover:underline"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </form>
      {/* Google Login Button */}
    </div>
    </div>
  )
}

export default page