"use client";

import { motion } from "framer-motion";
import ParallaxImage from "../ParallaxImage";

const posts = [
  {
    date: "14-4-2024",
    tags: "Techniek, Squat, Mindset",
    title: "Waarom je voeten belangrijker zijn dan je barpath",
    image: "/pages/blog-barpath.png",
    alt: "Vergelijking van twee squatposities",
  },
  {
    date: "1-4-2024",
    tags: "Coachingfilosofie, Trainings-effectiviteit",
    title: "Techniek hoeft niet perfect om effectief te zijn",
    image: "/pages/blog-techniek.png",
    alt: "Powerlifter in de deadlift",
  },
  {
    date: "17-3-2024",
    tags: "Programming, Herstel, Mindset",
    title: "Deloads zijn niet voor zwakkelingen",
    image: "/pages/blog-deload.png",
    alt: "Atleet rekt zijn been op een bank",
  },
  {
    date: "7-3-2024",
    tags: "Coachingfilosofie, Motivatie, Lange termijn",
    title: "Je hoeft niet direct te weten waar je naartoe wilt",
    image: "/pages/blog-doelen.png",
    alt: "Lifter voor een scorebord",
  },
];

export default function BlogList() {
  return (
    <div className="relative z-10">
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            className="grid items-center gap-6 border-b border-[#161616]/20 py-10 md:grid-cols-[minmax(0,36vw)_20vw] md:justify-between md:gap-[6vw] md:py-[2.2vw]"
            initial={{ opacity: 0, x: -36, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
          >
            <div>
              <p className="pb-2 text-sm text-[#161616]/70 md:pb-[0.4vw] md:text-[0.9vw]">
                {post.date}
              </p>
              <p className="pb-3 text-sm md:pb-[0.7vw] md:text-[0.95vw]">
                {post.tags}
              </p>
              <h2 className="pb-4 text-[1.45rem] font-black leading-tight md:pb-[0.8vw] md:text-[2.15vw] md:leading-[2.45vw]">
                {post.title}
              </h2>
              <p className="font-bold text-[var(--teal)] md:text-[1vw]">
                Read more →
              </p>
            </div>
            <ParallaxImage
              src={post.image}
              alt={post.alt}
              yOffset={5}
              sizes="(max-width: 768px) 90vw, 20vw"
              className="order-first h-52 w-full md:order-none md:h-[12.5vw]"
            />
          </motion.article>
        ))}
      </div>
      <div className="flex justify-center pt-16 md:pt-[4vw]">
        <button
          type="button"
          className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-base font-bold text-[#575757] transition-colors hover:text-[#161616] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#575757] md:text-[1.15vw]"
        >
          Lees meer...
        </button>
      </div>
    </div>
  );
}
