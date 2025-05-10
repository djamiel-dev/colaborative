"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home4sections() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Lijn animaties
  const line1Height = useTransform(scrollYProgress, [0, 1], ["0vw", "25vw"]);
  const line2Height = useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]);
  const line3Height = useTransform(scrollYProgress, [0, 1], ["0vw", "25vw"]);
  const line4Height = useTransform(scrollYProgress, [0, 1], ["0vw", "30vw"]);

  // Tekst animaties
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className="relative w-full flex items-end"
      style={{
        height: "30vw",
        paddingBottom: "2vw",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingLeft: "4vw",
          paddingRight: "4vw",
        }}
      >
        <div className="flex" style={{ gap: "24vw" }}>
          {/* Sectie 1 */}
          <div
            style={{
              display: "flex",
              height: "25vw",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "0.12vw",
                height: line1Height,
                backgroundColor: "black",
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
              <h3
                style={{
                  fontSize: "4vw",
                  fontWeight: "black",
                }}
              >
                AMBITIE
              </h3>
              <p style={{ fontSize: "1vw", lineHeight: "1.5" }}>
                analyseren we en wordt concreet
              </p>
            </motion.div>
          </div>

          {/* Sectie 2 */}
          <div
            style={{
              display: "flex",
              height: "30vw",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "0.12vw",
                height: line2Height,
                backgroundColor: "black",
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
              <h3
                style={{
                  fontSize: "4vw",
                  fontWeight: "black",
                }}
              >
                AANPAK
              </h3>
              <p style={{ fontSize: "1vw", lineHeight: "1.5" }}>
                blijft samen bijgestelt worden
              </p>
            </motion.div>
          </div>

          {/* Sectie 3 */}
          <div
            style={{
              display: "flex",
              height: "25vw",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "0.12vw",
                height: line3Height,
                backgroundColor: "black",
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
              <h3
                style={{
                  fontSize: "4vw",
                  fontWeight: "black",
                }}
              >
                SBD
              </h3>
              <p style={{ fontSize: "1vw", lineHeight: "1.5" }}>
                gaat vooruitgang in komen
              </p>
            </motion.div>
          </div>

          {/* Sectie 4 */}
          <div
            style={{
              display: "flex",
              height: "30vw",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "0.12vw",
                height: line4Height,
                backgroundColor: "black",
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
              <h3
                style={{
                  fontSize: "4vw",
                  fontWeight: "black",
                }}
              >
                REFLECT
              </h3>
              <p style={{ fontSize: "1vw", lineHeight: "1.5" }}>
                om stappen te blijven maken
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
