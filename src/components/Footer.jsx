function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block"
            >
              <img
                src="/rafiki-logo.png"
                alt="RAFIKI PET GROOMERS"
                className="h-36 w-36 rounded bg-white object-contain"
              />
            </a>

            <p className="mt-5 max-w-md leading-7 text-white/75">
              Professional pet grooming services dedicated to keeping your
              furry friends clean, comfortable, healthy and happy.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-secondary hover:text-text"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-secondary hover:text-text"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-secondary hover:text-text"
              >
                ♪
              </a>

              <a
                href="https://wa.me/254759728121"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-secondary hover:text-text"
              >
                ☎
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/75 transition hover:text-secondary"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-white/75 transition hover:text-secondary"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-white/75 transition hover:text-secondary"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-white/75 transition hover:text-secondary"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-white/75 transition hover:text-secondary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-white/75">
              <li>Dog Grooming</li>
              <li>Cat Grooming</li>
              <li>Bath & Dry</li>
              <li>Hair Trimming</li>
              <li>Nail Trimming</li>
              <li>Full Grooming</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          <p>
            © {currentYear} RAFIKI PET GROOMERS. All rights reserved.
          </p>

          <p>
            Made with ❤️ for pets.
          </p>

          <p>
            ICT/power Wheezy Systems &amp; Innovation
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;