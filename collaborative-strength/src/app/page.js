import Button from "./components/Button";
import ScrollDown from "./components/ScrollDown";
import Home4sections from "./components/Home4sections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-[100vw] h-[100vh] overflow-hidden bg-black">
        {/* Background video */}
        <video
          className="fixed inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[5vw] text-center">
          <p className="text-[1.5vw] font-bold tracking-widest mb-[1.5vw] text-[var(--light-gray)] pt-[8vw] pb-[1.5vw] opacity-80">
            COLLABORATIVE STRENGTH.
          </p>

          {/* Hoofdtitel - zonder witte achtergrond */}
          <h1 className="text-[5.5vw] font-black leading-[5vw] mb-[3vw] max-w-[80vw] text-[var(--light-gray)] relative">
            <span className="text-[var(--light-gray)] mix-blend-difference inline-block pb-[4vw]">
              POWERLIFTING COACHING <br /> OP INDIVIDUELE BASIS
            </span>
          </h1>

          <div>
            <Button href="/contact" text="BOEK EEN GESPREK" />
          </div>
        </div>

        {/* Scroll indicator - netjes uitgelijnd met de layout */}
        <div className="absolute bottom-[2vw] right-[5vw] z-30">
          <ScrollDown />
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-[100vw] min-h-[100vh] bg-[var(--light-gray)] text-[var(--dark)] py-[15vh]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        ></div>
        <div className=" relative z-10 flex items-center flex-col pb-[15vw]">
          <p className="text-[2.5vw] font-bold w-[55vw] pb-[2vw] text-center">
            Je weet dat je sterker wilt worden, maar wat betekent powerlifing
            écht voor jou?
          </p>
          <p className="text-[1.1vw]/[2vw] w-[45vw]">
            Samen gaan we ontdekken waar jij het meeste plezier uithaalt en hoe
            we daar een plan omheen bouwen. Progressie komt niet alleen door
            harder trainen, maar vooral door een aanpak die past bij jouw
            ambities en waar je langdurig gemotiveerd door blijft. Je doelen
            hoeven nietvast te staan. We werken eraan, passen het aan waar
            nodig, en zorgen ervoor dat jij blijft groeien.
          </p>
        </div>
        <Home4sections />
        <div className="flex w-full justify-center py-[5vw]">
          <Button href="/diensten" text="DIENSTEN" />
        </div>
        <h1 className="text-[5.5vw] font-black leading-[5vw] text-[var(--light-gray)] relative text-center w-[100vw] flex justify-center pt-[5vw]">
          <span className="text-[var(--light-gray)] mix-blend-difference inline-block pb-[4vw] z-10">
            COLLABORATIVE
            <br />
            NAAR VERBETERINGEN
          </span>
        </h1>
        {/* Nieuwe afbeeldingssectie */}
        <div className="relative w-full flex justify-center items-center top-[-6.5vw]">
          <div className="flex items-end" style={{ gap: "0.5vw" }}>
            {/* Linker afbeelding */}
            <div className="relative" style={{ width: "24vw", height: "33vw" }}>
              <Image
                src="/image2.png"
                alt="Linker afbeelding"
                fill
                className="object-cover"
              />
            </div>

            {/* Middelste afbeelding (groter) */}
            <div className="relative" style={{ width: "31vw", height: "42vw" }}>
              <Image
                src="/image1.png"
                alt="Middelste afbeelding"
                fill
                className="object-cover"
              />
            </div>

            {/* Rechter afbeelding */}
            <div className="relative" style={{ width: "24vw", height: "33vw" }}>
              <Image
                src="/image3.png"
                alt="Rechter afbeelding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" relative z-10 flex items-center flex-col pb-[5vw]">
          <p className="text-[2.5vw] font-bold w-[65vw] pb-[2vw] text-center">
            Een passend trainings systeem ontwikkelen we door op wetenschap en
            input van jou te handelen.
          </p>
          <p className="text-[1.1vw]/[2vw] w-[45vw]">
            Bij mij ga je veel input geven, waar dat dan ook over mag gaan.
            Externe variable, pijntjes, trainingsmotivatie en zelfs op de manier
            hoe ik coach zijn zeer welkom, sterker nog, ik verwacht het. Ik
            geloof er namelijk in dat iedereen powerliften anders beleeft. Ik
            werk samen uit wat powerliften voor jou betekend en help naar de
            passende persoonlijke doelen die we samen stellen.
          </p>
        </div>
        <div className="flex w-full justify-center pb-[5vw]">
          <Button href="/about" text="OVER MIJ" />
        </div>
      </section>
      <section className="relative w-[100vw] min-h-[100vh] bg-[var(--dark)] text-[var(--light-gray)] py-[15vh]">
        <h1 className="text-[5.5vw] font-black leading-[5vw] text-[var(--light-gray)] relative text-center w-[100vw] flex justify-center pt-[5vw]">
          <span className="text-[var(--light-gray)] mix-blend-difference inline-block pb-[4vw] z-10">
            FOCUS ZONDER CHAOS
          </span>
        </h1>
        <div className="relative flex flex-row w-[80vw] left-[10vw] items-end top-[-6.5vw]">
          <div className="relative" style={{ width: "15vw", height: "20vw" }}>
            <Image
              src="/image2.png"
              alt="Linker afbeelding"
              fill
              className="object-cover"
            />
          </div>

          {/* Middelste afbeelding (groter) */}
          <div className="relative" style={{ width: "19vw", height: "30vw" }}>
            <Image
              src="/image1.png"
              alt="Middelste afbeelding"
              fill
              className="object-cover pl-[0.5vw]"
            />
          </div>
          <div className="flex flex-column w-[40vw] pl-[5vw] text-white">
            hallor
          </div>
        </div>
      </section>
    </div>
  );
}
