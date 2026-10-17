"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import ParallaxImage from "../ParallaxImage";

const traits = [
  {
    title: "ERVARING",
    text: "Al meer dan 3 jaar ben ik dankbaar mensen naar hun verschillende doelen te helpen.",
  },
  {
    title: "MEET DAY",
    text: "Met veel atleten naar wedstrijden gewerkt en het samen ter plekke geregeld kunnen krijgen.",
  },
  {
    title: "LEERGIERIG",
    text: "Ten alle tijden bezig mezelf blijven verbeteren als coach door te reflecteren en eigen research.",
  },
];

const indents = ["", "md:pl-[7.2vw]", "md:pl-[14.4vw]"];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

function StorySplit({ title, image, imageAlt, imageSide, children }) {
  const imageLeft = imageSide === "left";

  return (
    <div className="relative pt-24 md:pt-[8vw]">
      <h2
        className={`relative pb-6 text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-[var(--dark)] md:absolute md:inset-x-0 md:top-[8vw] md:z-10 md:pb-0 md:text-[5.5vw] md:leading-[5vw] md:text-[var(--light-gray)] md:mix-blend-difference ${
          imageLeft ? "md:text-center" : "md:text-left md:whitespace-nowrap"
        }`}
      >
        {title}
      </h2>
      <div
        className={`grid items-center gap-8 ${
          imageLeft
            ? "md:grid-cols-[25vw_1fr] md:gap-[7vw] md:pt-[1.5vw]"
            : "md:grid-cols-[1fr_28vw] md:gap-[4vw] md:pt-[2.2vw]"
        }`}
      >
        <ParallaxImage
          src={image}
          alt={imageAlt}
          yOffset={imageLeft ? 6 : 3}
          sizes={imageLeft ? "(max-width: 768px) 90vw, 25vw" : "(max-width: 768px) 90vw, 28vw"}
          className={`h-80 w-full ${imageLeft ? "md:h-[33.5vw]" : "order-2 md:h-[34vw]"}`}
        />
        <motion.p
          className={`max-w-xl text-[0.9375rem] leading-6 md:max-w-[40vw] md:text-[1.05vw] md:leading-[1.7vw] ${
            imageLeft ? "" : "order-1"
          }`}
          {...reveal}
        >
          {children}
        </motion.p>
      </div>
    </div>
  );
}

export default function AboutStory() {
  return (
    <div className="relative">
      <div className="flex w-full flex-col gap-10 md:gap-[3.2vw]">
        {traits.map((trait, index) => (
          <div key={trait.title} className={indents[index]}>
            <motion.h2
              className="pb-3 text-[1.35rem] font-black tracking-wide md:pb-[0.6vw] md:text-[2.2vw]"
              {...reveal}
            >
              {trait.title}
            </motion.h2>
            <motion.p
              className="max-w-xl pb-5 text-[0.9375rem] leading-6 md:max-w-[32vw] md:pb-[1.2vw] md:text-[1.05vw] md:leading-[1.7vw]"
              {...reveal}
            >
              {trait.text}
            </motion.p>
            <motion.div
              className="h-px origin-left bg-[#161616]/25"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <StorySplit
        title="WAAR PASSIE BEGON"
        image="/pages/about-passie.png"
        imageAlt="Djamiel in een restaurant"
        imageSide="left"
      >
        Begonnen om fitter te worden en af te vallen. Ik werd al snel verliefd
        op de gym en wilde alles erover uitzoeken. Sinds dag 1 al een grote
        aanleg voor de SBD gehad. Voordat ik het wist zat ik LiftVault voor
        schema&apos;s af te scrollen en Johnny Candito video&apos;s te kijken.
        Deze kennis probeerde ik al snel uit te oefenen door niet alleen
        mezelf te coachen maar ook vele vrienden om nog meer te kunnen leren.
      </StorySplit>

      <div className="flex justify-center pt-24 md:pt-[7vw]">
        <motion.blockquote
          className="max-w-4xl px-2 text-center text-[1.25rem] font-bold leading-snug md:max-w-[52vw] md:text-[1.9vw] md:leading-[2.6vw]"
          {...reveal}
        >
          “I hear and I forget. I see and I remember. I do and I understand.” –
          Confucius
        </motion.blockquote>
      </div>

      <div className="flex justify-center pt-12 md:pt-[3vw]">
        <Button href="/diensten" text="DIENSTEN" />
      </div>

      <StorySplit
        title="BEGRIJPEN MAAKT STERK"
        image="/pages/about-sterk.png"
        imageAlt="Atleet en coach na een wedstrijd"
        imageSide="right"
      >
        Een goede coach geeft niet alleen instructies, maar leert zijn atleten
        om zelf na te denken en te begrijpen waarom iets werkt. Mijn doel is
        om atleten niet alleen sterker te maken, maar ze ook de tools te geven
        om hun eigen progressie beter te sturen. Powerlifting draait niet
        alleen om kilo&apos;s tillen, maar om inzicht, strategie en
        consistentie.
      </StorySplit>

      <div className="flex justify-center pt-16 md:pt-[4vw]">
        <Button href="/contact" text="BOEK EEN GESPREK" />
      </div>
    </div>
  );
}
