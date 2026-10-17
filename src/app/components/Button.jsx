"use client";

import { useState } from "react";

const corners = [
  {
    box: "top-0 left-0",
    horizontal: "top-0 left-0",
    vertical: "top-0 left-0",
    hoverShift: "translate-x-[var(--nudge)] translate-y-[var(--nudge)]",
  },
  {
    box: "top-0 right-0",
    horizontal: "top-0 right-0",
    vertical: "top-0 right-0",
    hoverShift:
      "translate-x-[calc(var(--nudge)*-1)] translate-y-[var(--nudge)]",
  },
  {
    box: "bottom-0 left-0",
    horizontal: "bottom-0 left-0",
    vertical: "bottom-0 left-0",
    hoverShift:
      "translate-x-[var(--nudge)] translate-y-[calc(var(--nudge)*-1)]",
  },
  {
    box: "bottom-0 right-0",
    horizontal: "bottom-0 right-0",
    vertical: "bottom-0 right-0",
    hoverShift:
      "translate-x-[calc(var(--nudge)*-1)] translate-y-[calc(var(--nudge)*-1)]",
  },
];

export default function Button({
  href = "#",
  text = "Boek een gesprek",
  submit = false,
  form,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Tag = submit ? "button" : "a";

  return (
    <Tag
      {...(submit ? { type: "submit", form } : { href })}
      className={`coach-button ${submit ? "border-0 bg-transparent p-0 text-left" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="coach-button__face">
        <div
          className={`absolute inset-0 flex items-center justify-center border border-black/20 shadow-[0_0_2vw_1vw_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 ${
            isHovered ? "bg-[var(--teal)]/50" : "bg-[var(--light-gray)]/10"
          }`}
        >
          <p
            className={`text-[length:var(--label)] font-bold transition-colors duration-300 ${
              isHovered ? "text-[var(--light-gray)]" : "text-[var(--teal)]"
            }`}
          >
            {text}
          </p>
        </div>
        <div className="absolute inset-0 z-40">
          {corners.map((corner) => (
            <div key={corner.box} className={`absolute h-8 w-8 md:h-[2vw] md:w-[2vw] ${corner.box}`}>
              <div
                className={`absolute h-[var(--stroke)] transition-all duration-300 ${corner.horizontal} ${
                  isHovered
                    ? `w-[var(--corner-lg)] bg-white ${corner.hoverShift}`
                    : "w-[var(--corner)] bg-[var(--teal)]"
                }`}
              />
              <div
                className={`absolute w-[var(--stroke)] transition-all duration-300 ${corner.vertical} ${
                  isHovered
                    ? `h-[var(--corner-lg)] bg-white ${corner.hoverShift}`
                    : "h-[var(--corner)] bg-[var(--teal)]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="coach-button__arrow flex items-center justify-center bg-[var(--teal)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          className={`h-[var(--icon)] w-[var(--icon)] fill-[var(--dark)] transition-transform duration-500 ${
            isHovered
              ? "animate-[rotateArrow_0.5s_forwards]"
              : "rotate-[-45deg]"
          }`}
        >
          <path d="M584-412H114v-136h470L382-750l98-96 366 366-366 366-97-96 201-202Z" />
        </svg>
      </div>
    </Tag>
  );
}
