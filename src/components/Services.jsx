const services = [
  {
    icon: "🐶",
    title: "Dog Grooming",
    description:
      "Professional dog grooming including bathing, drying, brushing, hair trimming and styling. We provide gentle grooming at your doorstep.",
  },
  {
    icon: "🐱",
    title: "Cat Grooming",
    description:
      "Gentle cat grooming to keep your cat's coat clean, healthy and comfortable, with convenient door-to-door service.",
  },
  {
    icon: "🛁",
    title: "Pet Bath & Dry",
    description:
      "Professional pet bathing and drying using pet-friendly grooming products to help keep dogs and cats clean and comfortable.",
  },
  {
    icon: "✂️",
    title: "Hair Trimming",
    description:
      "Neat and comfortable dog and cat hair trimming tailored to your pet's coat, breed and grooming needs.",
  },
  {
    icon: "🐾",
    title: "Nail Trimming",
    description:
      "Safe pet nail trimming to help maintain healthy paws and keep your dog's or cat's nails comfortable.",
  },
  {
    icon: "✨",
    title: "Full Grooming",
    description:
      "Complete pet grooming combining bathing, drying, brushing, hair trimming and nail care for a clean and well-groomed pet.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-background px-6 py-24 text-text"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Our Pet Grooming Services
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Professional Dog & Cat Grooming
          </h2>

          <p className="mt-5 text-lg leading-8 text-text/75">
            RAFIKI PET GROOMERS provides professional pet grooming services
            for dogs and cats. From bathing and drying to hair trimming,
            nail care and complete grooming, we bring convenient grooming
            directly to your doorstep.
          </p>
        </div>

        {/* Door-to-Door SEO Content */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-text/75">
          No stressful trips to a grooming shop. Our door-to-door pet
          grooming service means we come to you, making professional
          dog and cat grooming more convenient for you and your pet.
        </p>

        {/* Service Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-text/10 bg-background p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/15 text-3xl transition group-hover:bg-secondary">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 min-h-[80px] leading-7 text-text/75">
                {service.description}
              </p>

              {/* Price / Booking */}
              <div className="mt-6 flex items-center justify-between border-t border-text/10 pt-5">
                {service.price ? (
                  <span className="font-bold text-primary">
                    {service.price}
                  </span>
                ) : (
                  <span className="text-sm font-medium text-text/60">
                    Contact us
                  </span>
                )}

                <a
                  href="#booking"
                  className="text-sm font-semibold text-text transition hover:text-primary"
                >
                  Book →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-primary px-8 py-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Professional Grooming, At Your Doorstep
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Book a door-to-door grooming appointment with RAFIKI PET GROOMERS
            and let us take care of your dog's or cat's grooming needs from
            the comfort of your home.
          </p>

          <a
            href="#booking"
            className="mt-7 inline-block rounded-full bg-secondary px-7 py-3.5 font-bold text-text transition hover:bg-secondary/90"
          >
            Book an Appointment
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;