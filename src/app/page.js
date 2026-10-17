import Button from "./components/Button";
import ScrollDown from "./components/ScrollDown";
import Home4sections from "./components/Home4sections";
import Footer from "./components/Footer";
import ParallaxImage from "./components/ParallaxImage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          className="fixed inset-0 h-full w-full object-cover"
          style={{ filter: "brightness(0.6)" }}
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-16 text-center md:px-[5vw] md:pb-0">
            <Image
              src="/logo-liggend.png"
              alt="Collaborative Strength"
              width={1457}
              height={220}
              priority
              className="h-auto w-[62vw] pb-6 opacity-80 invert md:w-[24vw] md:pt-[8vw] md:pb-[2.4vw]"
            />

          <h1 className="relative mb-8 max-w-none text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-[var(--light-gray)] md:mb-[3vw] md:max-w-[80vw] md:text-[5.5vw] md:leading-[5vw]">
            <span className="inline-block pb-2 text-[var(--light-gray)] mix-blend-difference md:pb-[4vw]">
              POWERLIFTING COACHING <br /> OP INDIVIDUELE BASIS
            </span>
          </h1>

          <div className="flex w-full justify-center md:w-auto">
            <Button href="/contact" text="BOEK EEN GESPREK" />
          </div>
        </div>

        <div className="absolute right-6 bottom-6 z-30 md:right-[5vw] md:bottom-[2vw]">
          <ScrollDown />
        </div>
      </section>

      <section className="relative min-h-screen w-full bg-[var(--light-gray)] pt-28 pb-24 text-[var(--dark)] md:py-[15vh]">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />
        <div className="relative z-10 flex flex-col items-stretch px-6 pb-28 md:items-center md:px-0 md:pb-[15vw]">
          <p className="w-full pb-4 text-left text-[1.35rem] font-bold leading-snug md:w-[55vw] md:pb-[2vw] md:text-center md:text-[2.5vw] md:leading-normal">
            Je weet dat je sterker wilt worden, maar wat betekent powerlifting
            écht voor jou?
          </p>
          <p className="w-full text-left text-[0.9375rem] leading-6 md:w-[45vw] md:text-center md:text-[1.1vw] md:leading-[2vw]">
            Samen gaan we ontdekken waar jij het meeste plezier uithaalt en hoe
            we daar een plan omheen bouwen. Progressie komt niet alleen door
            harder trainen, maar vooral door een aanpak die past bij jouw
            ambities en waar je langdurig gemotiveerd door blijft. Je doelen
            hoeven niet vast te staan. We werken eraan, passen het aan waar
            nodig, en zorgen ervoor dat jij blijft groeien.
          </p>
        </div>
        <Home4sections />
        <div className="flex w-full justify-center px-6 pt-20 pb-16 md:px-0 md:py-[5vw]">
          <Button href="/diensten" text="DIENSTEN" />
        </div>
        <h2 className="relative flex w-full justify-center px-6 pt-24 text-center text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-[var(--light-gray)] md:px-0 md:pt-[5vw] md:text-[5.5vw] md:leading-[5vw]">
          <span className="z-10 inline-block pb-4 text-[var(--light-gray)] mix-blend-difference md:pb-[4vw]">
            COLLABORATIVE
            <br />
            NAAR VERBETERINGEN
          </span>
        </h2>
        <div className="relative top-[-6.5vw] flex w-full items-center justify-center">
          <div className="flex items-end gap-[0.5vw]">
            <ParallaxImage
              src="/image2.png"
              alt="Coach plakt een lotnummer op de rug van een powerlifter"
              className="h-[33vw] w-[24vw]"
              yOffset={8}
            />
            <ParallaxImage
              src="/image1.png"
              alt="Twee lifters op het podium na een wedstrijd"
              className="h-[42vw] w-[31vw]"
              yOffset={12}
            />
            <ParallaxImage
              src="/image3.png"
              alt="Squat in het rek tijdens een training"
              className="h-[33vw] w-[24vw]"
              yOffset={8}
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-stretch px-6 pt-8 pb-16 md:items-center md:px-0 md:pt-0 md:pb-[5vw]">
          <p className="w-full pb-4 text-left text-[1.35rem] font-bold leading-snug md:w-[65vw] md:pb-[2vw] md:text-center md:text-[2.5vw] md:leading-normal">
            Een passend trainings systeem ontwikkelen we door op wetenschap en
            input van jou te handelen.
          </p>
          <p className="w-full text-left text-[0.9375rem] leading-6 md:w-[45vw] md:text-center md:text-[1.1vw] md:leading-[2vw]">
            Bij mij ga je veel input geven, waar dat dan ook over mag gaan.
            Externe variabelen, pijntjes, trainingsmotivatie en zelfs op de
            manier hoe ik coach zijn zeer welkom, sterker nog, ik verwacht het.
            Ik geloof er namelijk in dat iedereen powerliften anders beleeft. Ik
            werk samen uit wat powerliften voor jou betekent en help naar de
            passende persoonlijke doelen die we samen stellen.
          </p>
        </div>
        <div className="flex w-full justify-center px-6 pt-8 pb-24 md:px-0 md:pt-0 md:pb-[5vw]">
          <Button href="/about" text="OVER MIJ" />
        </div>
      </section>

      <section className="relative w-full bg-[var(--dark)] px-6 pt-28 pb-24 text-[var(--light-gray)] md:px-0 md:pt-[15vh] md:pb-[5vw]">
        <h2 className="relative flex w-full justify-center pt-0 text-center text-[clamp(1.7rem,8vw,2.35rem)] font-black leading-[1.05] text-[var(--light-gray)] md:pt-[5vw] md:text-[5.5vw] md:leading-[5vw]">
          <span className="z-10 inline-block pb-4 text-[var(--light-gray)] mix-blend-difference md:pb-[4vw]">
            FOCUS ZONDER CHAOS
          </span>
        </h2>
        <div className="relative flex w-full flex-col items-stretch gap-10 pt-14 md:left-[10vw] md:top-[-6.5vw] md:mt-0 md:w-[80vw] md:flex-row md:items-end md:gap-[0.5vw] md:pt-0">
          <div className="flex w-full items-end gap-2 md:contents">
            <ParallaxImage
              src="/image5.png"
              alt="Lifter en coach na een poging"
              className="h-44 w-[42%] md:h-[20vw] md:w-[15vw]"
              yOffset={8}
            />
            <ParallaxImage
              src="/image4.png"
              alt="Lifter in wedstrijdsinglet voor een poging"
              className="h-56 w-[54%] md:h-[30vw] md:w-[19vw] md:pl-[0.5vw]"
              yOffset={12}
            />
          </div>
          <div className="flex w-full flex-col text-[0.9375rem] leading-6 text-white md:w-[50vw] md:pl-[5vw] md:text-[1.1vw] md:leading-[2vw]">
            <p className="pb-4 md:pb-[1.5vw]">
              Als powerlifter kun je makkelijk verdwalen in alle informatie,
              keuzes en emoties die bij training komen kijken. Je twijfelt
              misschien over je schema, past dingen impulsief aan op basis van
              gevoel, of raakt overweldigd door details. Dit is precies waar een
              coach het verschil maakt.
            </p>
            <div className="relative my-2 h-8 w-3 md:my-0 md:h-[4vw] md:w-[0.85vw] md:pl-[5vw]">
              <Image
                src="/arrow.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="pt-4 md:pt-[1.5vw]">
              Ik neem de strategische keuzes uit handen van
              programmeeraanpassingen tot technische finetuning zodat jij je
              niet druk hoeft te maken over wat werkt, maar simpelweg kunt
              uitvoeren. Geen keuzestress, geen ruis. Alleen progressie.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center pt-16 md:pt-0 md:pb-[5vw]">
          <Button href="/contact" text="BOEK EEN GESPREK" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
