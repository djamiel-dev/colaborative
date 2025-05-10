"use client";

import { useState } from "react";

export default function AnimatedButton({
  href = "#",
  text = "Boek een gesprek",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="w-[24.5vw] h-[6vw] relative flex flex-row cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-[18vw] h-[6vw]">
        <div
          className={`backdrop-blur-md border border-white/20 justify-center items-center w-[18vw] h-[6vw] flex absolute transition-all duration-300 ${
            isHovered ? "bg-[var(--teal)]/50" : "bg-[var(--light-gray)]/10"
          }`}
        >
          <p
            className={`relative text-[1.4vw] font-bold transition-colors duration-300 ${
              isHovered ? "text-[var(--light-gray)]" : "text-[var(--teal)]"
            }`}
          >
            {text}
          </p>
        </div>
        <div className="absolute w-[18vw] h-[6vw] z-40">
          {/* Hoeken met animaties */}
          {/* Linksboven */}
          <div className="absolute top-0 left-0 w-[2vw] h-[2vw]">
            <div
              className={`absolute top-0 left-0 w-[1vw] h-[0.1vw] transition-all duration-300 ${
                isHovered
                  ? "w-[1.5vw] bg-white translate-x-[0.2vw] translate-y-[0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
            <div
              className={`absolute top-0 left-0 w-[0.1vw] h-[1vw] transition-all duration-300 ${
                isHovered
                  ? "h-[1.5vw] bg-white translate-x-[0.2vw] translate-y-[0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
          </div>

          {/* Rechtsboven */}
          <div className="absolute top-0 right-0 w-[2vw] h-[2vw]">
            <div
              className={`absolute top-0 right-0 w-[1vw] h-[0.1vw] transition-all duration-300 ${
                isHovered
                  ? "w-[1.5vw] bg-white translate-x-[-0.2vw] translate-y-[0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
            <div
              className={`absolute top-0 right-0 w-[0.1vw] h-[1vw] transition-all duration-300 ${
                isHovered
                  ? "h-[1.5vw] bg-white translate-x-[-0.2vw] translate-y-[0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
          </div>

          {/* Linksonder */}
          <div className="absolute bottom-0 left-0 w-[2vw] h-[2vw]">
            <div
              className={`absolute bottom-0 left-0 w-[1vw] h-[0.1vw] transition-all duration-300 ${
                isHovered
                  ? "w-[1.5vw] bg-white translate-x-[0.2vw] translate-y-[-0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
            <div
              className={`absolute bottom-0 left-0 w-[0.1vw] h-[1vw] transition-all duration-300 ${
                isHovered
                  ? "h-[1.5vw] bg-white translate-x-[0.2vw] translate-y-[-0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
          </div>

          {/* Rechtsonder */}
          <div className="absolute bottom-0 right-0 w-[2vw] h-[2vw]">
            <div
              className={`absolute bottom-0 right-0 w-[1vw] h-[0.1vw] transition-all duration-300 ${
                isHovered
                  ? "w-[1.5vw] bg-white translate-x-[-0.2vw] translate-y-[-0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
            <div
              className={`absolute bottom-0 right-0 w-[0.1vw] h-[1vw] transition-all duration-300 ${
                isHovered
                  ? "h-[1.5vw] bg-white translate-x-[-0.2vw] translate-y-[-0.2vw]"
                  : "bg-[var(--teal)]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Turquoise vierkant met pijl */}
      <div className="relative w-[6vw] h-[6vw] bg-[var(--teal)] left-[0.5vw] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className={`w-[2vw] h-[2vw] fill-[var(--dark)] transition-transform duration-500 ${
            isHovered
              ? "animate-[rotateArrow_0.5s_forwards]"
              : "rotate-[-45deg]"
          }`}
        >
          <path d="M584-412H114v-136h470L382-750l98-96 366 366-366 366-97-96 201-202Z" />
        </svg>
      </div>
    </a>
  );
}
