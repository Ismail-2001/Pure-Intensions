import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { MapPin, User, Mail, Phone, Car, Calendar, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Circle, ZoomControl, Popup, Tooltip } from 'react-leaflet';

const ContactCTA: React.FC = () => {
  const center: [number, number] = [34.0522, -118.2437]; // Los Angeles
  const radius = 20000; // ~12 miles coverage

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    alert(`Thank you, ${formData.name}. Your request for ${formData.service || 'service'} has been received. We will contact you at ${formData.phone} shortly.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: ''
    });
  };

  return (
    <section id="booking" className="py-24 bg-brand-charcoal relative overflow-hidden border-t border-white/5" ref={sectionRef}>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className={`container mx-auto px-6 relative z-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Booking Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Request <span className="text-brand-accent">Service</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 font-light max-w-lg">
              Secure your appointment for the ultimate detailing experience. We bring the showroom to you.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-sm space-y-5 shadow-2xl">
              
              {/* Name */}
              <div className="relative group">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 font-light rounded-sm"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 font-light rounded-sm"
                  />
                </div>
                <div className="relative group">
                  <Phone className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 font-light rounded-sm"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="relative group">
                <Car className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all appearance-none cursor-pointer font-light rounded-sm"
                >
                  <option value="" className="bg-brand-black text-slate-500">Select Service Package</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.name} className="bg-brand-black text-white">{s.name} ({s.priceRange})</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none border-l border-white/10 pl-3">
                   <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-brand-muted"></div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group">
                  <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 font-light rounded-sm [color-scheme:dark]"
                  />
                </div>
                <div className="relative group">
                  <Clock className="absolute left-4 top-3.5 w-5 h-5 text-brand-muted group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-black/50 border border-white/10 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-brand-accent/50 focus:ring-1 focus:ring-brand-accent/50 transition-all placeholder:text-slate-600 font-light rounded-sm [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" fullWidth className="shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:shadow-[0_0_50px_rgba(45,212,191,0.3)]">
                  Confirm Booking Request
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-[10px] uppercase tracking-widest text-brand-muted/70 mt-2">
                  <span>Secure SSL Data</span>
                  <span>•</span>
                  <span>Free Cancellation</span>
              </div>

            </form>
          </div>

          {/* Service Area Visual */}
          <div className="w-full lg:w-1/2 lg:pt-12">
            <div className="relative rounded-sm overflow-hidden border border-white/10 group h-[500px] lg:h-[600px] bg-brand-black shadow-2xl">
               
               <MapContainer 
                  center={center} 
                  zoom={10} 
                  scrollWheelZoom={true} 
                  className="w-full h-full z-0 outline-none"
                  zoomControl={false}
                  dragging={true}
                  doubleClickZoom={true}
               >
                  <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  <Circle 
                    center={center} 
                    pathOptions={{ 
                      color: '#2dd4bf', 
                      fillColor: '#2dd4bf', 
                      fillOpacity: 0.15, 
                      weight: 2,
                      dashArray: '4, 8' 
                    }} 
                    radius={radius} 
                  >
                    <Tooltip sticky direction="top" opacity={0.9}>
                        <span className="font-heading font-bold text-brand-black text-xs uppercase tracking-wider">Service Zone</span>
                    </Tooltip>
                    <Popup closeButton={false} className="bg-transparent border-none shadow-none">
                      <div className="bg-brand-black border border-brand-accent/30 p-4 rounded shadow-2xl min-w-[220px]">
                        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                           <MapPin className="w-4 h-4 text-brand-accent" />
                           <span className="text-white font-heading font-bold text-sm tracking-wide">Primary Coverage</span>
                        </div>
                        <p className="text-xs text-brand-muted leading-relaxed font-light mb-3">
                          We provide full mobile detailing services to all locations within this 20km radius of Downtown LA.
                        </p>
                        <div className="flex justify-between items-center text-[10px] text-brand-accent uppercase tracking-widest">
                           <span>No Travel Fee</span>
                           <span>&lt;1hr Arrival</span>
                        </div>
                      </div>
                    </Popup>
                  </Circle>
                  <ZoomControl position="topright" />
               </MapContainer>

               {/* Overlay Gradients */}
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent pointer-events-none z-[400]"></div>
              
              <div className="absolute bottom-8 left-8 z-[500] pointer-events-none">
                <div className="bg-brand-black/90 backdrop-blur-md p-6 border border-white/10 max-w-xs shadow-lg pointer-events-auto">
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