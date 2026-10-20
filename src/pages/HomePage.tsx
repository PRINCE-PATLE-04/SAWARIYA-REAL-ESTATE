import { Link } from 'react-router-dom';
import { featuredProperties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop" alt="Jay Sawariya Seth Real Estate" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-gold-400 font-inter text-sm md:text-base tracking-[0.3em] uppercase mb-4">Welcome to</p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
              JAY SAWARIYA SETH
            </h1>
            <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-semibold text-gradient-gold mb-6">
              REAL ESTATE
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-white/90 font-inter text-lg md:text-2xl font-light mb-2 italic">
              "Sapno ka Ghar, Ab Hoga Aapka"
            </p>
            <p className="text-white/60 font-inter text-sm md:text-base mb-10">
              Your Dream Property, Our Priority
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/buy" className="btn-gold px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2">
                <i className="fas fa-home"></i> Buy Property
              </Link>
              <Link to="/sell" className="btn-outline-gold px-8 py-4 rounded-full text-base flex items-center gap-2">
                <i className="fas fa-tags"></i> Sell Property
              </Link>
              <Link to="/rent" className="btn-outline-gold px-8 py-4 rounded-full text-base flex items-center gap-2">
                <i className="fas fa-key"></i> Rent Property
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '500+', label: 'Properties Sold' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Locations' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-gold-400 font-playfair text-3xl md:text-4xl font-bold">{stat.number}</p>
                <p className="text-white/60 font-inter text-xs md:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Your Trusted Property Partner</h2>
            <div className="section-divider mb-6"></div>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto">We bring you the best properties with complete transparency, trust, and professional guidance at every step.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fas fa-award', title: '100% Client Satisfaction', desc: 'We ensure complete satisfaction with every property deal.' },
              { icon: 'fas fa-handshake', title: 'Trust & Transparency', desc: 'Honest dealings with full transparency in every transaction.' },
              { icon: 'fas fa-user-tie', title: 'Expert Guidance', desc: 'Professional advice from experienced real estate experts.' },
              { icon: 'fas fa-clock', title: 'On-Time Support', desc: 'Timely assistance throughout your property journey.' },
              { icon: 'fas fa-shield-alt', title: 'Safe & Secure Deal', desc: '100% secure and legally verified property transactions.' },
              { icon: 'fas fa-map-marker-alt', title: 'Prime Locations', desc: 'Properties in the most sought-after locations of Ahmedabad.' },
            ].map((feature, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                  <i className={`${feature.icon} text-navy-900 text-xl`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-400 font-inter text-sm tracking-widest uppercase mb-3">Property Categories</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">Explore by Category</h2>
            <div className="section-divider mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '🏢', name: 'Flats & Apartments', count: '120+ Properties' },
              { icon: '🏡', name: 'Villas & Bungalows', count: '45+ Properties' },
              { icon: '🏪', name: 'Shops & Showrooms', count: '80+ Properties' },
              { icon: '🏢', name: 'Offices & Godowns', count: '60+ Properties' },
              { icon: '🌳', name: 'Land & Plots', count: '90+ Properties' },
            ].map((cat, i) => (
              <Link key={i} to="/buy" className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold-400/30 transition-all">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-white font-inter font-semibold text-base mb-1">{cat.name}</h3>
                <p className="text-gold-400 font-inter text-xs">{cat.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Featured Properties</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Handpicked for You</h2>
            <div className="section-divider mb-6"></div>
            <p className="text-gray-600 font-inter max-w-2xl mx-auto">Discover our premium selection of properties in Ahmedabad's most desirable locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link to="/buy" className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fas fa-shopping-cart"></i> View All for Sale
            </Link>
            <Link to="/rent" className="btn-outline-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fas fa-key"></i> View All for Rent
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop" alt="About Us" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <p className="font-playfair text-3xl font-bold text-gold-500">10+</p>
                <p className="text-gray-600 text-sm font-inter">Years of Trusted Service</p>
              </div>
            </div>

            <div>
              <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Jay Sawariya Seth</h2>
              <div className="w-20 h-1 gradient-gold rounded mb-6"></div>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Jay Sawariya Seth Real Estate helps buyers, sellers, and tenants find the right property with trusted guidance and transparent service. With over a decade of experience in Ahmedabad's real estate market, we have built a reputation for integrity, expertise, and client-first approach.
              </p>
              <Link to="/about" className="btn-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-white/70 font-inter mb-8">Contact us today and let our experts guide you to the perfect property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fas fa-phone"></i> Contact Us
            </Link>
            <a href="https://wa.me/919067749526" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
