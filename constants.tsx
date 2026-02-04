import React from 'react';
import { Truck, Clock, ShieldCheck, Star, MapPin, Droplets } from 'lucide-react';
import { ServicePackage, Review, Feature, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Pure Intensions",
  subname: "Bespoke Mobile Detailing",
  phone: "+1 818-335-0615",
  phoneClean: "18183350615",
  address: "550 N Figueroa St, Los Angeles, CA 90012",
  mapLink: "https://maps.google.com/?q=Pure+Intensions+mobile+car+wash+&+detail",
  bookingLink: "#booking",
  rating: 4.7,
  reviewCount: 34,
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Craftsmanship', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#reviews' },
];

export const SERVICES: ServicePackage[] = [
  {
    id: 'maintenance',
    name: 'The Maintenance',
    priceRange: '$99 - $149',
    description: 'Essential care to preserve your vehicle’s aesthetic integrity.',
    features: [
      'Eco-friendly hand wash',
      'Wheel decontamination & dressing',
      'Interior vacuum & wipe down',
      'Streak-free glass cleaning',
      'Door jamb detailing'
    ]
  },
  {
    id: 'signature',
    name: 'The Signature',
    priceRange: '$179 - $249',
    description: 'Our standard of excellence. Deep cleaning for a showroom finish.',
    isPopular: true,
    features: [
      'Includes The Maintenance',
      'Clay bar decontamination',
      'Premium ceramic sealant (3-month)',
      'Leather cleaning & conditioning',
      'Deep steam sanitation',
      'UV Dashboard Protection'
    ]
  },
  {
    id: 'restoration',
    name: 'The Restoration',
    priceRange: '$299 - $399',
    description: 'A comprehensive revival for vehicles demanding perfection.',
    features: [
      'Includes The Signature',
      'Single-stage paint correction',
      'Carnauba wax or 6-month sealant',
      'Hot water extraction (Carpets/Seats)',
      'Engine bay detail',
      'Ozone odor elimination'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'mobile',
    title: 'We Come To You',
    description: 'Luxury service at your home or office. Fully equipped with water and power.',
    icon: <Truck className="w-6 h-6" />
  },
  {
    id: '247',
    title: 'Available 24/7',
    description: 'Concierge-level availability to suit your demanding schedule.',
    icon: <Clock className="w-6 h-6" />
  },
  {
    id: 'eco',
    title: 'Eco-Conscious',
    description: 'Advanced biodegradable products that protect your car and the environment.',
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 'quality',
    title: 'Perfection Guaranteed',
    description: 'Uncompromising attention to detail. We are not finished until you are thrilled.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'rated',
    title: 'Top Rated',
    description: '4.7 Stars on Google. The preferred choice for LA’s luxury vehicles.',
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 'local',
    title: 'Locally Owned',
    description: 'Proudly serving the exclusive neighborhoods of Los Angeles.',
    icon: <MapPin className="w-6 h-6" />
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Michael R.',
    rating: 5,
    text: "Absolutely impeccable. The attention to detail surpassed my expectations. My S-Class looks better than the day I bought it.",
    source: 'Google Review'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 5,
    text: "Professional, punctual, and incredibly thorough. The convenience of them coming to my office is unmatched.",
    source: 'Google Review'
  },
  {
    id: '3',
    author: 'Sarah M.',
    rating: 5,
    text: "I was hesitant about mobile detailers, but Pure Intensions is on another level. Truly a white-glove service.",
    source: 'Google Review'
  }
];