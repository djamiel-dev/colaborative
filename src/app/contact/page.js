import BookingForm from "../components/contact/BookingForm";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Boek een gesprek | Collaborative Strength",
  description: "Plan een gratis kennismakingscall.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        src="/pages/contact-hero.png"
        alt="Deadlift tijdens een wedstrijd"
        title="MAAK KENNIS"
      />
      <section className="relative isolate bg-[var(--light-gray)] px-6 pt-20 pb-24 text-[var(--dark)] md:px-[8vw] md:pt-[6vw] md:pb-[6vw]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />
        <BookingForm />
      </section>
      <Footer />
    </>
  );
}
