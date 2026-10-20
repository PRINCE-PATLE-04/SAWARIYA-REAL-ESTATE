import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', propertyType: '', location: '', expectedPrice: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon regarding your property.');
    setFormData({ name: '', phone: '', propertyType: '', location: '', expectedPrice: '', message: '' });
  };

  return (
    <>
      <PageHeader
        breadcrumb="Home / Sell Property"
        title="Sell Your Property with Confidence"
        subtitle="Get the best value for your property. We connect you with the right buyers at the right price."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Highlights */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-6">Why Sell With Us?</h3>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: 'fas fa-bullseye', title: 'Right Property', desc: 'We market your property to the right audience with professional listings and photography.' },
                  { icon: 'fas fa-users', title: 'Right People', desc: 'Connect with genuine, verified, and serious buyers who are ready to invest.' },
                  { icon: 'fas fa-indian-rupee-sign', title: 'Right Price', desc: 'Get the best market value for your property with our expert valuation.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-navy-900`}></i>
                    </div>
                    <div>
                      <h4 className="text-navy-900 font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-navy-900 rounded-xl p-8">
                <h4 className="text-gold-400 font-semibold text-lg mb-4">Our Selling Benefits</h4>
                <ul className="space-y-3">
                  {[
                    'Free property valuation',
                    'Professional photography & listing',
                    'Wide network of verified buyers',
                    'Complete legal assistance',
                    'Fast & hassle-free process',
                    'No hidden charges',
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                      <i className="fas fa-check-circle text-gold-400"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-2">Submit Your Property</h3>
              <p className="text-gray-500 text-sm font-inter mb-6">Fill in the details below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Your Name *</label>
                  <input type="text" placeholder="Enter your full name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white" />
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Phone Number *</label>
                  <input type="tel" placeholder="Enter your phone number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white" />
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Property Type *</label>
                  <select required value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm text-gray-600 bg-white">
                    <option value="">Select Property Type</option>
                    <option>Flat & Apartment</option>
                    <option>Villa & Bungalow</option>
                    <option>Shop & Showroom</option>
                    <option>Office & Godown</option>
                    <option>Land & Plot</option>
                  </select>
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Property Location *</label>
                  <input type="text" placeholder="e.g., Bopal, Ahmedabad" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white" />
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Expected Price</label>
                  <input type="text" placeholder="e.g., ₹1.5 Cr" value={formData.expectedPrice} onChange={e => setFormData({...formData, expectedPrice: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white" />
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Additional Message</label>
                  <textarea placeholder="Any additional details about your property..." rows={3} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm resize-none bg-white"></textarea>
                </div>
                <button type="submit" className="w-full btn-gold py-4 rounded-lg text-base mt-2">
                  <i className="fas fa-paper-plane mr-2"></i> Submit Property
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
