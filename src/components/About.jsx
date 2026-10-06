function About() {
  const benefits = [
    {
      icon: "❤️",
      title: "Gentle Care",
      description:
        "We treat every pet with patience, kindness and care throughout their grooming session.",
    },
    {
      icon: "✨",
      title: "Professional Grooming",
      description:
        "Our grooming services are designed to keep your pet clean, comfortable and looking great.",
    },
    {
      icon: "🧴",
      title: "Pet-Friendly Products",
      description:
        "We use grooming products selected with the comfort and hygiene of pets in mind.",
    },
    {
      icon: "🐾",
      title: "Pet First",
      description:
        "Your pet's comfort and safety remain at the heart of everything we do.",
    },
  ];

  return (
    <section id="about" className="bg-background text-text">

      {/* About */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1200&q=85"
              alt="Happy dog"
              className="h-[500px] w-full object-cover animate-scale-in"
            />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary px-7 py-5 text-white shadow-xl sm:-right-6">
            <p className="text-3xl font-bold text-secondary">100%</p>
            <p className="text-sm text-white/80">Pet-Focused Care</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            About RAFIKI
          </p>

          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            More Than Grooming.
            <br />
            <span className="text-primary">It's Pet Care.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-text/75">
            RAFIKI PET GROOMERS is dedicated to helping pets look and feel
            their best through professional grooming and personal care.
          </p>

          <p className="mt-4 leading-7 text-text/75">
            Whether your pet needs a refreshing bath, coat trimming, nail
            care or a complete grooming session, our goal is to provide a
            comfortable and positive experience for every pet.
          </p>

          <a
            href="#booking"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:bg-secondary hover:text-text"
          >
            Book Your Pet
          </a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Your Pet Is In Good Hands
            </h2>

            <p className="mt-5 text-lg leading-8 text-text/75">
              We combine professional grooming with a caring approach to
              make every visit comfortable for your pet.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-text/10 bg-background p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-3xl">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-text/75">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;