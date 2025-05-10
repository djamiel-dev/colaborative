"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/20 border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto py-[0.5vw] px-[4vw] flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[3vw] h-auto mix-blend-difference"
          />
        </a>

        {/* Nav links */}
        <ul className="relative flex gap-[2.5vw] items-center right-0">
          <li>
            <a
              href="#home"
              className="text-[var(--light-gray)] text-[1vw] hover:text-[var(--teal)] transition font-bold mix-blend-difference"
            >
              Gratis schema
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[var(--light-gray)] text-[1vw] hover:text-[var(--teal)] transition font-bold mix-blend-difference"
            >
              Diensten
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[var(--light-gray)] text-[1vw] hover:text-[var(--teal)] transition font-bold mix-blend-difference"
            >
              Over mij
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="text-[var(--light-gray)] text-[1vw] hover:text-[var(--teal)] transition font-bold mix-blend-difference"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[var(--teal)] text-black text-[1vw] px-[1vw] py-[0.5vw] hover:bg-[var(--light-gray)] transition font-bold"
            >
              Boek een gesprek
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
