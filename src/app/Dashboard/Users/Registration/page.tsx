import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center h-auto mb-10 ml-32">
        <div className="w-[902px] items-center p-10  rounded-2xl bg-bgproduk border-2 border-secondary max-w-3xl">
          <h4 className="text-white font-bold border-2 border-b-[7px] border-secondary rounded-xl bg-primary  mb-6 py-4  text-center">
            Registration Member
          </h4>
          <hr className="border-t-2  border-gray-300" />
          <form className="flex space-x-10 ">
            {/* Full Name and */}
            <div className="mb-6 space-y-4">
              {/* Full Name */}
              <div className="w-[335px]">
                <label
                  htmlFor="fullname"
                  className="block text-secondary font-bold mt-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="fullname"
                  required
                  placeholder="Udinsarudin"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Nomor Induk */}
              <div className="w-[335px]">
                <label
                  htmlFor="nomor induk"
                  className="block text-secondary font-bold mt-2"
                >
                  Nim
                </label>
                <input
                  type="nomor induk"
                  id="nomor induk"
                  required
                  placeholder="210305002"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Tahun */}
              <div className="w-[335px]">
                <label
                  htmlFor="year"
                  className="block text-secondary font-bold mt-2"
                >
                  Angkatan Tahun
                </label>
                <input
                  type="year"
                  id="year"
                  required
                  placeholder="2021"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Class */}
              <div className="w-[335px]">
                <label
                  htmlFor="phone"
                  className="block text-secondary font-bold mt-2"
                >
                  Kelas
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="A"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
            </div>
              

            {/* Devision and Reason */}
            <div className="space-y-4 mb-6">
            <div className="w-[335px]">
                <label
                  htmlFor="email"
                  className="text-secondary font-bold mt-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="ahmadhapinuddin@gmail.com"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Devision */}
              <div className="w-[335px]">
                <label
                  htmlFor="email"
                  className="block text-secondary font-bold mt-2"
                >
                  Devisi
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Divisi Agama"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Reason */}
              <div className="w-[335px]">
                <label
                  htmlFor="bio"
                  className="mt-2 block text-secondary font-bold"
                >
                  Reason
                </label>
                <textarea
                  id="bio"
                  required
                  placeholder="Write something about yourself"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" w-[142px] border-b-[7px] bg-primary text-white hover:border-b-[6px] border-secondary border-2 font-bold py-3 px-4 rounded-xl  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
