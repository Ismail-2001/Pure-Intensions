import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-brand-black/80 backdrop-blur-xl border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex flex-col group">
              <span className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight group-hover:text-brand-accent transition-colors">
                PURE INTENSIONS
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted group-hover:text-white transition-colors">
                Bespoke Detailing
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-sm font-heading font-medium tracking-wide text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href={`tel:${BUSINESS_INFO.phoneClean}`} 
                className="text-white hover:text-brand-accent transition-colors flex items-center text-sm font-heading font-medium tracking-wide"
              >
                <Phone className="w-4 h-4 mr-2" />
                {BUSINESS_INFO.phone}
              </a>
              <Button href={BUSINESS_INFO.bookingLink} className="!px-6 !py-2.5 !text-xs">
                Book Service
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:text-brand-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-2xl font-heading font-light text-white hover:text-brand-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-white/10 my-4"></div>

          <a 
            href={`tel:${BUSINESS_INFO.phoneClean}`} 
            className="flex items-center text-xl text-white font-heading"
          >
            <Phone className="w-5 h-5 mr-3 text-brand-accent" />
            {BUSINESS_INFO.phone}
          </a>
          
          <Button href={BUSINESS_INFO.bookingLink} onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
            Book Appointment
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;