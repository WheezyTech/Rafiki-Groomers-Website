import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/15 bg-primary/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 text-xl font-bold tracking-wider text-white transition duration-300 hover:scale-105"
        >
          <img
            src="/rafiki-logo.png"
            alt=""
            className="h-11 w-11 shrink-0 rounded bg-white object-contain"
          />
          <span>
            RAFIKI<span className="text-secondary"> PET GROOMERS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition duration-300 hover:text-secondary"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-secondary/90"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/15 bg-primary px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-white/80 transition duration-300 hover:text-secondary"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-secondary px-5 py-3 text-center font-semibold text-text"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
