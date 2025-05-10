import Button from "./components/Button";
import ScrollDown from "./components/ScrollDown";
import Home4sections from "./components/Home4sections";

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
        <div className=" relative z-10 flex items-center flex-col pb-[10vw]">
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
          <span className="text-[var(--light-gray)] mix-blend-difference inline-block pb-[4vw]">
            COLLABORATIVE
            <br />
            NAAR VERBETERINGEN
          </span>
        </h1>
      </section>
    </div>
  );
}
