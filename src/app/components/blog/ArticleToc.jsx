"use client";

import { useEffect, useRef, useState } from "react";

const NAV_CLEARANCE = 112; // ruimte onder de vaste navbar

export default function ArticleToc({ headings }) {
  const [active, setActive] = useState(headings[0]?.id);
  const [top, setTop] = useState(NAV_CLEARANCE);
  const ref = useRef(null);

  // Sticky-positie zo kiezen dat de inhoudsopgave verticaal in het midden van het scherm staat.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const center = () => {
      const offset = (window.innerHeight - element.offsetHeight) / 2;
      setTop(Math.max(NAV_CLEARANCE, Math.round(offset)));
    };

    const observer = new ResizeObserver(center);
    observer.observe(element);
    window.addEventListener("resize", center);
    center();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", center);
    };
  }, []);

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean);
    let frame = 0;

    // Actief = de laatste kop die voorbij het midden van het scherm is gescrold.
    const update = () => {
      const line = window.innerHeight * 0.5;
      let current = elements[0];
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= line) current = element;
      }
      if (current) setActive(current.id);
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
  }, [headings]);

  return (
    <nav ref={ref} aria-label="In dit artikel" className="sticky w-full" style={{ top }}>
      <p className="pb-6 text-sm font-bold tracking-[0.2em] text-[#161616]/50 uppercase md:text-[clamp(0.8rem,0.75vw,1rem)]">
        In dit artikel
      </p>
      <ol className="flex flex-col border-l-2 border-[#161616]/15">
        {headings.map((heading) => {
          const isActive = heading.id === active;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  const target = document.getElementById(heading.id);
                  if (!target) return;
                  event.preventDefault();
                  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - NAV_CLEARANCE,
                    behavior: reduce ? "auto" : "smooth",
                  });
                  history.replaceState(null, "", `#${heading.id}`);
                }}
                className={`relative -left-[2px] flex gap-4 border-l-[3px] py-3 pl-5 text-base leading-snug transition-colors md:text-[clamp(1rem,1vw,1.3rem)] ${
                  isActive
                    ? "border-[var(--teal)] font-bold text-[var(--dark)]"
                    : "border-transparent text-[#161616]/55 hover:text-[var(--dark)]"
                }`}
              >
                <span className="pt-[0.1em] tabular-nums text-[0.85em] text-[#161616]/40">
                  {heading.number}
                </span>
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
