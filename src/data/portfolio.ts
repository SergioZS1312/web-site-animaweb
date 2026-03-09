export interface PortfolioItem {
  id: string;
  title: string;
  category: "printing" | "stamping" | "digital" | "video";
  description: string;
  image: string;
  client?: string;
  result?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Identidad Visual Completa",
    category: "printing",
    description: "Línea completa de material publicitario para startup tech",
    image: "/images/portfolio-1.jpg",
    client: "StartupXYZ",
    result: "Aumento de 40% en reconocimiento de marca",
  },
  {
    id: "2",
    title: "Colección de Prendas Limitada",
    category: "stamping",
    description: "Serie de camisetas con diseño exclusivo en DTF",
    image: "/images/portfolio-2.jpg",
    client: "FashionBrand Co",
    result: "500 unidades vendidas en primer mes",
  },
  {
    id: "3",
    title: "Landing Page Conversora",
    category: "digital",
    description: "Página web optimizada para generar leads",
    image: "/images/portfolio-3.jpg",
    client: "Agencia de Viajes",
    result: "45% de tasa de conversión",
  },
  {
    id: "4",
    title: "Video Corporativo 4K",
    category: "video",
    description: "Producción de video institucional profesional",
    image: "/images/portfolio-4.jpg",
    client: "Empresa Industrial",
    result: "10K views en primera semana",
  },
  {
    id: "5",
    title: "Kit de Papelería Premium",
    category: "printing",
    description: "Tarjetas, sobres y membretados en papel 100% reciclado",
    image: "/images/portfolio-5.jpg",
    client: "Consultora Ambiental",
    result: "Identidad coherente en todos los canales",
  },
  {
    id: "6",
    title: "Campaña de Ropa Deportiva",
    category: "stamping",
    description: "Serigrafía para línea de ropa deportiva",
    image: "/images/portfolio-6.jpg",
    client: "Gym Pro",
    result: "Marca registrada en mercado local",
  },
  {
    id: "7",
    title: "Sitio Web E-commerce",
    category: "digital",
    description: "Plataforma de venta en línea con integración de pagos",
    image: "/images/portfolio-7.jpg",
    client: "Tienda Online",
    result: "$50K en ventas primer trimestre",
  },
  {
    id: "8",
    title: "Video Explicativo Animado",
    category: "video",
    description: "Motion graphics para SaaS",
    image: "/images/portfolio-8.jpg",
    client: "Software House",
    result: "35% mejor engagement en redes",
  },
];
