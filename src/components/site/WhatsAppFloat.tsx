import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 ring-1 ring-black/10 transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:h-16 md:w-16"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3C8.85 3 3 8.74 3 15.82c0 2.5.73 4.91 2.12 6.98L3 29l6.41-2.06a13.2 13.2 0 0 0 6.63 1.79C23.23 28.73 29 23 29 15.82 29 8.74 23.23 3 16.04 3zm0 23.54c-2.08 0-4.12-.56-5.91-1.63l-.42-.25-3.8 1.22 1.24-3.69-.27-.43a10.48 10.48 0 0 1-1.64-5.64c0-5.82 4.84-10.56 10.8-10.56s10.8 4.74 10.8 10.56-4.84 10.42-10.8 10.42zm5.92-7.94c-.33-.16-1.95-.95-2.25-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.27-.19.21-.38.24-.71.08-.33-.16-1.39-.5-2.65-1.6-.98-.85-1.64-1.9-1.83-2.22-.19-.32-.02-.49.14-.65.14-.14.33-.37.49-.56.16-.19.22-.32.33-.53.11-.21.05-.4-.03-.56-.08-.16-.74-1.77-1.01-2.42-.27-.64-.55-.55-.74-.56h-.63c-.22 0-.58.08-.88.4-.3.32-1.15 1.11-1.15 2.71s1.18 3.14 1.34 3.35c.16.21 2.32 3.67 5.73 5 .81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 1.95-.8 2.22-1.58.27-.78.27-1.45.19-1.58-.08-.13-.3-.21-.63-.37z"
        />
      </svg>
    </a>
  );
}
