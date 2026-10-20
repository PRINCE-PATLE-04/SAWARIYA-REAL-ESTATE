import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Rent', path: '/rent' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col">
            <span className="text-gold-400 font-playfair font-bold text-lg leading-tight">JAY SAWARIYA SETH</span>
            <span className="text-white text-xs font-inter tracking-widest uppercase">Real Estate</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors font-inter text-sm font-medium ${
                  isActive(link.path) 
                    ? 'text-gold-400' 
                    : 'text-white/80 hover:text-gold-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold px-6 py-2.5 rounded-full text-sm">
              Enquire Now
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white text-2xl">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-inter text-base font-medium py-2 transition-colors ${
                  isActive(link.path) ? 'text-gold-400' : 'text-white/80 hover:text-gold-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold block text-center px-6 py-3 rounded-full text-sm mt-4">
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
