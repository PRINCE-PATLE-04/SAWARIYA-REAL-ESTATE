import { useState } from 'react';
import { Link } from 'react-router-dom';
import { rentProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PageHeader from '../components/PageHeader';

export default function RentPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { key: 'all', label: 'All Rentals' },
    { key: 'residential', label: '🏠 Residential' },
    { key: 'commercial', label: '🏢 Commercial' },
  ];
  
  const filtered = activeCategory === 'all' ? rentProperties : rentProperties.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHeader
        breadcrumb="Home / Rent Property"
        title="Find a Place That Fits Your Needs"
        subtitle="Explore our rental properties — from cozy apartments to spacious commercial spaces, all available for rent."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.key ? 'btn-gold' : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-500'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Properties Grid - ONLY RENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(property => (
              <PropertyCard key={property.id} property={property} badge="rent" />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-5xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 font-inter text-lg">No rental properties found in this category.</p>
              <button onClick={() => setActiveCategory('all')} className="mt-4 text-gold-500 font-inter font-medium hover:underline">
                View All Rentals
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-16 bg-navy-900 rounded-2xl p-10">
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">Looking for something specific?</h3>
            <p className="text-white/70 font-inter text-sm mb-6">Share your rental requirements — budget, location, type — and we'll find the perfect match.</p>
            <Link to="/contact" className="btn-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
              <i className="fas fa-search"></i> Share Your Requirement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
