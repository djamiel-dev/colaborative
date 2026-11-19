"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParallaxImage from "../ParallaxImage";
import { posts } from "../../blog/posts";

export default function BlogList() {
  return (
    <div className="relative z-10">
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            className="group relative grid items-center gap-6 border-b border-[#161616]/20 py-10 md:grid-cols-[minmax(0,36vw)_20vw] md:justify-between md:gap-[6vw] md:py-[2.2vw]"
            initial={{ opacity: 0, x: -36, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
          >
            <div>
              <p className="pb-3 text-sm md:pb-[0.7vw] md:text-[0.95vw]">
                {post.tags.join(", ")}
              </p>
              <h2 className="pb-4 text-[1.45rem] font-black leading-tight md:pb-[0.8vw] md:text-[2.15vw] md:leading-[2.45vw]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="after:absolute after:inset-0 after:z-10 after:content-[''] group-hover:text-[#161616]/80"
                >
                  {post.title}
                </Link>
              </h2>
              <p
                aria-hidden="true"
                className="font-bold text-[var(--teal)] transition-transform group-hover:translate-x-1 md:text-[1vw]"
              >
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
    </div>
  );
}
