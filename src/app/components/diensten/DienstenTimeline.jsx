"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import ParallaxImage from "../ParallaxImage";

const steps = [
  {
    title: "Gratis Intake",
    text: "We starten met een gratis gesprek om te kijken waar jij nu staat en wat je wilt bereiken. Of je al doelen hebt of die nog samen wilt ontdekken: we maken samen een plan.",
    icon: "/pages/icon-question.png",
    image: "/pages/diensten-intake.png",
    alt: "Atleet in de squat met oranje schijven",
  },
  {
    title: "Wekelijks schema",
    text: "Geen statisch plan. Elke week pas ik jouw schema aan op basis van je prestaties, feedback en planning. Alles wordt afgestemd op hoe jij je voelt en wat je nodig hebt.",
    icon: "/pages/icon-calendar.png",
    image: "/pages/diensten-schema.png",
    alt: "Voorbeeld van een weekschema",
  },
  {
    title: "Reactie binnen 24 uur",
    text: "Stuur video's van je training of stel vragen. Ik reageer dagelijks met inhoudelijke feedback, cues, aanpassingen en alles wat je nodig hebt om beter te worden.",
    icon: "/pages/icon-reply.png",
    image: "/pages/diensten-chat.png",
    alt: "Feedback op een trainingsvideo",
  },
  {
    title: "Videocalls",
    text: "Heb je een vraagstuk dat meer uitleg of verdieping nodig heeft? Dan plannen we een videocall. Denk aan techniek, mindset, periodisering of wedstrijdvoorbereiding.",
    icon: "/pages/icon-video.png",
    image: "/pages/diensten-call.png",
    alt: "Coach tijdens een videocall",
  },
  {
    title: "Wedstrijdcoaching",
    text: "Wil je meedoen aan een wedstrijd? Ik help je met de voorbereiding, strategie en begeleiding op de dag zelf. Voor veel atleten is dit de stap die ze écht powerlifter maakt.",
    icon: "/pages/icon-barbell.png",
    image: "/pages/diensten-meet.png",
    alt: "Begeleiding tijdens een bankdrukpoging",
  },
];

export default function DienstenTimeline() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const firstIconRef = useRef(null);
  const lastIconRef = useRef(null);
  const [track, setTrack] = useState({ top: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 35%", "end 50%"],
  });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measure = () => {
      const root = ref.current;
      const first = firstIconRef.current;
      const last = lastIconRef.current;
      if (!root || !first || !last) return;
      const center = (el) => {
        let y = el.offsetHeight / 2;
        let node = el;
        while (node && node !== root) {
          y += node.offsetTop;
          node = node.offsetParent;
        }
        return y;
      };
      const top = center(first);
      const end = center(last);
      setTrack({ top, height: Math.max(0, end - top) });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(ref.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        ref={trackRef}
        className="absolute left-[1.75rem] w-px md:left-[2.4vw]"
        style={{ top: track.top, height: track.height }}
      >
        <motion.div className="w-full bg-[#161616]" style={{ height: line }} />
      </div>
      <div className="flex flex-col gap-16 md:gap-[5vw]">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            className="grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-5 md:grid-cols-[4.8vw_minmax(0,1fr)_24vw] md:items-center md:gap-x-[3vw]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              ref={
                index === 0
                  ? firstIconRef
                  : index === steps.length - 1
                    ? lastIconRef
                    : undefined
              }
              className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#161616] bg-[var(--light-gray)] md:h-[4.8vw] md:w-[4.8vw]"
            >
              <img
                src={step.icon}
                alt=""
                className="h-7 w-7 object-contain md:h-[2.2vw] md:w-[2.2vw]"
              />
            </div>
            <div>
              <h2 className="pb-3 text-[1.35rem] font-bold leading-tight md:pb-[0.8vw] md:text-[1.8vw]">
                {step.title}
              </h2>
              <p className="max-w-xl text-[0.9375rem] leading-6 text-[#161616]/90 md:max-w-[36vw] md:text-[1.05vw] md:leading-[1.7vw]">
                {step.text}
              </p>
            </div>
            <ParallaxImage
              src={step.image}
              alt={step.alt}
              yOffset={6}
              fit={step.title === "Wekelijks schema" ? "contain" : "cover"}
              sizes="(max-width: 768px) 90vw, 24vw"
              className="col-span-2 h-52 w-full bg-white md:col-span-1 md:h-[15vw]"
            />
          </motion.article>
        ))}
      </div>
    </div>
  );
}
