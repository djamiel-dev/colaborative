"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  yOffset = 50,
  sizes = "(max-width: 768px) 90vw, 31vw",
  fit = "cover",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${yOffset}%`, `${yOffset}%`]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </motion.div>
  );
}
