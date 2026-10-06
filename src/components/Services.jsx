const services = [
  {
    icon: "🐶",
    title: "Dog Grooming",
    description:
      "Complete grooming for dogs including bathing, drying, brushing, trimming and styling.",
    price: "From KSh 800",
  },
  {
    icon: "🐱",
    title: "Cat Grooming",
    description:
      "Gentle grooming services for cats to keep their coats clean, healthy and comfortable.",
    price: "From KSh 800",
  },
  {
    icon: "🛁",
    title: "Pet Bath & Dry",
    description:
      "Professional bathing and drying using pet-friendly products suitable for your pet.",
    price: "From KSh 500",
  },
  {
    icon: "✂️",
    title: "Hair Trimming",
    description:
      "Neat and comfortable coat trimming tailored to your pet's breed and needs.",
    price: "From KSh 600",
  },
  {
    icon: "🐾",
    title: "Nail Trimming",
    description:
      "Safe nail trimming to help keep your pet's paws healthy and comfortable.",
    price: "From KSh 300",
  },
  {
    icon: "✨",
    title: "Full Grooming",
    description:
      "Our complete grooming package combining bathing, drying, brushing, trimming and nail care.",
    price: "From KSh 1,500",
  },
];

function Services() {
  return (
    <section id="services" className="bg-background px-6 py-24 text-text">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">
            What We Offer
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Professional Pet Grooming
          </h2>

          <p className="mt-5 text-lg leading-8 text-text/75">
            From a simple bath to a complete grooming session, we provide
            gentle and professional care to keep your pet clean, healthy and
            looking their best.
          </p>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-text/75">
          No stressful trips to a grooming shop. RAFIKI PET GROOMERS brings
          professional pet grooming services directly to your doorstep.
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

              {/* Price */}
              <div className="mt-6 flex items-center justify-between border-t border-text/10 pt-5">
                <span className="font-bold text-primary">
                  {service.price}
                </span>

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
            Book an appointment with RAFIKI PET GROOMERS and let our team
            take care of your pet's grooming needs.
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