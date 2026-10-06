export interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  type: string;
  category: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
}

// ============ BUY PROPERTIES (Only for Sale) ============
export const buyProperties: Property[] = [
  {
    id: 1,
    name: "Luxury 3BHK Apartment",
    location: "SG Highway, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
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
    area: "450 sq.ft"
  },
  {
    id: 4,
    name: "Corner Plot - Prime Location",
    location: "Shela, Ahmedabad",
    price: "₹65 Lakh",
    type: "Land & Plot",
    category: "land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    area: "2400 sq.ft"
  },
  {
    id: 5,
    name: "Luxurious Penthouse",
    location: "Prahlad Nagar, Ahmedabad",
    price: "₹3.8 Cr",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    bedrooms: 4,
    bathrooms: 4,
    area: "4500 sq.ft"
  },
  {
    id: 6,
    name: "Farmhouse with Land",
    location: "Sanand, Ahmedabad",
    price: "₹1.8 Cr",
    type: "Land & Plot",
    category: "land",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    area: "1 Acre"
  },
  {
    id: 7,
    name: "Modern 2BHK Flat",
    location: "Thaltej, Ahmedabad",
    price: "₹72 Lakh",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft"
  },
  {
    id: 8,
    name: "Office Space - Business Hub",
    location: "CG Road, Ahmedabad",
    price: "₹1.1 Cr",
    type: "Office & Godown",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    area: "2000 sq.ft"
  },
  {
    id: 9,
    name: "Spacious 4BHK Bungalow",
    location: "Jodhpur Village, Ahmedabad",
    price: "₹4.2 Cr",
    type: "Villa & Bungalow",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    bedrooms: 4,
    bathrooms: 4,
    area: "5000 sq.ft"
  },
];

// ============ RENT PROPERTIES (Only for Rent) ============
export const rentProperties: Property[] = [
  {
    id: 101,
    name: "Furnished 2BHK Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹35,000/mo",
    type: "Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100 sq.ft"
  },
  {
    id: 102,
    name: "Commercial Office Space",
    location: "CG Road, Ahmedabad",
    price: "₹80,000/mo",
    type: "Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    area: "1500 sq.ft"
  },
  {
    id: 103,
    name: "Retail Shop - Main Road",
    location: "Maninagar, Ahmedabad",
    price: "₹25,000/mo",
    type: "Shop",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    area: "300 sq.ft"
  },
  {
    id: 104,
    name: "Spacious 3BHK House",
    location: "Thaltej, Ahmedabad",
    price: "₹55,000/mo",
    type: "House",
    category: "residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft"
  },
  {
    id: 105,
    name: "1BHK Studio Apartment",
    location: "Prahlad Nagar, Ahmedabad",
    price: "₹18,000/mo",
    type: "Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq.ft"
  },
  {
    id: 106,
    name: "Warehouse / Godown",
    location: "Naroda, Ahmedabad",
    price: "₹1.2 Lakh/mo",
    type: "Godown",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    area: "5000 sq.ft"
  },
  {
    id: 107,
    name: "Fully Furnished 3BHK",
    location: "Bopal, Ahmedabad",
    price: "₹65,000/mo",
    type: "Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    bedrooms: 3,
    bathrooms: 3,
    area: "2000 sq.ft"
  },
  {
    id: 108,
    name: "Showroom - Ground Floor",
    location: "SG Highway, Ahmedabad",
    price: "₹1.5 Lakh/mo",
    type: "Showroom",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&h=400&fit=crop",
    area: "1200 sq.ft"
  },
];

// ============ FEATURED PROPERTIES (Mix of Buy & Rent for Homepage) ============
export const featuredProperties: Property[] = [
  {
    id: 201,
    name: "Luxury 3BHK Apartment",
    location: "SG Highway, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    bedrooms: 3,
    bathrooms: 2,
    area: "1850 sq.ft"
  },
  {
    id: 202,
    name: "Premium Villa with Garden",
    location: "Bopal, Ahmedabad",
    price: "₹2.5 Cr",
    type: "Villa & Bungalow",
    category: "residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sq.ft"
  },
  {
    id: 203,
    name: "Furnished 2BHK on Rent",
    location: "Vastrapur, Ahmedabad",
    price: "₹35,000/mo",
    type: "Apartment",
    category: "residential",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    bedrooms: 2,
    bathrooms: 2,
    area: "1100 sq.ft"
  },
  {
    id: 204,
    name: "Corner Plot - Prime Location",
    location: "Shela, Ahmedabad",
    price: "₹65 Lakh",
    type: "Land & Plot",
    category: "land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
    area: "2400 sq.ft"
  },
  {
    id: 205,
    name: "Commercial Office on Rent",
    location: "CG Road, Ahmedabad",
    price: "₹80,000/mo",
    type: "Office",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    area: "1500 sq.ft"
  },
  {
    id: 206,
    name: "Spacious 4BHK Bungalow",
    location: "Jodhpur Village, Ahmedabad",
    price: "₹4.2 Cr",
    type: "Villa & Bungalow",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    bedrooms: 4,
    bathrooms: 4,
    area: "5000 sq.ft"
  },
];
