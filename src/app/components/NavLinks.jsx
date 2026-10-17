const links = [
  { href: "/#gratis-schema", label: "Gratis schema" },
  { href: "/diensten", label: "Diensten" },
  { href: "/about", label: "Over mij" },
  { href: "/blog", label: "Blog" },
];

export default function NavLinks({ variant = "bar", onNavigate }) {
  if (variant === "menu") {
    return (
      <ul className="flex flex-col gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onNavigate}
              className="text-[1.75rem] font-bold transition hover:text-[var(--teal)]"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/contact"
            onClick={onNavigate}
            className="inline-block bg-[var(--teal)] px-5 py-3 text-base font-bold text-black transition hover:bg-[var(--light-gray)]"
          >
            Boek een gesprek
          </a>
        </li>
      </ul>
    );
  }

  const isFooter = variant === "footer";

  return (
    <ul
      className={
        isFooter
          ? "flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-[2.5vw]"
          : "relative flex items-center gap-[2.5vw]"
      }
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={
              isFooter
                ? "text-sm font-medium transition hover:text-[var(--teal)] md:text-[0.95vw]"
                : "text-[1vw] font-bold transition hover:text-[var(--teal)]"
            }
          >
            {link.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="/contact"
          className={
            isFooter
              ? "text-sm font-medium text-[var(--light-gray)] transition hover:text-[var(--teal)] md:text-[0.95vw]"
              : "bg-[var(--teal)] px-[1vw] py-[0.5vw] text-[1vw] font-bold text-black transition hover:bg-[var(--light-gray)]"
          }
        >
          Boek een gesprek
        </a>
      </li>
    </ul>
  );
}
