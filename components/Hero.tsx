"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-secondary-900 pt-20 md:pt-32 pb-20 md:pb-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className="space-y-8 transform transition-all duration-700 translate-y-0 opacity-100"
          >
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-primary-400/30 text-primary-200 text-sm font-medium">
                  ✨ Transformamos ideas en realidad
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Damos vida a tu marca
              </h1>

              <p className="text-xl text-gray-200 max-w-lg">
                Impresión, estampado, estrategia digital y video. Todo lo que tu
                negocio necesita para crecer y convertir clientes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-primary hover:shadow-glow text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105">
                Cotizar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/?text=Hola,%20quiero%20cotizar%20un%20servicio%20con%20ANIMAWEB."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-primary-400">500+</p>
                <p className="text-sm text-gray-300">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary-400">98%</p>
                <p className="text-sm text-gray-300">Clientes Satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-300">8+</p>
                <p className="text-sm text-gray-300">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div
            className="relative h-96 md:h-full transform transition-all duration-700 translate-x-0 opacity-100"
          >
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10 blur-2xl"></div>
            <div className="relative px-8 py-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-2xl backdrop-blur-md h-full flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 bg-gradient-primary rounded-full opacity-20 mb-6"></div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Servicios Profesionales
              </h3>
              <p className="text-gray-300">
                Impresión • Estampado • Digital • Video
              </p>
              <div className="mt-8 space-y-3">
                <div className="text-sm text-gray-300">Listo para empezar?</div>
                <p className="text-primary-300 font-semibold">Contáctanos hoy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
