"use client";

import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import { useState } from "react";

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 border border-primary-400/20 rounded-2xl hover:border-primary-400/50 transition-all duration-300 hover:shadow-glow group flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-primary-400 text-primary-400"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-200 leading-relaxed mb-6 flex-grow italic">
        &quot;{testimonial.content}&quot;
      </p>

      {/* Author */}
      <div className="border-t border-white/10 pt-6">
        <p className="text-white font-semibold">{testimonial.name}</p>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
        <p className="text-primary-400 text-sm font-medium">
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-secondary-900/50 border border-secondary-400/30 text-secondary-300 text-sm font-medium">
              Testimonios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            La mejor prueba de nuestro trabajo es la satisfacción de quienes
            han confiado en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, visibleCount).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < testimonials.length && (
          <div className="text-center">
            <button
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + 3, testimonials.length)
                )
              }
              className="px-8 py-4 border border-secondary-400/50 text-secondary-300 font-semibold rounded-lg hover:bg-secondary-600/10 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Ver Más Testimonios
            </button>
          </div>
        )}

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-primary-400/20 rounded-xl">
            <p className="text-4xl font-bold text-primary-400 mb-2">4.9/5</p>
            <p className="text-gray-300">Rating Promedio</p>
          </div>
          <div className="p-6 border border-secondary-400/20 rounded-xl">
            <p className="text-4xl font-bold text-secondary-400 mb-2">
              {testimonials.length}+
            </p>
            <p className="text-gray-300">Clientes Felices</p>
          </div>
          <div className="p-6 border border-blue-400/20 rounded-xl">
            <p className="text-4xl font-bold text-blue-400 mb-2">98%</p>
            <p className="text-gray-300">Tasa de Recomendación</p>
          </div>
        </div>
      </div>
    </section>
  );
}
