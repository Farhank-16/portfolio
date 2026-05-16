"use client";
import { useState } from "react";
import { FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex flex-col px-4 py-3 border-b border-gray-200 sticky top-0 bg-white z-50 transition-all">
      <div className="flex justify-between items-center w-full">
        {/* Left Section */}
        <section className="p-2 text-xl md:text-2xl font-semibold flex justify-start items-center uppercase text-emerald-800">
          Portfolio.
        </section>

        {/* Center Section (Desktop) */}
        <section className="hidden md:flex justify-end items-center p-2">
          <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base text-gray-700 tracking-wider uppercase font-semibold">
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer hover:text-emerald-700 hover:scale-105 hover:transition-all">
                <a href={link.href} aria-label={`Goto ${link.name} Section`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Right Section & Mobile Toggle */}
        <section className="flex items-center gap-2">
          {/* Hire Me Button (Hidden on very small screens, visible on md and sm) */}
          <Link
            href="https://wa.me/916378586084?text=Hi%2C%20I'm%20interested%20in%20hiring%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center px-4 py-2 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white outline-none focus:ring-2 focus:ring-emerald-300 shadow-md transform active:scale-y-95 transition-transform mx-2"
            aria-label="Hire Me Button"
          >
            <FaBriefcase />
            <span className="ml-2 font-medium">Hire Me</span>
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden text-gray-800 p-2 focus:outline-none hover:text-emerald-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </section>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-gray-700 uppercase font-semibold text-center pb-6">
          {navLinks.map((link) => (
            <li key={link.name} className="cursor-pointer hover:text-emerald-700 transition-colors">
              <a href={link.href} onClick={closeMenu} aria-label={`Goto ${link.name} Section`} className="block w-full">
                {link.name}
              </a>
            </li>
          ))}
          <li className="sm:hidden mt-2 flex justify-center">
             <Link
              href="https://wa.me/916378586084?text=Hi%2C%20I'm%20interested%20in%20hiring%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 rounded-md text-white shadow-md transform active:scale-y-95 transition-transform"
              onClick={closeMenu}
              aria-label="Hire Me Button"
            >
              <FaBriefcase />
              <span className="ml-2">Hire Me</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
