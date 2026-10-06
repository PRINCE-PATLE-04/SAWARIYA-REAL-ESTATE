import { useState, useEffect } from 'react';
import { featuredProperties, buyProperties, rentProperties, Property } from './data/properties';

// ============ NAVBAR ============
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Buy', href: '#buy' },
    { name: 'Sell', href: '#sell' },
    { name: 'Rent', href: '#rent' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col">
            <span className="text-gold-400 font-playfair font-bold text-lg leading-tight">JAY SAWARIYA SETH</span>
            <span className="text-white text-xs font-inter tracking-widest uppercase">Real Estate</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-white/80 hover:text-gold-400 transition-colors font-inter text-sm font-medium">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-gold px-6 py-2.5 rounded-full text-sm">
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white text-2xl">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-gold-400 transition-colors font-inter text-base font-medium py-2">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-gold block text-center px-6 py-3 rounded-full text-sm mt-4">
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop" alt="Luxury Property" className="w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#buy" className="btn-gold px-8 py-4 rounded-full text-base font-semibold flex items-center gap-2">
              <i className="fas fa-home"></i> Buy Property
            </a>
            <a href="#sell" className="btn-outline-gold px-8 py-4 rounded-full text-base flex items-center gap-2">
              <i className="fas fa-tags"></i> Sell Property
            </a>
            <a href="#rent" className="btn-outline-gold px-8 py-4 rounded-full text-base flex items-center gap-2">
              <i className="fas fa-key"></i> Rent Property
            </a>
          </div>
        </div>

        {/* Stats */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#why-choose" className="text-white/50 hover:text-gold-400 transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

// ============ WHY CHOOSE US ============
function WhyChooseSection() {
  const features = [
    { icon: 'fas fa-award', title: '100% Client Satisfaction', desc: 'We ensure complete satisfaction with every property deal.' },
    { icon: 'fas fa-handshake', title: 'Trust & Transparency', desc: 'Honest dealings with full transparency in every transaction.' },
    { icon: 'fas fa-user-tie', title: 'Expert Guidance', desc: 'Professional advice from experienced real estate experts.' },
    { icon: 'fas fa-clock', title: 'On-Time Support', desc: 'Timely assistance throughout your property journey.' },
    { icon: 'fas fa-shield-alt', title: 'Safe & Secure Deal', desc: '100% secure and legally verified property transactions.' },
    { icon: 'fas fa-map-marker-alt', title: 'Prime Locations', desc: 'Properties in the most sought-after locations of Ahmedabad.' },
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Your Trusted Property Partner</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">We bring you the best properties with complete transparency, trust, and professional guidance at every step.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
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
  );
}

// ============ PROPERTY CATEGORIES ============
function CategoriesSection() {
  const categories = [
    { icon: '🏢', name: 'Flats & Apartments', count: '120+ Properties' },
    { icon: '🏡', name: 'Villas & Bungalows', count: '45+ Properties' },
    { icon: '🏪', name: 'Shops & Showrooms', count: '80+ Properties' },
    { icon: '🏢', name: 'Offices & Godowns', count: '60+ Properties' },
    { icon: '🌳', name: 'Land & Plots', count: '90+ Properties' },
  ];

  return (
    <section className="py-20 gradient-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-inter text-sm tracking-widest uppercase mb-3">Property Categories</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">Explore by Category</h2>
          <div className="section-divider mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <a key={i} href="#buy" className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-gold-400/30 transition-all">
              <div className="text-5xl mb-4">{cat.icon}</div>
              <h3 className="text-white font-inter font-semibold text-base mb-1">{cat.name}</h3>
              <p className="text-gold-400 font-inter text-xs">{cat.count}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROPERTY CARD ============
function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${property.status === 'sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
            {property.status === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
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
          <div className="flex gap-2">
            <a href="#contact" className="px-4 py-2 bg-navy-900 text-white text-xs rounded-full hover:bg-navy-700 transition-colors">
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ FEATURED PROPERTIES ============
function FeaturedSection() {
  return (
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

        <div className="text-center mt-12">
          <a href="#buy" className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
            View All Properties <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ BUY SECTION ============
function BuySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'residential', 'commercial', 'land'];
  const filtered = activeCategory === 'all' ? buyProperties : buyProperties.filter(p => p.category === activeCategory);

  return (
    <section id="buy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Buy Property</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Find Your Dream Property</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">Browse through our exclusive collection of properties available for purchase in prime locations.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'btn-gold' : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-500'}`}
            >
              {cat === 'all' ? 'All Properties' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SELL SECTION ============
function SellSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', propertyType: '', location: '', expectedPrice: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon regarding your property.');
    setFormData({ name: '', phone: '', propertyType: '', location: '', expectedPrice: '', message: '' });
  };

  return (
    <section id="sell" className="py-20 gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-royal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-inter text-sm tracking-widest uppercase mb-3">Sell Property</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">Sell Your Property with Confidence</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-white/70 font-inter max-w-2xl mx-auto">Get the best value for your property. We connect you with the right buyers at the right price.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Highlights */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: 'fas fa-bullseye', title: 'Right Property', desc: 'We market your property to the right audience.' },
                { icon: 'fas fa-users', title: 'Right People', desc: 'Connect with genuine and verified buyers.' },
                { icon: 'fas fa-indian-rupee-sign', title: 'Right Price', desc: 'Get the best market value for your property.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-navy-900`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-6">Submit Your Property</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <select required value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm text-gray-600">
                  <option value="">Property Type</option>
                  <option>Flat & Apartment</option>
                  <option>Villa & Bungalow</option>
                  <option>Shop & Showroom</option>
                  <option>Office & Godown</option>
                  <option>Land & Plot</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Property Location" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <input type="text" placeholder="Expected Price" value={formData.expectedPrice} onChange={e => setFormData({...formData, expectedPrice: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <textarea placeholder="Additional Message" rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-gold py-4 rounded-lg text-base">
                <i className="fas fa-paper-plane mr-2"></i> Submit Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ RENT SECTION ============
function RentSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'residential', 'commercial'];
  const filtered = activeCategory === 'all' ? rentProperties : rentProperties.filter(p => p.category === activeCategory);

  return (
    <section id="rent" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Rent Property</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Find a Place That Fits Your Needs</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-gray-600 font-inter max-w-2xl mx-auto">Explore our rental properties — from cozy apartments to spacious commercial spaces.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'residential', 'commercial'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'btn-gold' : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-500'}`}
            >
              {cat === 'all' ? 'All Rentals' : cat === 'residential' ? '🏠 Residential' : '🏢 Commercial'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT SECTION ============
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop" alt="About Us" className="w-full h-[500px] object-cover" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
              <p className="font-playfair text-3xl font-bold text-gold-500">10+</p>
              <p className="text-gray-600 text-sm font-inter">Years of Trusted Service</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-4">About Jay Sawariya Seth</h2>
            <div className="w-20 h-1 gradient-gold rounded mb-6"></div>
            
            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              Jay Sawariya Seth Real Estate helps buyers, sellers, and tenants find the right property with trusted guidance and transparent service. With over a decade of experience in Ahmedabad's real estate market, we have built a reputation for integrity, expertise, and client-first approach.
            </p>
            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              Our mission is simple — to make your property dreams come true. Whether you're looking to buy your first home, sell a valued asset, or find the perfect rental, we are here to guide you every step of the way.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'fas fa-heart', text: '100% Client Satisfaction' },
                { icon: 'fas fa-handshake', text: 'Trust & Transparency' },
                { icon: 'fas fa-user-tie', text: 'Expert Guidance' },
                { icon: 'fas fa-clock', text: 'On-Time Support' },
                { icon: 'fas fa-shield-alt', text: 'Safe & Secure Deal' },
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <i className={`${point.icon} text-gold-500 text-xs`}></i>
                  </div>
                  <span className="text-navy-900 font-inter text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ LOCATION SECTION ============
function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Our Location</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">Visit Our Office</h2>
          <div className="section-divider mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.904!2d72.5098!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzIxLjAiTiA3MsKwMzAnMzUuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-navy-900"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-navy-900 mb-2">Our Office Address</h4>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    Garden Paradise, 2<br />
                    Near Reliance Villa,<br />
                    Behind Divya Jyoti School Road,<br />
                    Ahmedabad, Gujarat 380018, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-navy-900"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-navy-900 mb-2">Phone</h4>
                  <p className="text-gray-600 font-inter text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-navy-900"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-navy-900 mb-2">Email</h4>
                  <p className="text-gray-600 font-inter text-sm">info@jaysawariyaseth.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-navy-900"></i>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-navy-900 mb-2">Working Hours</h4>
                  <p className="text-gray-600 font-inter text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 font-inter text-sm">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', interest: 'buy', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you shortly.');
    setFormData({ name: '', phone: '', interest: 'buy', message: '' });
  };

  return (
    <section id="contact" className="py-20 gradient-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-inter text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">Let's Find Your Next Property</h2>
          <div className="section-divider mb-6"></div>
          <p className="text-white/70 font-inter max-w-2xl mx-auto">Have a question or ready to start your property journey? Reach out to us today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-white mb-6">Send Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <select value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm">
                  <option value="buy" className="text-gray-900">Interested In: Buy</option>
                  <option value="sell" className="text-gray-900">Interested In: Sell</option>
                  <option value="rent" className="text-gray-900">Interested In: Rent</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full btn-gold py-4 rounded-lg text-base font-semibold">
                <i className="fas fa-paper-plane mr-2"></i> Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info & CTAs */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-navy-900 text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">Visit Us</p>
                  <p className="text-white/60 text-sm">Garden Paradise, 2, Ahmedabad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-navy-900 text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-white/60 text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-navy-900 text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-white/60 text-sm">info@jaysawariyaseth.com</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl transition-all font-semibold">
                <i className="fas fa-phone text-lg"></i>
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white py-4 px-6 rounded-xl transition-all font-semibold">
                <i className="fab fa-whatsapp text-xl"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-gold-400 mb-1">JAY SAWARIYA SETH</h3>
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Real Estate</p>
            <p className="text-white/60 text-sm font-inter leading-relaxed mb-4">
              Your trusted partner in finding the perfect property. We make your dream of owning a home a reality.
            </p>
            <div className="flex gap-3">
              {['fab fa-facebook-f', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-youtube'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold-500 hover:text-navy-900 transition-all">
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Buy Property', 'Sell Property', 'Rent Property', 'About Us', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              {['Flats & Apartments', 'Villas & Bungalows', 'Shops & Showrooms', 'Offices & Godowns', 'Land & Plots'].map((type, i) => (
                <li key={i}>
                  <a href="#buy" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">{type}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-gold-400 mt-1 text-sm"></i>
                <span className="text-white/60 text-sm font-inter">Garden Paradise, 2, Near Reliance Villa, Ahmedabad - 380018</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-gold-400 text-sm"></i>
                <span className="text-white/60 text-sm font-inter">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-gold-400 text-sm"></i>
                <span className="text-white/60 text-sm font-inter">info@jaysawariyaseth.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-inter">© 2024 Jay Sawariya Seth Real Estate. All rights reserved.</p>
          <p className="text-white/40 text-sm font-inter italic">"Sapno ka Ghar, Ab Hoga Aapka"</p>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <CategoriesSection />
      <FeaturedSection />
      <BuySection />
      <SellSection />
      <RentSection />
      <AboutSection />
      <LocationSection />
      <ContactSection />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>
    </div>
  );
}
