import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import Button from './Button';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2500&auto=format&fit=crop" 
          alt="Luxury Mercedes Detail" 
          className="w-full h-full object-cover object-center md:object-[center_60%] opacity-80 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        
        {/* Artistic Gradient Overlays */}
        {/* Darkens the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
        {/* Darkens the left side for desktop text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
        {/* Subtle accent tint */}
        <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          
          {/* Trust Indicator */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-1.5 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="flex space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-brand-accent fill-brand-accent" />
              ))}
            </div>
            <span className="text-xs font-medium text-brand-muted tracking-wide uppercase border-l border-white/10 pl-2 ml-2">
              Los Angeles' Premier Mobile Service
            </span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight mb-8 drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Clean.</span> <br />
            <span className="text-brand-accent font-light italic tracking-normal">Immaculate.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Experience the art of automotive restoration. We bring hospital-grade cleanliness and showroom aesthetics directly to your residence or office, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button href={BUSINESS_INFO.bookingLink}>
              Book Your Service
            </Button>
            <Button 
              variant="secondary" 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="group"
            >
              Call {BUSINESS_INFO.phone}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{animationDelay: '1s'}}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand-muted mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;