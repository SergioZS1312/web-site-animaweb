export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    company: "Tech Innovations",
    role: "Founder & CEO",
    content:
      "ANIMAWEB transformó completamente nuestra presencia digital. El equipo superó nuestras expectativas en creatividad y profesionalismo. Nuestras conversiones aumentaron un 60% en tres meses.",
    rating: 5,
  },
  {
    id: "2",
    name: "María García",
    company: "FashionStore",
    role: "Gerente de Marketing",
    content:
      "Desde el diseño hasta la ejecución, todo fue impecable. Los materiales de impresión son de primera calidad y el equipo de ANIMAWEB fue muy receptivo a nuestras ideas.",
    rating: 5,
  },
  {
    id: "3",
    name: "Juan López",
    company: "Consultora Empresarial",
    role: "Director Ejecutivo",
    content:
      "La estrategia digital que nos propusieron fue exactamente lo que nuestro negocio necesitaba. Profesionales, puntuales y con resultados medibles.",
    rating: 5,
  },
  {
    id: "4",
    name: "Sofía Rodriguez",
    company: "EcoProducts",
    role: "Emprendedora",
    content:
      "Como emprendedora, ANIMAWEB me ayudó a posicionar mi marca desde cero. Su equipo creativo es increíble y entienden realmente lo que buscan los clientes.",
    rating: 5,
  },
  {
    id: "5",
    name: "Roberto Pérez",
    company: "Agencia de Eventos",
    role: "Propietario",
    content:
      "Excelente servicio de estampado. La calidad de sus trabajos en DTF es incomparable. Mis clientes siempre preguntan dónde imprimimos.",
    rating: 5,
  },
  {
    id: "6",
    name: "Diana Flores",
    company: "Yoga Studio Zen",
    role: "Community Manager",
    content:
      "Los videos corporativos que produjeron para nosotros generaron una conexión real con nuestra comunidad. Muy recomendado.",
    rating: 5,
  },
];
