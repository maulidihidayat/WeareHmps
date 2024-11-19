"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image from "@/source/image"; // Adjust the path as needed
import { ActivitySquareIcon, ArrowRight, BarChartHorizontalBigIcon, LayoutDashboard, LogOut, Menu, Settings, Tally4 } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`bg-bgproduksekunder border-r-2 border-secondary rounded-3xl text-white fixed h-screen transition-all duration-300 z-10 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 justify-center mt-16 items-center">
          <Image src={image.gambar3} alt={""} width={120} />
          <Link href="/Dashboard/login">
            <button className="flex relative bg-primary text-white py-3 px-4 gap-2 items-center rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 hover:border-b-[9px] transition-transform transform duration-300 z-10">
              <span className="font-bold">Daftar Sekarang</span>
              <ArrowRight />
            </button>
          </Link>

          {/* New Menu Items */}
          <div>
            <Link href="/Dashboard">
              <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400  transition-colors duration-200">
                <LayoutDashboard className="text-success hover:text-white"/>
                <span className="font-bold hover:text-white text-success text-[18px]">
                  Dashboard
                </span>
              </div>
            </Link>
            <Link href="/TeamChat">
              <div className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                <BarChartHorizontalBigIcon className="text-success"/>
                <span className="font-bold hover:text-white text-success text-[18px]">
                  Team Chat
                </span>
              </div>
            </Link>
            <Link href="/TeamChat">
              <div className="flex items-center py-2 px-4  gap-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                <ActivitySquareIcon className="text-success hover:text-white"/>
                <span className="font-bold hover:text-white text-success text-[18px]">
                  Rencana
                </span>
              </div>
            </Link>
            <Link href="/TeamChat">
              <div className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
              <Settings className="text-success hover:text-white"/>
                <span className="font-bold hover:text-white text-success text-[18px]">
                  Settings
                </span>
              </div>
            </Link>
            <Link href="/TeamChat">
              <div className="flex items-center gap-4 mt-20 py-2 px-4 rounded-lg hover:bg-orange-400 transition-colors duration-200">
                <LogOut className="text-primary hover:text-white "/>
                <span className="font-bold text-primary hover:text-white text-[18px] active:text-white">
                  Logout
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={`flex-1 p-4 ${isOpen ? "ml-64" : "ml-0"}`}>
        <div className="ml-auto">
          <button
            className="bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-xl border-2 border-b-[7px] border-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Tally4 /> : <Menu/> } 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
