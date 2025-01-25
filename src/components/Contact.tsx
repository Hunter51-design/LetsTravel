import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-emerald-800">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-2 border rounded focus:ring-emerald-500 focus:border-emerald-500"
                rows={4}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg
                       hover:bg-emerald-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-emerald-800">Get in Touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPinIcon className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-gray-600">
                  Kerala Tourism Office<br />
                  Park View<br />
                  Thiruvananthapuram, Kerala<br />
                  India - 695033
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-gray-600">+91 471 2321132</p>
              </div>
            </div>

            <div className="flex items-center">
              <MailIcon className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-gray-600">info@keralatourism.org</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;