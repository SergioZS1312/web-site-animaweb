"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl =
    "https://wa.me/?text=Hola,%20quiero%20cotizar%20un%20servicio%20con%20ANIMAWEB.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />

      {/* Animated ring */}
      <div className="absolute inset-0 rounded-full border-2 border-emerald-300 animate-pulse"></div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <div className="px-3 py-2 bg-dark-900 border border-emerald-400/50 rounded-lg text-white text-sm font-semibold">
          Chatea con nosotros
        </div>
        <div className="absolute bottom-0 right-6 transform translate-y-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-dark-900"></div>
      </div>
    </a>
  );
}
