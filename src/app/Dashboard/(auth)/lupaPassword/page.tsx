'use client'
import image from '@/source/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="max-w-sm p-6 mx-auto">
        <div className="absolute ml-96">
          <Image src={image.star2} alt={"star1"} />
          <Image src={image.star} alt={"star1"} className="ml-8" />
        </div>
        <h1 className="text-[40px] w-full text-secondary font-black mb-4">
          Masukkan Email
        </h1>
        <p className="text-[18px] text-success">
          Masukkan email di bawah ini biar nanti mimin kirimin link buat atur ulang kata sandi kamu ya 😋
        </p>
        <form className="flex flex-col mt-4 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-[18px] font-bold text-secondary"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              required
              className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
              placeholder="kamu@gmail.com"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
            >
              Kirim
            </button>
          </div>
          <div className="mt-4 text-center">
          <p className="text-secondary">
            Udah inget kata sandi?{" "}
            
            <Link href={"/Dashboard/login"} className="text-primary hover:underline">
              Klik disini!
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