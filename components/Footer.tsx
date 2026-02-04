import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-white mb-6">PURE INTENSIONS</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light">
              Defining the standard for mobile automotive care in Los Angeles. Where luxury meets convenience.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-muted font-light">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-brand-accent transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Contact</h4>
            <div className="space-y-4 text-sm text-brand-muted font-light">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-accent mr-3 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-accent mr-3" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-brand-accent mr-3" />
                <a href="mailto:info@pureintensions.com" className="hover:text-white transition-colors">
                  info@pureintensions.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6 tracking-wide text-sm uppercase">Availability</h4>
            <div className="space-y-2">
                <p className="text-white text-sm font-medium">Open 24 Hours</p>
                <p className="text-brand-muted text-xs font-light">Monday - Sunday</p>
                <p className="text-brand-muted text-xs font-light mt-4 pt-4 border-t border-white/10">
                  Priority booking available for fleet and exotic vehicles.
                </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Pure Intensions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <a href="#" className="hover:text-slate-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;