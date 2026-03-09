"use client";

import { services } from "@/src/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-900/50 border border-primary-400/30 text-primary-300 text-sm font-medium">
                Servicios Profesionales
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluciones Completas para tu Marca
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Desde impresión hasta video, contamos con todo lo que tu negocio
            necesita para crecer y destacar en el mercado.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 mb-6">
            ¿No encontraste lo que buscas? Cuéntanos tu proyecto
          </p>
          <button className="px-8 py-4 bg-gradient-primary hover:shadow-glow text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Solicitar Consulta Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
