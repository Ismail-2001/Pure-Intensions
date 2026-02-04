import React from 'react';
import Button from './Button';
import { BUSINESS_INFO } from '../constants';
import { MapPin } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your <br />
              <span className="text-brand-accent">Driving Experience.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light max-w-lg">
              Time is your most valuable asset. We restore your vehicle to perfection while you focus on what matters. Secure your appointment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href={BUSINESS_INFO.bookingLink} className="shadow-[0_0_40px_rgba(45,212,191,0.1)]">
                Secure Your Slot
              </Button>
              <Button variant="outline" href={`tel:${BUSINESS_INFO.phoneClean}`}>
                Contact Concierge
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-6 text-sm text-brand-muted">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 animate-pulse"></span> 24/7 Availability</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></span> Fully Insured</span>
            </div>
          </div>

          {/* Service Area Visual */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-sm overflow-hidden border border-white/10 group">
               {/* Grayscale map for premium look */}
              <img 
                src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1200&auto=format&fit=crop" 
                alt="Los Angeles Service Area" 
                className="w-full h-[400px] object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8">
                <div className="bg-brand-black/90 backdrop-blur-md p-6 border border-white/10 max-w-xs">
                    <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 text-brand-accent mr-2" />
                        <span className="text-white font-heading font-bold">Service Coverage</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                        Beverly Hills, Hollywood, Downtown LA, Santa Monica, and surrounding estates.
                    </p>
                    <a href={BUSINESS_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-accent uppercase tracking-widest hover:text-white transition-colors">
                        View Map Direction &rarr;
                    </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;