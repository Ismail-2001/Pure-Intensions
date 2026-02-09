import React, { useEffect, useRef, useState } from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-4 border border-teal-500/20">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Redefining Mobile Detailing <br className="hidden lg:block" /> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Los Angeles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine premium eco-friendly products, professional techniques, and unmatched convenience to deliver a showroom shine right to your driveway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-2"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 group-hover:bg-teal-950 group-hover:text-teal-300 transition-all duration-300 shadow-lg shadow-black/20 border border-slate-700 group-hover:border-teal-500/30">
                   {/* Clone the icon to ensure correct sizing for this layout */}
                   {React.isValidElement(feature.icon) 
                      ? React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: 'w-8 h-8' }) 
                      : feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-50 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors mb-4 flex-grow">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-1 bg-slate-800 rounded-full group-hover:bg-teal-500/50 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;