"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "A",
    title: "AMBITIE",
    text: "analyseren we en wordt concreet",
    height: "25vw",
    line: "25vw",
  },
  {
    id: "B",
    title: "AANPAK",
    text: "blijft samen bijgesteld worden",
    height: "30vw",
    line: "30vw",
  },
  {
    id: "C",
    title: "SBD",
    text: "gaat vooruitgang in komen",
    height: "25vw",
    line: "25vw",
  },
  {
    id: "D",
    title: "REFLECT",
    text: "om stappen te blijven maken",
    height: "30vw",
    line: "30vw",
  },
];

function Marker({ letter, compact = false }) {
  if (compact) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#161616]">
        <span className="text-sm font-semibold leading-none">{letter}</span>
      </div>
    );
  }

  return (
    <div
      style={{
        borderRadius: "50%",
        width: "4vw",
        height: "4vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "0.11vw solid #161616",
        marginBottom: "3vw",
      }}
    >
      <span style={{ fontWeight: "600", fontSize: "1.2vw", lineHeight: "1" }}>
        {letter}
      </span>
    </div>
  );
}

export default function Home4sections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const lineHeights = [
    useTransform(scrollYProgress, [0, 1], ["0vw", steps[0].line]),
    useTransform(scrollYProgress, [0, 1], ["0vw", steps[1].line]),
    useTransform(scrollYProgress, [0, 1], ["0vw", steps[2].line]),
    useTransform(scrollYProgress, [0, 1], ["0vw", steps[3].line]),
  ];
  const textOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const circleScale = useTransform(scrollYProgress, [0.7, 1], [0.5, 1]);
  const mobileLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative w-full text-[var(--dark)]">
      <div className="hidden md:block">
        <div
          className="relative flex w-full items-end"
          style={{ height: "30vw", paddingBottom: "5vw" }}
        >
          <div style={{ width: "100%", paddingLeft: "4vw", paddingRight: "4vw" }}>
            <div className="flex" style={{ gap: "24vw" }}>
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  style={{
                    display: "flex",
                    height: step.height,
                    position: "relative",
                  }}
                >
                  <motion.div
                    style={{
                      width: "0.11vw",
                      height: lineHeights[index],
                      backgroundColor: "#161616",
                    }}
                  />
                  <motion.div
                    style={{
                      opacity: textOpacity,
                      marginLeft: "2vw",
                      position: "absolute",
                      bottom: "0",
                      width: "18vw",
                    }}
                  >
                    <motion.div
                      style={{ scale: circleScale, marginBottom: "1vw" }}
                    >
                      <Marker letter={step.id} />
                    </motion.div>
                    <h3
                      style={{
                        fontSize: "4vw",
                        fontWeight: "800",
                        marginBottom: "0.5vw",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "1vw", lineHeight: "1.5" }}>
                      {step.text}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-6 py-4 md:hidden">
        <motion.div
          className="absolute top-0 left-6 w-px bg-[#161616]"
          style={{ height: mobileLine }}
        />
        <div className="flex flex-col gap-12 pl-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="pb-4">
                <Marker letter={step.id} compact />
              </div>
              <h3 className="pb-2 text-[2rem] font-extrabold leading-none">
                {step.title}
              </h3>
              <p className="max-w-xs text-base leading-6">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
