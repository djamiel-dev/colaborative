import BlogList from "../components/blog/BlogList";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Blog | Collaborative Strength",
  description: "Artikelen over techniek, coaching en powerlifting.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        src="/pages/blog-hero.png"
        alt="Stang met rode schijven op een wedstrijdvloer"
        title="BLOGPOSTS"
      />
      <section className="relative bg-[var(--light-gray)] px-6 pt-16 pb-24 text-[var(--dark)] md:px-[8vw] md:pt-[5vw] md:pb-[5vw]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />
        <BlogList />
      </section>
      <Footer />
    </>
  );
}
