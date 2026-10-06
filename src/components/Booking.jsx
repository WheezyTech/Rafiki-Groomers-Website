import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    petName: "",
    petType: "Dog",
    service: "Dog Grooming",
    location: "",
    date: "",
    time: "",
    notes: "",
  });

  const services = [
    "Dog Grooming",
    "Cat Grooming",
    "Pet Bath & Dry",
    "Hair Trimming",
    "Nail Trimming",
    "Full Grooming",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "254759728121";

    const message = `
🐾 *NEW PET GROOMING BOOKING*

*Customer Details*
Name: ${formData.customerName}
Phone: ${formData.phone}

*Pet Details*
Pet Name: ${formData.petName}
Pet Type: ${formData.petType}

*Grooming Service*
Service: ${formData.service}

*Appointment*
Date: ${formData.date}
Time: ${formData.time}

*Service Location*
${formData.location}

*Additional Notes*
${formData.notes || "No additional notes"}

Please confirm this booking. Thank you.
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Book a Grooming
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-text sm:text-5xl">
            We Come to You
          </h2>

          <p className="mt-4 text-lg leading-8 text-text/75">
            Book a convenient door-to-door grooming appointment for your pet.
            Tell us where you are and we'll come to you.
          </p>
        </div>

        {/* Booking Form */}
        <div className="mx-auto max-w-4xl animate-fade-up">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-text/10 bg-background p-6 shadow-xl sm:p-8 lg:p-10"
          >
            {/* Customer Details */}
            <div>
              <h3 className="text-xl font-bold text-text">
                Customer Details
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {/* Customer Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    required
                    className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>
            </div>

            {/* Pet Details */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-text">
                Pet Details
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {/* Pet Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Pet Name *
                  </label>

                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    placeholder="e.g. Max"
                    required
                    className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                {/* Pet Type */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Pet Type *
                  </label>

                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-text/20 bg-background px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  >
                    <option value="Dog">🐶 Dog</option>
                    <option value="Cat">🐱 Cat</option>
                    <option value="Other">🐾 Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-text">
                Grooming Service
              </h3>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-text">
                  Select Service *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-text/20 bg-background px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Appointment */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-text">
                Appointment Details
              </h3>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {/* Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Preferred Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-text">
                    Preferred Time *
                  </label>

                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-text">
                Service Location
              </h3>

              <p className="mt-2 text-sm text-text/65">
                Since we are door-to-door, please tell us where the grooming
                service will take place.
              </p>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-text">
                  Home / Service Location *
                </label>

                <textarea
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Estate, building, area, street or nearby landmark"
                  rows="3"
                  required
                  className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <label className="mb-2 block text-sm font-semibold text-text">
                Additional Notes
              </label>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Anything we should know about your pet?"
                rows="4"
                className="w-full rounded-xl border border-text/20 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            {/* Submit */}
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-full bg-secondary px-7 py-4 text-lg font-bold text-text transition duration-300 hover:-translate-y-1 hover:bg-secondary/90 hover:shadow-lg"
              >
                🐾 Request Booking via WhatsApp
              </button>

              <p className="mt-4 text-center text-sm text-text/65">
                Your booking request will open WhatsApp for confirmation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;