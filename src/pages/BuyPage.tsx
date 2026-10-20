import { Link } from 'react-router-dom';
import { buyProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PageHeader from '../components/PageHeader';

export default function BuyPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / Buy Property"
        title="Find Your Dream Property"
        subtitle="Browse through our exclusive collection of premium properties available for purchase in Ahmedabad."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Properties Grid - ONLY BUY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyProperties.map(property => (
              <PropertyCard key={property.id} property={property} badge="sale" />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 bg-navy-900 rounded-2xl p-10">
            <h3 className="font-playfair text-2xl font-bold text-white mb-3">Interested in any property?</h3>
            <p className="text-white/70 font-inter text-sm mb-6">Contact us for detailed information, pricing, and site visits.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
                <i className="fas fa-envelope"></i> Send Enquiry
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
