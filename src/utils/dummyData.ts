
export type Supplier = {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number]; // [longitude, latitude]
  sustainabilityScore: number;
  carbonEmissions: number; // tons of CO2
  category: 'raw-materials' | 'manufacturing' | 'packaging' | 'distribution' | 'retail';
  products: string[];
  certifications: string[];
};

export type EmissionData = {
  date: string;
  value: number;
  category: string;
};

export const suppliers: Supplier[] = [
  {
    id: '1',
    name: 'EcoHarvest Materials',
    location: 'Portland, Oregon',
    coordinates: [-122.6784, 45.5152],
    sustainabilityScore: 92,
    carbonEmissions: 78,
    category: 'raw-materials',
    products: ['Organic Cotton', 'Recycled Polyester'],
    certifications: ['GOTS Certified', 'Carbon Neutral'],
  },
  {
    id: '2',
    name: 'GreenTech Manufacturing',
    location: 'Austin, Texas',
    coordinates: [-97.7431, 30.2672],
    sustainabilityScore: 85,
    carbonEmissions: 124,
    category: 'manufacturing',
    products: ['Solar Panels', 'Wind Turbines'],
    certifications: ['ISO 14001', 'B Corp'],
  },
  {
    id: '3',
    name: 'SustainaPack Solutions',
    location: 'Seattle, Washington',
    coordinates: [-122.3321, 47.6062],
    sustainabilityScore: 88,
    carbonEmissions: 65,
    category: 'packaging',
    products: ['Biodegradable Packaging', 'Recycled Boxes'],
    certifications: ['FSC Certified', 'Plastic-Free'],
  },
  {
    id: '4',
    name: 'EcoTransport Logistics',
    location: 'Chicago, Illinois',
    coordinates: [-87.6298, 41.8781],
    sustainabilityScore: 79,
    carbonEmissions: 210,
    category: 'distribution',
    products: ['Electric Fleet Services', 'Route Optimization'],
    certifications: ['SmartWay Certified'],
  },
  {
    id: '5',
    name: 'GreenRetail Chain',
    location: 'Boston, Massachusetts',
    coordinates: [-71.0589, 42.3601],
    sustainabilityScore: 81,
    carbonEmissions: 156,
    category: 'retail',
    products: ['Eco-friendly Outlets', 'Sustainable Displays'],
    certifications: ['LEED Certified', 'Energy Star'],
  },
  {
    id: '6',
    name: 'PureMaterials Corp',
    location: 'Denver, Colorado',
    coordinates: [-104.9903, 39.7392],
    sustainabilityScore: 76,
    carbonEmissions: 142,
    category: 'raw-materials',
    products: ['Recycled Metals', 'Sustainable Wood'],
    certifications: ['Rainforest Alliance'],
  },
  {
    id: '7',
    name: 'CleanAssembly Inc',
    location: 'Detroit, Michigan',
    coordinates: [-83.0458, 42.3314],
    sustainabilityScore: 71,
    carbonEmissions: 189,
    category: 'manufacturing',
    products: ['Electric Vehicle Parts', 'Green Electronics'],
    certifications: ['EPEAT', 'RoHS Compliant'],
  },
];

export const emissionsHistory: EmissionData[] = [
  { date: '2023-01', value: 1200, category: 'transportation' },
  { date: '2023-02', value: 1180, category: 'transportation' },
  { date: '2023-03', value: 1150, category: 'transportation' },
  { date: '2023-04', value: 1100, category: 'transportation' },
  { date: '2023-05', value: 1050, category: 'transportation' },
  { date: '2023-06', value: 980, category: 'transportation' },
  { date: '2023-07', value: 950, category: 'transportation' },
  { date: '2023-08', value: 920, category: 'transportation' },
  { date: '2023-09', value: 900, category: 'transportation' },
  { date: '2023-10', value: 880, category: 'transportation' },
  { date: '2023-11', value: 850, category: 'transportation' },
  { date: '2023-12', value: 840, category: 'transportation' },
  
  { date: '2023-01', value: 800, category: 'manufacturing' },
  { date: '2023-02', value: 810, category: 'manufacturing' },
  { date: '2023-03', value: 790, category: 'manufacturing' },
  { date: '2023-04', value: 770, category: 'manufacturing' },
  { date: '2023-05', value: 750, category: 'manufacturing' },
  { date: '2023-06', value: 730, category: 'manufacturing' },
  { date: '2023-07', value: 720, category: 'manufacturing' },
  { date: '2023-08', value: 700, category: 'manufacturing' },
  { date: '2023-09', value: 680, category: 'manufacturing' },
  { date: '2023-10', value: 670, category: 'manufacturing' },
  { date: '2023-11', value: 660, category: 'manufacturing' },
  { date: '2023-12', value: 650, category: 'manufacturing' },
  
  { date: '2023-01', value: 450, category: 'facilities' },
  { date: '2023-02', value: 430, category: 'facilities' },
  { date: '2023-03', value: 440, category: 'facilities' },
  { date: '2023-04', value: 420, category: 'facilities' },
  { date: '2023-05', value: 410, category: 'facilities' },
  { date: '2023-06', value: 400, category: 'facilities' },
  { date: '2023-07', value: 390, category: 'facilities' },
  { date: '2023-08', value: 380, category: 'facilities' },
  { date: '2023-09', value: 370, category: 'facilities' },
  { date: '2023-10', value: 360, category: 'facilities' },
  { date: '2023-11', value: 350, category: 'facilities' },
  { date: '2023-12', value: 340, category: 'facilities' },
];

export const recommendations = [
  {
    id: 1,
    title: 'Switch to renewable energy sources',
    description: 'Transition manufacturing facilities to solar or wind power to reduce Scope 2 emissions by up to 80%.',
    impact: 'high',
    timeline: '12-24 months',
    category: 'energy',
  },
  {
    id: 2,
    title: 'Optimize logistics routes',
    description: 'Implementing AI-driven route optimization could reduce transportation emissions by 15-20%.',
    impact: 'medium',
    timeline: '3-6 months',
    category: 'transportation',
  },
  {
    id: 3,
    title: 'Implement supplier carbon tracking',
    description: 'Require key suppliers to report carbon data, improving Scope 3 emission visibility.',
    impact: 'medium',
    timeline: '6-9 months',
    category: 'suppliers',
  },
  {
    id: 4,
    title: 'Sustainable packaging redesign',
    description: 'Replace plastic packaging with biodegradable alternatives to reduce waste and carbon footprint.',
    impact: 'medium',
    timeline: '6-12 months',
    category: 'packaging',
  },
  {
    id: 5,
    title: 'Energy efficiency audit',
    description: 'Conduct facility energy assessments to identify major efficiency improvement opportunities.',
    impact: 'high',
    timeline: '1-3 months',
    category: 'energy',
  },
];

export const totalCarbonFootprint = {
  total: 2450,
  byCategory: {
    'Raw Materials': 620,
    'Manufacturing': 840,
    'Transportation': 650,
    'Packaging': 220,
    'Facilities': 120
  },
  yearOverYearChange: -8.5,
};

export const categoryColors = {
  'Raw Materials': '#3EB75E',
  'Manufacturing': '#0EA5E9',
  'Transportation': '#F97316',
  'Packaging': '#8B5CF6',
  'Facilities': '#D946EF'
};
