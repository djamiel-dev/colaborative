"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      setScrolled((current) => (current ? y > 8 : y > 32));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open
          ? "bg-[var(--dark)] text-[var(--light-gray)]"
          : scrolled
            ? "text-black"
            : "bg-transparent text-[var(--light-gray)]"
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 border-b border-black/20 bg-white/20 shadow-sm backdrop-blur-md transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative z-50 mx-auto flex w-full items-center justify-between px-5 py-4 md:px-[4vw] md:py-[0.5vw]">
        <a href="/" className="flex items-center">
          <Logo className="h-auto w-10 md:w-[3vw]" />
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          type="button"
          className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Sluit menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 h-0.5 w-6 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex items-center bg-[var(--dark)] px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <NavLinks variant="menu" onNavigate={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
