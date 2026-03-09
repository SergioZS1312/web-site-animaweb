"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { portfolioItems } from "@/src/data/portfolio";

interface PortfolioModalProps {
  item: (typeof portfolioItems)[0] | null;
  onClose: () => void;
}

function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-900 border border-primary-400/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-primary-400/20 bg-dark-900/95">
          <h2 className="text-2xl font-bold text-white">{item.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-600/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Image placeholder */}
          <div className="w-full h-80 bg-gradient-primary/10 rounded-xl border border-primary-400/20 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 text-lg">Imagen del Proyecto</p>
              <p className="text-gray-500 text-sm mt-2">{item.image}</p>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-2">Cliente</p>
              <p className="text-white font-semibold">{item.client || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">Categoría</p>
              <p className="text-white font-semibold capitalize">{item.category}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-white font-semibold mb-3">Descripción</h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>

          {/* Result */}
          {item.result && (
            <div className="p-4 bg-primary-600/10 border border-primary-400/30 rounded-lg">
              <p className="text-primary-300 text-sm font-semibold mb-2">
                RESULTADO
              </p>
              <p className="text-white">{item.result}</p>
            </div>
          )}

          {/* CTA */}
          <button className="w-full py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300">
            Solicitar Proyecto Similar
          </button>
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({
  item,
  onOpen,
}: {
  item: (typeof portfolioItems)[0];
  onOpen: (item: (typeof portfolioItems)[0]) => void;
}) {
  const categoryColors: Record<string, string> = {
    printing: "bg-primary-600/20 border-primary-400/50",
    stamping: "bg-secondary-600/20 border-secondary-400/50",
    digital: "bg-blue-600/20 border-blue-400/50",
    video: "bg-emerald-600/20 border-emerald-400/50",
  };

  const categoryLabels: Record<string, string> = {
    printing: "Impresión",
    stamping: "Estampado",
    digital: "Digital",
    video: "Video",
  };

  return (
    <button
      onClick={() => onOpen(item)}
      className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {/* Background gradient based on category */}
      <div className={`absolute inset-0 transition-all duration-300 ${categoryColors[item.category]}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/80"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 group-hover:opacity-100 opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
        <p className="text-gray-200 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium">
            {categoryLabels[item.category]}
          </span>
          <span className="text-primary-300 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            VER MÁS →
          </span>
        </div>
      </div>
    </button>
  );
}

export function PortfolioGrid() {
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null);

  return (
    <section className="py-20 md:py-32 bg-dark-900/50 relative overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-secondary-900/50 border border-secondary-400/30 text-secondary-300 text-sm font-medium">
              Nuestro Portafolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos que Hablan por Sí Solos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hemos ayudado a cientos de emprendedores a llevar sus marcas al
            siguiente nivel con resultados medibles y visibles.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onOpen={setSelectedItem}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="px-8 py-4 border border-primary-400/50 text-primary-300 font-semibold rounded-lg hover:bg-primary-600/10 transition-colors duration-300">
            Ver Más Trabajos →
          </button>
        </div>
      </div>

      {/* Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
