"use client";

import { methodSteps } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function MethodSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-dark-900/50 to-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-900/50 border border-primary-400/30 text-primary-300 text-sm font-medium">
              Nuestro Proceso
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Método ANIMAWEB
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Un proceso estratégico y probado que garantiza resultados
            excepcionales para tu marca.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {methodSteps.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/2 border border-primary-400/20 rounded-2xl hover:border-primary-400/50 transition-all duration-300 h-full flex flex-col">
                  {/* Step number */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 p-3 w-fit bg-primary-600/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-lg mb-3 flex-grow">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Connector arrow */}
                  {index < methodSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary-400/30" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary-600/10 to-secondary-600/10 border border-primary-400/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para transformar tu marca?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo con una consulta gratuita. Evaluaremos tu
            proyecto y te presentaremos una estrategia personalizada.
          </p>
          <button className="px-8 py-4 bg-gradient-primary hover:shadow-glow text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Solicitar Consulta Gratuita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
