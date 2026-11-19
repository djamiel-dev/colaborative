import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleToc from "../../components/blog/ArticleToc";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { getPost, posts, readingTime, slugify } from "../posts";

// Let op: globals.css reset met `* { margin: 0 }` alle Tailwind-marges (ook mx-auto).
// Centreren en spacing gaat hier daarom via grid, flex en padding.

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Collaborative Strength`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const next = posts[(posts.indexOf(post) + 1) % posts.length];

  let count = 0;
  const blocks = post.body.map((block) =>
    block.h2
      ? { ...block, id: slugify(block.h2), number: String(++count).padStart(2, "0") }
      : block
  );
  const headings = blocks
    .filter((block) => block.h2)
    .map(({ id, number, h2 }) => ({ id, number, text: h2 }));

  return (
    <>
      <header className="bg-[var(--dark)] px-6 pt-28 pb-14 text-[var(--light-gray)] md:px-[8vw] md:pt-[9vw] md:pb-[6vw]">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,38%)] md:gap-[5vw]">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 pb-8 text-sm font-bold text-[var(--light-gray)]/60 hover:text-[var(--teal)] md:pb-[2.5vw] md:text-[clamp(0.8rem,0.85vw,1rem)]"
            >
              <span aria-hidden="true">←</span> Alle blogposts
            </Link>
            <p className="pb-4 text-xs font-bold tracking-[0.2em] text-[var(--teal)] uppercase md:pb-[1.2vw] md:text-[clamp(0.7rem,0.75vw,0.9rem)]">
              {post.tags.join(" · ")}
            </p>
            <h1 className="text-[clamp(2rem,8vw,2.6rem)] font-black leading-[1.05] text-balance md:text-[3.6vw]">
              {post.title}
            </h1>
            <p className="max-w-[34rem] pt-5 text-base leading-7 text-[var(--light-gray)]/70 md:max-w-[36vw] md:pt-[1.6vw] md:text-[clamp(1rem,1.1vw,1.3rem)] md:leading-[1.65]">
              {post.excerpt}
            </p>
            <p className="pt-6 text-sm text-[var(--light-gray)]/50 md:pt-[2vw] md:text-[clamp(0.8rem,0.85vw,1rem)]">
              Djamiel Saou <span aria-hidden="true">·</span> {readingTime(post)} min lezen
            </p>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section className="relative isolate bg-[var(--light-gray)] px-6 py-16 text-[var(--dark)] md:px-[8vw] md:py-[6vw]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/backgroundwall.png')" }}
        />

        {/* Tekst gecentreerd op het scherm. Vanaf 1400px staat de inhoudsopgave links
            (uitgelijnd met de titel), met een even brede lege kolom rechts als tegenwicht. */}
        <div className="grid justify-items-center min-[1400px]:grid-cols-[minmax(14.5rem,1fr)_minmax(0,60rem)_minmax(14.5rem,1fr)] min-[1400px]:gap-[2.5vw]">
          <aside className="hidden min-[1400px]:block min-[1400px]:justify-self-stretch">
            <div className="h-full max-w-[18rem]">
              <ArticleToc headings={headings} />
            </div>
          </aside>

          <article className="w-full max-w-[56rem] min-[1400px]:max-w-none">
            {blocks.map((block, i) =>
              block.h2 ? (
                <h2 key={i} id={block.id} className="scroll-mt-28 pt-12 pb-5">
                  <span className="block pb-2 text-sm font-bold tracking-[0.2em] text-[var(--teal)]">
                    {block.number}
                  </span>
                  <span className="block text-[1.65rem] font-black leading-tight md:text-[clamp(1.85rem,2.1vw,2.6rem)]">
                    {block.h2}
                  </span>
                </h2>
              ) : (
                <p
                  key={i}
                  className={`pb-7 ${
                    i === 0
                      ? "text-[1.25rem] leading-[1.8] font-semibold text-[var(--dark)] md:text-[clamp(1.35rem,1.45vw,1.7rem)] md:leading-[1.65]"
                      : "text-[0.9375rem] leading-6 text-[#2a2a2a] md:text-[1.1vw] md:leading-[2vw]"
                  }`}
                >
                  {block.p}
                </p>
              )
            )}

            <div className="pt-10">
              <div className="flex flex-col gap-6 border-l-4 border-[var(--teal)] py-2 pl-6 md:pl-8">
                <div>
                  <p className="pb-2 text-xs font-bold tracking-[0.2em] text-[var(--teal)]">
                    VOLGENDE STAP
                  </p>
                  <p className="pb-2 text-2xl font-black leading-tight md:text-3xl">
                    Zelf sterker worden?
                  </p>
                  <p className="max-w-md text-[0.95rem] leading-6 text-[#161616]/70">
                    Plan een vrijblijvend gesprek en we kijken samen naar je training.
                  </p>
                </div>
                <Button href="/contact" text="BOEK EEN GESPREK" fullWidth />
              </div>
            </div>

            {next !== post && (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex items-end justify-between gap-6 border-b border-[#161616]/20 pt-14 pb-6"
              >
                <span>
                  <span className="block pb-2 text-xs font-bold tracking-[0.2em] text-[#161616]/50 uppercase">
                    Volgende artikel
                  </span>
                  <span className="block text-xl font-black leading-tight transition-colors group-hover:text-[var(--teal)] md:text-[clamp(1.4rem,1.6vw,1.9rem)]">
                    {next.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-2xl font-bold text-[var(--teal)] transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            )}
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}
