import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-10 right-0 text-[120px] md:text-[200px] font-heading font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        TRUST
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.3em] text-brand-accent uppercase mb-4">Testimonials</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Client Experiences</h3>
          <div className="flex items-center space-x-4">
             <span className="text-white font-heading text-2xl font-bold">{BUSINESS_INFO.rating}</span>
             <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
              ))}
            </div>
            <span className="text-brand-muted text-sm border-l border-white/10 pl-4">Based on {BUSINESS_INFO.reviewCount} Verified Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-panel p-8 md:p-10 relative group hover:border-brand-accent/30 transition-colors duration-500">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="mb-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed font-light text-lg">"{review.text}"</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/10">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-heading font-medium">{review.author}</h4>
                  <span className="text-xs text-brand-muted uppercase tracking-wider">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;