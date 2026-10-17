import Button from "../components/Button";
import DienstenTimeline from "../components/diensten/DienstenTimeline";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Diensten | Collaborative Strength",
  description: "Hoe powerlifting coaching op individuele basis in elkaar zit.",
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        src="/pages/diensten-hero.png"
        alt="Powerlifter in wedstrijdsinglet"
        title="HOE HET IN ELKAAR ZIT"
      />
      <section className="relative bg-[var(--light-gray)] px-6 pt-20 pb-24 text-[var(--dark)] md:px-[8vw] md:pt-[7vw] md:pb-[6vw]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />
        <div className="relative z-10">
          <DienstenTimeline />
          <div className="flex justify-center px-2 pt-20 md:pt-[6vw]">
            <Button href="/contact" text="BOEK EEN GESPREK" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
