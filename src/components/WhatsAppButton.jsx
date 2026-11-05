export default function WhatsAppButton() {
  const phoneNumber = "919153573335";
  const defaultMessage =
    "Hi EduEden! I would like to enquire about the free demo coding class for my child.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with EduEden on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center cursor-pointer select-none"
    >
      {/* Continuous Radiating Ripple Wave */}
      <span
        className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none"
        style={{ animationDuration: "2.4s" }}
        aria-hidden="true"
      />

      {/* Ambient Pulsing Aura Glow */}
      <span
        className="absolute -inset-2 rounded-full bg-[#25D366] opacity-45 blur-xl animate-pulse pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Action Button with Dynamic Pulsing Emerald Glow */}
      <span className="whatsapp-glow relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all duration-300">
        {/* Simple & Clean Vector WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.62.72 5.08 1.98 7.18L2 30l7.04-1.92A13.9 13.9 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.6c-2.3 0-4.46-.66-6.3-1.8l-.45-.27-4.18 1.14 1.16-4.08-.3-.47A11.55 11.55 0 0 1 4.4 16c0-6.4 5.2-11.6 11.6-11.6s11.6 5.2 11.6 11.6-5.2 11.6-11.6 11.6zm6.36-8.7c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.9 1.14-1.1 1.37-.2.23-.41.26-.76.08-.35-.18-1.48-.54-2.81-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.89-1.08-2.58-.29-.68-.58-.58-.78-.59h-.67c-.23 0-.61.09-.93.44s-1.22 1.2-1.22 2.92c0 1.72 1.25 3.39 1.43 3.62.17.23 2.47 3.77 5.98 5.29.84.36 1.49.58 2 .74.84.27 1.61.23 2.21.14.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.24-.66-.42z" />
        </svg>
      </span>
    </a>
  );
}
