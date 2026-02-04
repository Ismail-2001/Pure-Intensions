import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-brand-charcoal pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">The Collection</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Curated Detailing Packages</h3>
          <p className="text-brand-muted max-w-2xl mx-auto font-light text-lg">
            Choose a level of care tailored to your vehicle's needs. Each package is executed with precision and premium biodegradable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`
                group relative flex flex-col h-full p-8 md:p-10 transition-all duration-500
                ${pkg.isPopular 
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border border-brand-accent/30 shadow-[0_0_50px_rgba(45,212,191,0.05)] transform md:-translate-y-4' 
                  : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10'}
              `}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-brand-accent text-brand-black text-[10px] font-bold px-4 py-1 uppercase tracking-widest">
                    Signature Choice
                  </span>
                </div>
              )}

              <div className="mb-8 border-b border-white/5 pb-8">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-sm text-brand-muted font-light leading-relaxed h-10">{pkg.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-3xl font-heading font-light text-brand-accent">{pkg.priceRange}</span>
                </div>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <Check className="w-5 h-5 text-brand-accent/70 mr-3 flex-shrink-0 mt-0.5 group-hover/item:text-brand-accent transition-colors" />
                      <span className="text-slate-300 text-sm font-light group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                href={BUSINESS_INFO.bookingLink} 
                variant={pkg.isPopular ? 'primary' : 'secondary'}
                fullWidth
              >
                Reserve Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;