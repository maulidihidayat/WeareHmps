"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Import the Menu icon from Lucide

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Berita", href: "News" },
    { name: "Kritik & Saran", href: "Saran" },
    { name: "Tentang Kami", href: "aboutUs" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-10 ${scrolled ? "bg-white" : ""}`}>
      <nav className="flex items-center justify-between p-4 md:p-6 py-3 sm:p-8">
        <div className="p-2">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Hmps Pendidikan Informatika
          </h1>
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          <div className="hidden md:flex">
            <ul className="flex space-x-4 md:space-x-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-sm md:text-base text-secondary " aria-label={item.name}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center search-container">
            <Link href="auth/login">
              <button
                onClick={() => alert("Are you sure you want to login?")}
                className="relative bg-primary text-white text-sm md:text-base py-2 md:py-4 px-3 md:px-6 rounded-2xl border-b-[5px] md:border-b-[7px] border-secondary border-2 hover:bg-orange-600 hover:border-b-[8px] md:hover:border-b-[9px] transition-transform transform duration-300 z-10 sm:p-4"
              >
                <span className="font-bold">Gabung Sekarang</span>
              </button>
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="text-secondary" />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-md z-10 p-10 ">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-[18px] md:text-secondary font-semibold text-secondary bg-bgproduksekunder flex justify-center p-4 rounded-xl border-2 border-b-[7px] border-secondary" aria-label={item.name}>
                  {item.name}
                </Link>
              </li>
            ))}
            <hr/>
          </ul>
          
        </div>
      )}
    </header>
  );
};

export default Navbar;