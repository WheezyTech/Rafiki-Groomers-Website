const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85",
    title: "Happy Dogs",
    category: "Dog Grooming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85",
    title: "Beautiful Cats",
    category: "Cat Grooming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=85",
    title: "Fresh & Clean",
    category: "Bath & Grooming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85",
    title: "Happy Companions",
    category: "Pet Care",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1000&q=85",
    title: "Pet Styling",
    category: "Grooming",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1000&q=85",
    title: "Cat Care",
    category: "Cat Grooming",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-background px-6 py-24 text-text lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Our Gallery
          </p>

          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Happy Pets, Happy Owners
          </h2>

          <p className="mt-5 text-lg leading-8 text-text/75">
            A glimpse of the pets we care for and the grooming experience
            we provide.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.title}
              className="gallery-card relative h-80 overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm font-semibold text-secondary">
                  {item.category}
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-text/75">
            Ready to give your pet the RAFIKI grooming experience?
          </p>

          <a
            href="#booking"
            className="mt-5 inline-block rounded-full bg-primary px-7 py-3.5 font-bold text-white transition hover:bg-secondary hover:text-text"
          >
            Book an Appointment
          </a>
        </div>

      </div>
    </section>
  );
}

export default Gallery;