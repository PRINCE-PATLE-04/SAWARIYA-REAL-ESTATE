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
    image: "https://kommodo.ai/i/FlwJZgbAXP6pZprD1ZjQ",
    bedrooms: 6,
    bathrooms: 4,
    area: "Contact for Details",
    description: "Spacious 6BHK apartment on 3rd floor with semi-furnished interiors. Perfect for large families."
  },
  {
    id: 2,
    name: "3BHK 4th Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://kommodo.ai/i/Q7Zf7rYXXqWVeJ6v2M8G",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Modern 3BHK apartment on 4th floor with semi-furnished amenities. Great ventilation and natural light."
  },
  {
    id: 3,
    name: "3BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Price",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://kommodo.ai/i/XjjEUR9zZyReEGa2scDL",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors. Ideal location with all amenities."
  },
  {
    id: 4,
    name: "Premium Residential Building",
    location: "Ahmedabad",
    price: "Multiple Units Available",
    type: "Building",
    category: "residential",
    image: "https://kommodo.ai/i/l7cGbNM2eUP5fKnJP2du",
    area: "Multiple Options",
    description: "Premium residential building with multiple apartment options available. Contact us for detailed information."
  }
];

// ============ RENT PROPERTIES (Only for Rent) ============
export const rentProperties: Property[] = [
  {
    id: 101,
    name: "6BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Rent",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://kommodo.ai/i/FlwJZgbAXP6pZprD1ZjQ",
    bedrooms: 6,
    bathrooms: 4,
    area: "Contact for Details",
    description: "Spacious 6BHK apartment on 3rd floor with semi-furnished interiors. Perfect for large families."
  },
  {
    id: 102,
    name: "3BHK 4th Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Rent",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://kommodo.ai/i/Q7Zf7rYXXqWVeJ6v2M8G",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Modern 3BHK apartment on 4th floor with semi-furnished amenities. Great ventilation and natural light."
  },
  {
    id: 103,
    name: "3BHK 3rd Floor - Semi Furnished",
    location: "Ahmedabad",
    price: "Contact for Rent",
    type: "Flat & Apartment",
    category: "residential",
    image: "https://kommodo.ai/i/XjjEUR9zZyReEGa2scDL",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors. Ideal location with all amenities."
  },
  {
    id: 104,
    name: "Premium Residential Building",
    location: "Ahmedabad",
    price: "Multiple Units Available",
    type: "Building",
    category: "residential",
    image: "https://kommodo.ai/i/l7cGbNM2eUP5fKnJP2du",
    area: "Multiple Options",
    description: "Premium residential building with multiple apartment options available for rent. Contact us for detailed information."
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
    image: "https://kommodo.ai/i/FlwJZgbAXP6pZprD1ZjQ",
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
    image: "https://kommodo.ai/i/Q7Zf7rYXXqWVeJ6v2M8G",
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
    image: "https://kommodo.ai/i/XjjEUR9zZyReEGa2scDL",
    bedrooms: 3,
    bathrooms: 2,
    area: "Contact for Details",
    description: "Well-designed 3BHK apartment on 3rd floor with semi-furnished interiors."
  }
];
