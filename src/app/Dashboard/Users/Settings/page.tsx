import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-bgproduk border border-secondary shadow-lg rounded-xl w-[902px] h-[680px] flex flex-col mx-auto p-6">
        {/* Account Settings Title */}
        <div className="mb-6">
          <h1 className="text-white  border-secondary bg-primary rounded-xl p-2 border-2 border-b-[7px] text-xl font-semibold">
            Account Settings
          </h1>
        </div>

        {/* Profile Header */}
        <div className="mb-6">
          <h1 className="text-customgray text-4xl text-secondary">
            Your Profile
          </h1>
        </div>

        {/* Profile Picture and Buttons */}
        <div className="flex items-center space-x-10 mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1326/1326405.png"
            alt="Profile Picture"
            width={110}
            height={110}
            className="rounded-full"
          />

          <div className="flex space-x-5">
            <button className="bg-primary border-2 border-b-[7px] border-secondary text-white px-10 py-4 rounded-xl hover:bg-customDarkenBlue">
              Upload Image
            </button>
            <button className="bg-primary border-2 border-b-[7px] border-secondary text-white px-10 py-4 rounded-xl hover:bg-customDarkenBlue">
              Remove Profile Picture
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen px-28 pb-72">
          <form className="w-full max-w-2xl">
            {/* Full Name and Phone Number */}
            <div className="flex space-x-10 mb-6">
              {/* Full Name */}
              <div className="w-[335px]">
                <label
                  htmlFor="fullname"
                  className="block text-secondary font-bold mt-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  required
                  placeholder="Udinsarudin"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Phone Number */}
              <div className="w-[335px]">
                <label
                  className="block text-secondary font-bold mt-2"
                  htmlFor="phone number"
                >
                  Nomor Handphone
                </label>
                <input
                  type="tel"
                  id="number"
                  required
                  placeholder="0878xxxxxxxx"
                  className="w-full p-3 border-2 text-secondary border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email and Bio */}
            <div className="flex space-x-10 mb-6">
              {/* Email */}
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

              {/* Bio */}
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
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button
                type="submit"
                className="w-[142px] border-b-[7px] bg-primary text-white hover:border-b-[6px] border-secondary border-2 font-bold py-3 px-4 rounded-xl  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
