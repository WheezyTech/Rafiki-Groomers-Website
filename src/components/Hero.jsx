function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=2000&q=85"
          alt="Happy dog receiving professional grooming"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-3xl animate-fade-up">

          {/* Small Heading */}
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-secondary">
            Professional Door-to-Door Pet Grooming
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Happy Pets.
            <br />
            <span className="text-secondary">
              Beautifully Groomed.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            At RAFIKI PET GROOMERS, we bring professional grooming directly to
            your doorstep. Our gentle and convenient pet grooming service helps
            keep your pets clean, comfortable, healthy and looking their best
            — right at home.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#booking"
              className="rounded-full bg-secondary px-7 py-3.5 text-center font-bold text-text transition duration-300 hover:-translate-y-1 hover:bg-secondary/90 hover:shadow-lg"
            >
              Book Grooming
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-secondary hover:text-secondary"
            >
              View Services
            </a>

          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-6">
            <div>
              <p className="text-2xl">🏠</p>
              <p className="mt-1 text-sm text-white/75">We Come to You</p>
            </div>

            <div>
              <p className="text-2xl">🐶</p>
              <p className="mt-1 text-sm text-white/75">Dog Grooming</p>
            </div>

            <div>
              <p className="text-2xl">🐱</p>
              <p className="mt-1 text-sm text-white/75">Cat Grooming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center text-white/75 transition hover:text-secondary sm:flex"
      >
        <span className="mb-2 text-xs uppercase tracking-widest">
          Explore
        </span>

        <span className="text-xl">
          ↓
        </span>
      </a>
    </section>
  );
}

export default Hero;