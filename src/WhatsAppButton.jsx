function WhatsAppButton() {
  const whatsappNumber = "254759728121";

  const message = encodeURIComponent(
    "Hello RAFIKI PET GROOMERS 👋, I would like to book a door-to-door grooming service for my pet."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RAFIKI PET GROOMERS on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-secondary px-5 py-3 font-bold text-text shadow-2xl transition hover:scale-105 hover:bg-secondary/90 animate-whatsapp"
    >
      <span className="text-2xl">💬</span>

      <span className="hidden sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}

export default WhatsAppButton;