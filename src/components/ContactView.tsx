'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export function ContactView() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex-1 bg-gray-50 text-slate-900">
      {/* Hero Header */}
      <div className="bg-[#00051a] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IceLink Global</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have questions about our products, sourcing services, or want to explore a partnership? Our dedicated team is ready to assist you worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards (Left Column) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col gap-8 h-full">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Contact Info</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Headquarters</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">Accra, Ghana<br/>Serving the African Continent globally.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Phone & WhatsApp</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">+82 10 4487 9685<br/>+233 54 968 5770</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Email Address</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">Icelinkglobal@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm">Business Hours</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <MessageSquare className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <h4 className="text-sm font-bold text-blue-900">Live Chat Available</h4>
                    <p className="text-xs text-blue-700">Chat with our sourcing experts online.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Send size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-sm">Thank you for reaching out. A representative will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm transition" 
                        placeholder="John" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm transition" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm transition" 
                        placeholder="john@example.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm transition" 
                        placeholder="+233 50 123 4567" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Subject</label>
                    <div className="relative">
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm transition appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Sourcing Request Update</option>
                        <option>Partnership Opportunities</option>
                        <option>Feedback</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={6} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:bg-white outline-none text-sm resize-none transition" 
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-[#00051a] hover:bg-blue-600 text-white font-bold text-sm transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
