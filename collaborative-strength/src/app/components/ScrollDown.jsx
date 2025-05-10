"use client";

export default function ScrollDown() {
  const scrollToSection = () => {
    // Scroll naar de tweede sectie
    document.querySelector("section:nth-of-type(2)").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToSection}
      className="flex items-center text-[var(--light-gray)] text-[1.2vw] cursor-pointer"
    >
      <span className="mr-[1vw] pr-[0.5vw] ">Scroll down</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="w-[1.2vw] h-[1.2vw] fill-[var(--light-gray)] rotate-[90deg]"
      >
        <path d="M584-412H114v-136h470L382-750l98-96 366 366-366 366-97-96 201-202Z" />
      </svg>
    </button>
  );
}
