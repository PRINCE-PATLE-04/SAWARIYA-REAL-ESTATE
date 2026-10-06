import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', interest: 'buy', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you shortly.');
    setFormData({ name: '', phone: '', interest: 'buy', message: '' });
  };

  return (
    <>
      <PageHeader
        breadcrumb="Home / Contact Us"
        title="Let's Find Your Next Property"
        subtitle="Have a question or ready to start your property journey? Reach out to us today."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-2">Send Enquiry</h3>
              <p className="text-gray-500 text-sm font-inter mb-6">Fill in the form and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Interested In *</label>
                  <select value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm text-gray-600 bg-white">
                    <option value="buy">Buy Property</option>
                    <option value="sell">Sell Property</option>
                    <option value="rent">Rent Property</option>
                  </select>
                </div>
                <div>
                  <label className="text-navy-900 text-xs font-semibold font-inter mb-1 block">Your Message</label>
                  <textarea placeholder="Tell us about your requirements..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm resize-none bg-white"></textarea>
                </div>
                <button type="submit" className="w-full btn-gold py-4 rounded-lg text-base font-semibold">
                  <i className="fas fa-paper-plane mr-2"></i> Send Enquiry
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-navy-900 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold">Our Office</p>
                    <p className="text-gray-600 text-sm font-inter">Garden Paradise, 2, Near Reliance Villa,<br/>Behind Divya Jyoti School Road,<br/>Ahmedabad, Gujarat 380018, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-navy-900 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold">Call Us</p>
                    <p className="text-gray-600 text-sm font-inter">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-navy-900 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold">Email Us</p>
                    <p className="text-gray-600 text-sm font-inter">info@jaysawariyaseth.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-navy-900 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold">Working Hours</p>
                    <p className="text-gray-600 text-sm font-inter">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm font-inter">Sunday: By Appointment</p>
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

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-900 mb-4">Find Us on Map</h2>
            <div className="section-divider mb-6"></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <i className="fas fa-map-marked-alt text-6xl text-gold-500 mb-4"></i>
              <h4 className="font-playfair text-xl font-bold text-navy-900 mb-2">Our Office Location</h4>
              <p className="text-gray-600 text-sm font-inter">Garden Paradise, 2, Near Reliance Villa,<br/>Behind Divya Jyoti School Road,<br/>Ahmedabad, Gujarat 380018</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-gold px-6 py-2.5 rounded-full text-sm inline-flex items-center gap-2 mt-4">
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
