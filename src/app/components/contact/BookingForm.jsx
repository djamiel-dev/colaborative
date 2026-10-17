"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../Button";
import ParallaxImage from "../ParallaxImage";

const expectations = [
  "Uitleg over hoe coaching werkt en wat je kunt verwachten",
  "Bespreken van je huidige situatie, doelen & vragen",
  "Een gezellige en persoonlijke kennismaking met mij",
];

const fields = [
  { name: "voornaam", label: "Voornaam", type: "text" },
  { name: "achternaam", label: "Achternaam", type: "text" },
  { name: "telefoon", label: "Telefoon", type: "tel" },
  { name: "mail", label: "Mail", type: "email" },
];

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <h2 className="relative pb-6 text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-[var(--dark)] md:absolute md:inset-x-0 md:top-0 md:z-10 md:pb-0 md:text-left md:text-[5.5vw] md:leading-[5vw] md:whitespace-nowrap md:text-[var(--light-gray)] md:mix-blend-difference">
        PLAN EEN GRATIS CALL
      </h2>
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_32vw] md:gap-x-[3.5vw]">
        <div className="md:pt-[7.6vw]">
          <motion.div
            className="flex max-w-xl flex-col gap-4 pb-10 text-[0.9375rem] leading-6 md:max-w-none md:gap-[1.2vw] md:pb-[2.4vw] md:text-[1.05vw] md:leading-[1.7vw]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <p>
              Benieuwd wat coaching voor jou kan betekenen? In een korte
              videocall bespreken we jouw doelen, vragen en kijken we of het
              een match is.
            </p>
            <p>
              Suggereer beneden een paar datums en tijden en dan komen we samen
              tot een afspraak. Geen specifieke suggesties? Dan kom ik met een
              paar datums.
            </p>
          </motion.div>

          {sent ? (
            <p className="max-w-xl text-[1.05rem] font-bold leading-7 md:text-[1.2vw]">
              Verstuurd. Ik neem contact met je op om de call in te plannen.
            </p>
          ) : (
            <form id="booking-form" className="w-full"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              {fields.map((field, index) => (
                <motion.label
                  key={field.name}
                  className="block pb-6 md:pb-[1.4vw]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="block pb-2 text-sm text-[#575757] md:pb-[0.35vw] md:text-[0.95vw]">
                    {field.label}
                  </span>
                  <input
                    required
                    name={field.name}
                    type={field.type}
                    className="w-full border-b border-[#161616]/30 bg-transparent py-2 text-base outline-none focus:border-[var(--teal)]"
                  />
                </motion.label>
              ))}
              <motion.label
                className="block pb-8 md:pb-[2vw]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="block pb-2 text-sm text-[#575757] md:pb-[0.35vw] md:text-[0.95vw]">
                  Suggestie datums/tijden
                </span>
                <textarea
                  required
                  name="datums"
                  rows={1}
                  className="w-full resize-none border-b border-[#161616]/30 bg-transparent py-2 text-base outline-none focus:border-[var(--teal)]"
                />
              </motion.label>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-8 md:pt-[2.4vw] md:gap-[1.6vw]">
          <ParallaxImage
            src="/pages/contact-photo.png"
            alt="Djamiel met een atleet na een kennismaking"
            yOffset={3}
            sizes="(max-width: 768px) 90vw, 32vw"
            className="h-80 w-full md:h-[38vw]"
          />
          {!sent && (
            <div>
              <Button submit form="booking-form" text="VERSTUUR" />
            </div>
          )}
        </div>
      </div>

      <motion.h2
        className="pt-24 pb-8 text-center text-[1.45rem] font-black md:pt-[7vw] md:pb-[2vw] md:text-[2vw]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Wat kun je verwachten van de call?
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-3 md:gap-[1.5vw]">
        {expectations.map((item, index) => (
          <motion.p
            key={item}
            className="border border-[#161616]/15 bg-white/50 px-5 py-8 text-center text-[0.95rem] leading-6 md:px-[1.4vw] md:py-[2vw] md:text-[1vw] md:leading-[1.6vw]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
