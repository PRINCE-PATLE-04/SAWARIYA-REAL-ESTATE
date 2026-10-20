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
  description?: string;
}

// ============ BUY PROPERTIES (Only for Sale) ============
export const buyProperties: Property[] = [
  {
    id: 1,
    name: "6BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/eb0fac38-3570-4185-afab-c8812c8fc8ca/_result.png",
    bedrooms: 6,
    bathrooms: 4,
    area: "Contact for Details",
    description: "Spacious 6BHK apartment on 3rd floor with semi-furnished interiors. Perfect for large families. For more details, meet us."
  },
  {
    id: 2,
    name: "3BHK 4th Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/5faf5d49-5c06-4e9e-ad13-09d2d0bee72c/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Modern 3BHK apartment on 4th floor with semi-furnished amenities. Great ventilation and natural light. For more details, meet us."
  },
  {
    id: 3,
    name: "3BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/3940c944-f687-47f8-b89b-ec8143928615/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors. Ideal location with all amenities. For more details, meet us."
  },
  {
    id: 4,
    name: "Premium Residential Building",
    location: "Ahmedabad",
    price: "Multiple Units Available",
    type: "Building",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/e79c348d-5d59-48b3-a6a8-bfdbd4da9803/_result.png",
    area: "Multiple Options",
    description: "Premium residential building with multiple apartment options available. For more details, meet us."
  }
];

// ============ RENT PROPERTIES (Only for Rent) ============
export const rentProperties: Property[] = [
  {
    id: 101,
    name: "6BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "₹30,000 - 35,000/month",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/eb0fac38-3570-4185-afab-c8812c8fc8ca/_result.png",
    bedrooms: 6,
    bathrooms: 4,
    area: "Contact for Details",
    description: "Spacious 6BHK apartment on 3rd floor with semi-furnished interiors. Perfect for large families. For more details, meet us."
  },
  {
    id: 102,
    name: "3BHK 4th Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "₹25,000 - 30,000/month",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/5faf5d49-5c06-4e9e-ad13-09d2d0bee72c/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Modern 3BHK apartment on 4th floor with semi-furnished amenities. Great ventilation and natural light. For more details, meet us."
  },
  {
    id: 103,
    name: "3BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "₹25,000 - 30,000/month",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/3940c944-f687-47f8-b89b-ec8143928615/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors. Ideal location with all amenities. For more details, meet us."
  },
  {
    id: 104,
    name: "Premium Residential Building",
    location: "Ahmedabad",
    price: "Multiple Units Available",
    type: "Building",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/e79c348d-5d59-48b3-a6a8-bfdbd4da9803/_result.png",
    area: "Multiple Options",
    description: "Premium residential building with multiple apartment options available for rent. For more details, meet us."
  }
];

// ============ FEATURED PROPERTIES (Mix for Homepage) ============
export const featuredProperties: Property[] = [
  {
    id: 201,
    name: "6BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/eb0fac38-3570-4185-afab-c8812c8fc8ca/_result.png",
    bedrooms: 6,
    bathrooms: 4,
    area: "Contact for Details",
    description: "Spacious 6BHK apartment on 3rd floor with semi-furnished interiors."
  },
  {
    id: 202,
    name: "3BHK 4th Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/5faf5d49-5c06-4e9e-ad13-09d2d0bee72c/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Modern 3BHK apartment on 4th floor with semi-furnished amenities."
  },
  {
    id: 203,
    name: "3BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://image.qwenlm.ai/generated-images/3940c944-f687-47f8-b89b-ec8143928615/_result.png",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors."
  }
];
