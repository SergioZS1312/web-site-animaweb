import {
  Printer,
  Shield,
  Code,
  Video,
  Users,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  fullDescription?: string;
}

export const services: Service[] = [
  {
    id: "printing",
    title: "Impresión Publicitaria",
    description: "Material publicitario de alta calidad para tu marca",
    fullDescription:
      "Creamos material promotivo profesional que deja una impresión duradera en tu audiencia.",
    icon: Printer,
    features: [
      "Tarjetas de presentación",
      "Flyers y afiches",
      "Pendones y banners",
      "Stickers personalizados",
      "Material a 4 colores",
      "Backings profesionales",
    ],
  },
  {
    id: "stamping",
    title: "Estampado",
    description: "Serigrafía e impresión DTF para tus prendas",
    fullDescription:
      "Imprime tus diseños en prendas y productos con tecnología de punta.",
    icon: Shield,
    features: [
      "Serigrafía de precisión",
      "Impresión DTF avanzada",
      "Estampado para marcas",
      "Pequeñas y grandes tiradas",
      "Asesoría en diseño",
      "Control de calidad",
    ],
  },
  {
    id: "digital",
    title: "Estrategia Digital",
    description: "Presencia web y automatización para tu negocio",
    fullDescription:
      "Transformamos tu visión en una experiencia digital que atrae y convierte clientes.",
    icon: Code,
    features: [
      "Diseño web moderno",
      "Desarrollo de websites",
      "Landing pages efectivas",
      "Optimización SEO",
      "Automatización de procesos",
      "Integración de herramientas",
    ],
  },
  {
    id: "video",
    title: "Producción de Video",
    description: "Videos profesionales para impulsar tu marca",
    fullDescription:
      "Contamos historias visuales que generan engagement y conversiones.",
    icon: Video,
    features: [
      "Videos corporativos",
      "Videos explicativos",
      "Reels y shorts",
      "Edición profesional",
      "Motion graphics",
      "Animaciones personalizadas",
    ],
  },
];

export const methodSteps = [
  {
    icon: Users,
    step: "Paso 1",
    title: "Analizamos tu negocio",
    description: "Entendemos tu marca, objetivos y público objetivo",
  },
  {
    icon: Sparkles,
    step: "Paso 2",
    title: "Diseñamos tu identidad",
    description: "Creamos una estrategia visual cohesiva y memorable",
  },
  {
    icon: CheckCircle,
    step: "Paso 3",
    title: "Producimos tu material",
    description: "Ejecutamos con calidad y precisión cada detalle",
  },
  {
    icon: Zap,
    step: "Paso 4",
    title: "Impulsamos tu marca",
    description: "Lanzamos y optimizamos para máximo impacto",
  },
];
