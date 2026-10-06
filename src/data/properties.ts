export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  type: string;
  category: string;
  image: string;
  status: 'sale' | 'rent';
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
}

export const featuredProperties: Property[] = [
  {
    id: 1,
    name: "Luxury 3BHK Apartment",
    location: "SG Highway, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    status: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: "1850 sq.ft"
  },
  {
    id: 2,
    name: "Premium Villa with Garden",
    location: "Bopal, Ahmedabad",
    price: "₹2.5 Cr",
    type: "Villa & Bungalow",
    category: "residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    status: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sq.ft"
  },
  {
    id: 3,
    name: "Commercial Shop Space",
    location: "Satellite, Ahmedabad",
    price: "₹85 Lakh",
    type: "Shop & Showroom",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    status: 'sale',
    area: "450 sq.ft"
  },
  {
    id: 4,
    name: "Modern 2BHK Flat",
    location: "Prahlad Nagar, Ahmedabad",
    price: "₹45,000/mo",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    status: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft"
  },
  {
    id: 5,
    name: "Corner Plot - Prime Location",
    location: "Shela, Ahmedabad",
    price: "₹65 Lakh",
    type: "Land & Plot",
    category: "land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    status: 'sale',
    area: "2400 sq.ft"
  },
  {
    id: 6,
    name: "Office Space - IT Park",
    location: "GIFT City, Gandhinagar",
    price: "₹1.5 Lakh/mo",
    type: "Office & Godown",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    status: 'rent',
    area: "2000 sq.ft"
  }
];

export const rentProperties: Property[] = [
  {
    id: 7,
    name: "Furnished 2BHK Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹35,000/mo",
    type: "Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    status: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: "1100 sq.ft"
  },
  {
    id: 8,
    name: "Commercial Office",
    location: "CG Road, Ahmedabad",
    price: "₹80,000/mo",
    type: "Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    status: 'rent',
    area: "1500 sq.ft"
  },
  {
    id: 9,
    name: "Retail Shop",
    location: "Maninagar, Ahmedabad",
    price: "₹25,000/mo",
    type: "Shop",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    status: 'rent',
    area: "300 sq.ft"
  },
  {
    id: 10,
    name: "Spacious 3BHK House",
    location: "Thaltej, Ahmedabad",
    price: "₹55,000/mo",
    type: "House",
    category: "residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    status: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft"
  }
];

export const buyProperties: Property[] = [
  ...featuredProperties.filter(p => p.status === 'sale'),
  {
    id: 11,
    name: "Luxurious Penthouse",
    location: "Prahlad Nagar, Ahmedabad",
    price: "₹3.8 Cr",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    status: 'sale',
    bedrooms: 4,
    bathrooms: 4,
    area: "4500 sq.ft"
  },
  {
    id: 12,
    name: "Farmhouse with Land",
    location: "Sanand, Ahmedabad",
    price: "₹1.8 Cr",
    type: "Land & Plot",
    category: "land",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    status: 'sale',
    area: "1 Acre"
  }
];
