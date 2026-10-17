import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full isolate bg-[var(--dark)] text-[var(--light-gray)]">
      <div className="mx-auto flex w-full flex-col items-start gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-[4vw] md:py-[2.4vw]">
        <div className="flex items-center gap-4 md:gap-[1vw]">
          <a href="/" className="flex items-center" aria-label="Collaborative Strength">
            <Logo className="h-10 w-auto md:h-[2.8vw]" />
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--light-gray)] transition hover:text-[var(--teal)]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 md:h-[1.4vw] md:w-[1.4vw]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
        <NavLinks variant="footer" />
      </div>
    </footer>
  );
}
