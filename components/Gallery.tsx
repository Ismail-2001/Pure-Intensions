import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=1200&auto=format&fit=crop",
      title: "Interior Precision",
      desc: "Deep clean & leather conditioning"
    },
    {
      url: "https://images.unsplash.com/photo-1600588692735-a744888be62d?q=80&w=1200&auto=format&fit=crop",
      title: "Exterior Clarity",
      desc: "Foam cannon decontamination"
    },
    {
      url: "https://images.unsplash.com/photo-1632823469850-249050d24f0c?q=80&w=1200&auto=format&fit=crop",
      title: "Paint Correction",
      desc: "Mirror-finish restoration"
    },
    {
      url: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop",
      title: "Upholstery Revival",
      desc: "Steam extraction & protection"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-charcoal border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">Portfolio</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">Visual Excellence</h3>
          </div>
          <div className="max-w-md">
            <p className="text-brand-muted font-light leading-relaxed">
              We don't just wash cars; we curate them. Every reflection, every stitch, every surface is treated with obsessive care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {images.map((img, idx) => (
            <div key={idx} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-black cursor-crosshair">
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 p-8 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-white font-heading text-xl font-bold mb-1">{img.title}</h4>
                  <p className="text-brand-accent text-sm tracking-wide uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-75">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;