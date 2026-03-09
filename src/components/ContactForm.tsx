"use client";

import { useState } from "react";
import { services } from "@/src/data/services";
import { Mail, Phone, User, FileText, Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (!formData.service) newErrors.service = "Selecciona un servicio";
    if (!formData.message.trim()) newErrors.message = "Describe tu proyecto";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "website",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        setErrors({
          submit: "Error al enviar el formulario. Intenta nuevamente.",
        });
      }
    } catch {
      setErrors({
        submit:
          "Error de conexión. Verifica tu internet y vuelve a intentar.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 md:py-32 bg-dark-900">
        <div className="px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-600/20 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              ¡Solicitud Enviada!
            </h2>
            <p className="text-gray-300 mb-8">
              Gracias por confiar en ANIMAWEB. Un miembro de nuestro equipo se
              pondrá en contacto contigo en las próximas 24 horas para revisar
              tu proyecto.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all inline-flex items-center gap-2"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary-900/50 border border-primary-400/30 text-primary-300 text-sm font-medium">
              Cotización
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cuéntanos sobre tu Proyecto
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo con una
            propuesta personalizada.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white/5 to-white/2 border border-primary-400/30 rounded-2xl p-8 md:p-12 space-y-6"
        >
          {/* Error message */}
          {errors.submit && (
            <div className="p-4 bg-red-600/10 border border-red-400/50 rounded-lg text-red-300">
              {errors.submit}
            </div>
          )}

          {/* Name and Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-primary-400" />
                  Nombre Completo
                </div>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors ${
                  errors.name
                    ? "border-red-400/50"
                    : "border-primary-400/30 hover:border-primary-400/50"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-primary-400" />
                  Email
                </div>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors ${
                  errors.email
                    ? "border-red-400/50"
                    : "border-primary-400/30 hover:border-primary-400/50"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone and Service row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-primary-400" />
                  Teléfono / WhatsApp
                </div>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors ${
                  errors.phone
                    ? "border-red-400/50"
                    : "border-primary-400/30 hover:border-primary-400/50"
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Service Select */}
            <div>
              <label className="block text-white font-semibold mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-primary-400" />
                  Tipo de Servicio
                </div>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors appearance-none cursor-pointer ${
                  errors.service
                    ? "border-red-400/50"
                    : "border-primary-400/30 hover:border-primary-400/50"
                }`}
              >
                <option value="" className="bg-dark-900">
                  Selecciona un servicio...
                </option>
                {services.map((service) => (
                  <option value={service.id} key={service.id} className="bg-dark-900">
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-400 text-sm mt-1">{errors.service}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white font-semibold mb-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-primary-400" />
                Descripción del Proyecto
              </div>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto, ideas, presupuesto aproximado y fecha de entrega..."
              rows={5}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors resize-none ${
                errors.message
                  ? "border-red-400/50"
                  : "border-primary-400/30 hover:border-primary-400/50"
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-primary hover:shadow-glow text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Enviar Solicitud de Cotización
              </>
            )}
          </button>

          {/* Privacy text */}
          <p className="text-gray-400 text-sm text-center">
            Nos comprometemos a proteger tu privacidad. Tus datos solo serán
            usados para comunicarnos contigo sobre tu proyecto.
          </p>
        </form>

        {/* Alternative CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            ¿Prefieres hablar primero con nosotros?
          </p>
          <a
            href="https://wa.me/?text=Hola,%20quiero%20cotizar%20un%20servicio%20con%20ANIMAWEB."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-secondary-400/50 text-secondary-300 font-semibold rounded-lg hover:bg-secondary-600/10 transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
