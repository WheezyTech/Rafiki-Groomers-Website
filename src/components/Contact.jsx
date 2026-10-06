function Contact() {
  return (
    <section
      id="contact"
      className="bg-primary px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-secondary">
            Get In Touch
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            We'd Love to Meet Your Pet
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/80">
            Have a question or want to schedule a grooming session?
            Contact RAFIKI PET GROOMERS today.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {/* Phone */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center transition hover:border-secondary">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl text-text">
              📞
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Call Us
            </h3>

            <p className="mt-2 text-white/75">
              Speak with our team
            </p>

            <a
              href="tel:+254759728121"
              className="mt-4 block font-semibold text-secondary hover:text-white"
            >
              +254 759 728 121
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center transition hover:border-secondary">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl text-text">
              💬
            </div>

            <h3 className="mt-5 text-xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-2 text-white/75">
              Chat with us directly
            </p>

            <a
              href="https://wa.me/254759728121"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block font-semibold text-secondary hover:text-white"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Location */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center transition hover:border-secondary">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl text-text">
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Door-to-Door Service
            </h3>

            <p className="mt-2 text-white/75">
              We come to your home or preferred location.
            </p>
          </div>

        </div>

        {/* Bottom Area */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Opening Hours */}
          <div className="rounded-3xl bg-background p-8 text-text">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-2xl">
                🕐
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Opening Hours
                </h3>

                <p className="text-sm text-text/65">
                  Plan your pet's visit
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-4">

              <div className="flex justify-between border-b border-text/10 pb-3">
                <span className="font-medium">
                  Monday - Friday
                </span>

                <span className="font-semibold">
                  8:00 AM - 6:00 PM
                </span>
              </div>

              <div className="flex justify-between border-b border-text/10 pb-3">
                <span className="font-medium">
                  Saturday
                </span>

                <span className="font-semibold">
                  8:00 AM - 5:00 PM
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">
                  Sunday
                </span>

                <span className="font-semibold text-text/65">
                  Closed
                </span>
              </div>

            </div>
          </div>

          {/* Quick Booking */}
          <div className="flex flex-col justify-between rounded-3xl bg-secondary p-8 text-text">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">
                Ready to Visit?
              </p>

              <h3 className="mt-3 text-3xl font-extrabold">
                Give Your Pet the RAFIKI Experience
              </h3>

              <p className="mt-4 max-w-lg leading-7">
                Book a grooming appointment today and let us take care
                of your furry friend.
              </p>
            </div>

            <a
              href="#booking"
              className="mt-8 inline-block w-fit rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:bg-primary/90"
            >
              Book Appointment →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;