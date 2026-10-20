import { Link } from 'react-router-dom';
import { rentProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PageHeader from '../components/PageHeader';

export default function RentPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Rent Property"
        title="Find a Place That Fits Your Needs"
        subtitle="Explore our rental properties — premium apartments available for rent in Ahmedabad."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Properties Grid - ONLY RENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentProperties.map(property => (
              <PropertyCard key={property.id} property={property} badge="rent" />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-navy-900 rounded-2xl p-10">
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">Looking for something specific?</h3>
            <p className="text-white/70 font-inter text-sm mb-6">Share your rental requirements — budget, location, type — and we'll find the perfect match.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
                <i className="fas fa-search"></i> Share Your Requirement
              </Link>
              <a href="tel:+919067749526" className="btn-outline-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
                <i className="fas fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
