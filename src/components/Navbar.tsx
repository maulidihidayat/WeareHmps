"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "News" },
    { name: "Kritik & Saran", href: "Saran" },
    { name: "About Us", href: "aboutUs" },
  ];

  const [scrolled, setScrolled] = useState(false);

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
    <header className={`sticky top-0 z-10 ${scrolled ? "bg-white " : ""}`}>
      <nav className="flex items-center justify-between  p-20 py-3  ">
        <div className="p-2">
          <h1 className="text-2xl font-bold text-primary">
            Hmps Pendidikan Informatika
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <ul className="flex space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-[16px] text-secondary"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center search-container">
            <Link href="Dashboard/login">
            <button
              onClick={() => alert("Are you sure  want to login?")}
              className="relative bg-primary text-white py-4 px-3 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 hover:border-b-[9px] transition-transform transform duration-300 z-10"
            >
              <span className="font-bold">Join Us Now</span>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
