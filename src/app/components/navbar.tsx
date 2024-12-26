"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Import X icon
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-white to-white flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="text-black font-bold text-xl">
        <div>OUTDOOR</div>
        <div className="text-sm font-normal tracking-wide">ADVENTURE</div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8 text-black text-sm">
        <Link href="/" className="hover:text-pink-700 font-bold">
          Home
        </Link>
        <Link href="/About" className="hover:text-pink-700 font-bold">
          About
        </Link>
        <Link href="/Services" className="hover:text-pink-700 font-bold">
          Services
        </Link>
        <Link href="/Blog" className="hover:text-pink-700 font-bold">
          Blog
        </Link>
        <Link href="/Contact" className="hover:text-pink-700 font-bold">
          Contact
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-white bg-pink-500 p-1 rounded" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white bg-pink-500 p-1 rounded" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg text-left py-4 z-50`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="block py-2 px-8 text-grey-500 hover:text-pink-600 font-bold"
        >
          Home
        </Link>
        <hr className="border-black" />
        <Link
          href="/About"
          onClick={closeMenu}
          className="block py-2 px-8 text-grey-500 hover:text-pink-600 font-bold"
        >
          About
        </Link>
        <hr className="border-black" />
        <Link
          href="/Services"
          onClick={closeMenu}
          className="block py-2 px-8 text-grey-500 hover:text-pink-600 font-bold"
        >
          Services
        </Link>
        <hr className="border-black" />
        <Link
          href="/Blog"
          onClick={closeMenu}
          className="block py-2 px-8 text-grey-500 hover:text-pink-600 font-bold"
        >
          Blog
        </Link>
        <hr className="border-black" />
        <Link
          href="/Contact"
          onClick={closeMenu}
          className="block py-2 px-8 text-grey-500 hover:text-pink-600 font-bold"
        >
          Contact
        </Link>
      </div>

      {/* Button */}
      <button className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-700 shadow-sm hidden md:block">
        TAKE ACTION
      </button>
    </nav>
  );
}
