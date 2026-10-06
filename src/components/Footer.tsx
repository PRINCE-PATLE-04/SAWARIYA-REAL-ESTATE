import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">Home</Link></li>
              <li><Link to="/buy" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">Buy Property</Link></li>
              <li><Link to="/sell" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">Sell Property</Link></li>
              <li><Link to="/rent" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">Rent Property</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">About Us</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Property Buying', 'Property Selling', 'Property Renting', 'Legal Assistance', 'Property Valuation', 'Investment Advice'].map((type, i) => (
                <li key={i}>
                  <Link to="/contact" className="text-white/60 hover:text-gold-400 text-sm transition-colors font-inter">{type}</Link>
                </li>
              ))}
            </ul>
          </div>

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

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-inter">© 2024 Jay Sawariya Seth Real Estate. All rights reserved.</p>
          <p className="text-white/40 text-sm font-inter italic">"Sapno ka Ghar, Ab Hoga Aapka"</p>
        </div>
      </div>
    </footer>
  );
}
