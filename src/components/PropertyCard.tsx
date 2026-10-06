import { Link } from 'react-router-dom';
import { Property } from '../data/properties';

interface Props {
  property: Property;
  badge?: 'sale' | 'rent' | 'none';
}

export default function PropertyCard({ property, badge = 'none' }: Props) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
        {badge === 'sale' && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
              For Sale
            </span>
          </div>
        )}
        {badge === 'rent' && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500 text-white">
              For Rent
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-navy-900/80 text-gold-400">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-lg font-bold text-navy-900 mb-2">{property.name}</h3>
        <p className="text-gray-500 font-inter text-sm flex items-center gap-1 mb-3">
          <i className="fas fa-map-marker-alt text-gold-500 text-xs"></i> {property.location}
        </p>
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
          {property.bedrooms && <span><i className="fas fa-bed text-gold-500 mr-1"></i>{property.bedrooms} Beds</span>}
          {property.bathrooms && <span><i className="fas fa-bath text-gold-500 mr-1"></i>{property.bathrooms} Baths</span>}
          {property.area && <span><i className="fas fa-ruler-combined text-gold-500 mr-1"></i>{property.area}</span>}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <p className="font-playfair text-xl font-bold text-gold-500">{property.price}</p>
          <Link to="/contact" className="px-4 py-2 bg-navy-900 text-white text-xs rounded-full hover:bg-navy-700 transition-colors">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
