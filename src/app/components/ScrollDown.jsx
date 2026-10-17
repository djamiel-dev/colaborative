"use client";

export default function ScrollDown() {
  const scrollToSection = () => {
    document.querySelector("section:nth-of-type(2)")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToSection}
      className="flex cursor-pointer items-center text-sm text-[var(--light-gray)] md:text-[1.2vw]"
    >
      <span className="mr-2 md:mr-[1vw] md:pr-[0.5vw]">Scroll down</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="h-4 w-4 rotate-[90deg] fill-[var(--light-gray)] md:h-[1.2vw] md:w-[1.2vw]"
      >
        <path d="M584-412H114v-136h470L382-750l98-96 366 366-366 366-97-96 201-202Z" />
      </svg>
    </button>
  );
}
