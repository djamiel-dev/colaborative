"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function PageHero({ src, alt, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative h-[31.5vh] min-h-[12rem] w-full overflow-hidden md:h-[21vw]"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[8%] h-[120%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </motion.div>
      <h1 className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-balance text-[var(--light-gray)] mix-blend-difference md:text-[5.5vw] md:leading-[5vw]">
        {title}
      </h1>
    </section>
  );
}
