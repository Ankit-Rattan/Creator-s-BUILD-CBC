'use client'

import { useState } from "react";
import Link from "next/link";
import Logo from "../logo/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-5">
      <Logo />
      <div className="lg:hidden">
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="block cursor-pointer">
          <svg
            className="w-6 h-6 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 6h18v-2H3v2z"
            />
          </svg>
        </label>
        <div
          className={`${isOpen ? "flex flex-col items-center mt-4" : "hidden"
            }`}
        >
          <NavItem href="/" handleClick={toggleMenu}>
            Home
          </NavItem>
          <NavItem href="/center" handleClick={toggleMenu}>
            Center
          </NavItem>
          <NavItem href="/creator" handleClick={toggleMenu}>
            Amb. Program
          </NavItem>
          <NavItem href="https://chat.whatsapp.com/F477YxTNkmT2sJuAaNaGDa" handleClick={toggleMenu}>Community</NavItem>
          <NavItem href="/about" handleClick={toggleMenu}>
            About Us
          </NavItem>
          <NavItem href="https://createbycreators.podia.com/blog" handleClick={toggleMenu}>
            Bytes
          </NavItem>
          <NavItem href="/contact" handleClick={toggleMenu}>
            Contact Us
          </NavItem>
        </div>
      </div>
      <ul className="hidden lg:flex lg:gap-12 lg:text-lg">
        <NavItem href="/" handleClick={toggleMenu}>Home</NavItem>
        <NavItem href="/center" handleClick={toggleMenu}>Center</NavItem>
        <NavItem href="/creator" handleClick={toggleMenu}>Program</NavItem>
        <NavItem href="https://chat.whatsapp.com/F477YxTNkmT2sJuAaNaGDa" handleClick={toggleMenu}>Community</NavItem>
        <NavItem href="/about" handleClick={toggleMenu}>About Us</NavItem>
        <NavItem href="https://createbycreators.podia.com/blog" handleClick={toggleMenu}>Bytes</NavItem>
        <NavItem href="/contact" handleClick={toggleMenu}>Contact Us</NavItem>
      </ul>
    </div>
  )
}

function NavItem({ href, children, handleClick }) {
  return (
    <li
      className="text-2xl border border-none duration-500 hover:bg-slate-700 hover:text-white rounded-full py-1 px-2 cursor-pointer"
      onClick={handleClick}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
