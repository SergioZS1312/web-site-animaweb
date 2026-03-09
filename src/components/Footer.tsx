"use client";

import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-primary-400/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ANIMAWEB
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Damos vida a tu marca con impresión, estampado, estrategia digital y video.
              </p>
              {/* Social links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-primary-600/20 hover:bg-primary-600/40 rounded-full flex items-center justify-center transition-all duration-300 group"
                    title={label}
                  >
                    <Icon className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {[
                  "Impresión Publicitaria",
                  "Estampado",
                  "Estrategia Digital",
                  "Videos",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-6">Compañía</h4>
              <ul className="space-y-3">
                {[
                  { label: "Sobre Nosotros", href: "#" },
                  { label: "Portafolio", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Contacto", href: "#" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:contacto@animaweb.com"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    contacto@animaweb.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    +1 (555) 000-0000
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    Ciudad, País
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-400/10 my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center py-8 text-sm text-gray-400">
            <p>
              &copy; {currentYear} ANIMAWEB. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
