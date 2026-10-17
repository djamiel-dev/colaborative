import AboutStory from "../components/about/AboutStory";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Over mij | Collaborative Strength",
  description: "Djamiel Saou, powerlifting coach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        src="/pages/about-hero.png"
        alt="Djamiel in de squat tijdens een wedstrijd"
        title="DJAMIEL SAOU"
      />
      <section className="relative isolate bg-[var(--light-gray)] px-6 pt-20 pb-24 text-[var(--dark)] md:px-[10vw] md:pt-[7vw] md:pb-[6vw]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />
        <AboutStory />
      </section>
      <Footer />
    </>
  );
}
