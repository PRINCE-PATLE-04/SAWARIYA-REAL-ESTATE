import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Home / About Us"
        title="About Jay Sawariya Seth"
        subtitle="Your trusted partner in real estate with over a decade of experience in Ahmedabad's property market."
      />

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://kommodo.ai/i/l7cGbNM2eUP5fKnJP2du" alt="Jay Sawariya Seth Real Estate" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <p className="font-playfair text-3xl font-bold text-gold-500">10+</p>
                <p className="text-gray-600 text-sm font-inter">Years of Trusted Service</p>
              </div>
            </div>

            <div>
              <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-4">Trusted Since Day One</h2>
              <div className="w-20 h-1 gradient-gold rounded mb-6"></div>
              
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Jay Sawariya Seth Real Estate helps buyers, sellers, and tenants find the right property with trusted guidance and transparent service. With over a decade of experience in Ahmedabad's real estate market, we have built a reputation for integrity, expertise, and client-first approach.
              </p>
              <p className="text-gray-600 font-inter leading-relaxed mb-6">
                Our mission is simple — to make your property dreams come true. Whether you're looking to buy your first home, sell a valued asset, or find the perfect rental, we are here to guide you every step of the way.
              </p>
              <p className="text-gray-600 font-inter leading-relaxed">
                We believe in building long-term relationships with our clients based on trust, transparency, and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy-900 mb-4">What Sets Us Apart</h2>
            <div className="section-divider mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fas fa-heart', title: '100% Client Satisfaction', desc: 'Every client matters to us. We go above and beyond to ensure your complete satisfaction with every deal.' },
              { icon: 'fas fa-handshake', title: 'Trust & Transparency', desc: 'We believe in honest dealings. No hidden charges, no surprises — just clear and transparent transactions.' },
              { icon: 'fas fa-user-tie', title: 'Expert Guidance', desc: 'Our team of experienced professionals provides expert advice to help you make informed decisions.' },
              { icon: 'fas fa-clock', title: 'On-Time Support', desc: 'We value your time. Our team is always available to assist you promptly throughout your property journey.' },
              { icon: 'fas fa-shield-alt', title: 'Safe & Secure Deal', desc: 'Every transaction is legally verified and secure. Your investment is safe with us.' },
              { icon: 'fas fa-map-marker-alt', title: 'Prime Locations', desc: 'We specialize in properties located in the most sought-after areas of Ahmedabad and surrounding regions.' },
            ].map((value, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                  <i className={`${value.icon} text-navy-900 text-xl`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Properties Sold' },
              { number: '1000+', label: 'Happy Clients' },
              { number: '10+', label: 'Years Experience' },
              { number: '50+', label: 'Locations Covered' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-gold-400 font-playfair text-4xl md:text-5xl font-bold">{stat.number}</p>
                <p className="text-white/60 font-inter text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-600 font-inter mb-8">Let us help you find, sell, or rent the perfect property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
            <Link to="/buy" className="btn-outline-gold px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
              <i className="fas fa-home"></i> Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
