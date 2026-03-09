"use client";

import { ArrowRight } from "lucide-react";
import { Service } from "@/src/data/services";
import { useState } from "react";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  const gradients = [
    "from-primary-600/20 to-primary-500/10",
    "from-secondary-600/20 to-secondary-500/10",
    "from-blue-600/20 to-blue-500/10",
    "from-emerald-600/20 to-emerald-500/10",
  ];

  const borderColors = [
    "border-primary-400/50 hover:border-primary-400",
    "border-secondary-400/50 hover:border-secondary-400",
    "border-blue-400/50 hover:border-blue-400",
    "border-emerald-400/50 hover:border-emerald-400",
  ];

  const buttonColors = [
    "bg-primary-600 hover:bg-primary-700",
    "bg-secondary-600 hover:bg-secondary-700",
    "bg-blue-600 hover:bg-blue-700",
    "bg-emerald-600 hover:bg-emerald-700",
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-sm
        bg-gradient-to-br ${gradients[index]}
        ${borderColors[index]}
      `}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

      {/* Icon */}
      <div
        className={`mb-6 p-4 rounded-lg w-fit transition-all duration-300 ${
          isHovered ? "scale-110 rotate-6" : ""
        }`}
      >
        <IconComponent className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-200 mb-6 flex-grow min-h-12">
        {service.description}
      </p>

      {/* Features list */}
      {service.features && service.features.length > 0 && (
        <div className={`mb-6 space-y-2 overflow-hidden transition-all duration-300 ${
          isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <p className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
            Incluye:
          </p>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Button */}
      <button
        className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2
          ${buttonColors[index]}
        `}
      >
        Ver Detalles
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
