export default function Footer() {
  return (
    <nav className="relative w-full z-10 text-[var(--light-gray)] transition-all duration-300 bg-[var(--dark)]">
      <div className="w-full mx-auto py-[0.5vw] px-[4vw] flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-[3vw] h-auto mix-blend-difference"
          />
        </a>

        {/* Nav links */}
        <ul className="relative flex gap-[2.5vw] items-center right-0">
          <li>
            <a
              href="#home"
              className=" text-[1vw] hover:text-[var(--teal)] transition font-bold"
            >
              Gratis schema
            </a>
          </li>
          <li>
            <a
              href="#about"
              className=" text-[1vw] hover:text-[var(--teal)] transition font-bold"
            >
              Diensten
            </a>
          </li>
          <li>
            <a
              href="#services"
              className=" text-[1vw] hover:text-[var(--teal)] transition font-bold"
            >
              Over mij
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className=" text-[1vw] hover:text-[var(--teal)] transition font-bold"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[var(--dark)] text-[var(--light-gray)] text-[1vw] px-[1vw] py-[0.5vw] hover:text-[var(--teal)] transition font-bold"
            >
              Boek een gesprek
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
