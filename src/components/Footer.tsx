import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-600">TM HealthX Kenya</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              A youth-led, community-powered health organization transforming health outcomes across Kenya through mobilization, education, empowerment, and transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-600 hover:text-green-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-700">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-700">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-600 hover:text-green-700">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-green-600">About</Link></li>
              <li><Link to="/programs" className="text-gray-600 hover:text-green-600">Programs</Link></li>
              <li><Link to="/virtual-clinic" className="text-gray-600 hover:text-green-600">Virtual Clinic</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-green-600">Events</Link></li>
              <li><Link to="/join" className="text-gray-600 hover:text-green-600">Join Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">Kisumu, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">healthxkenya@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-gray-600">0740814465</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Connected</h3>
              <p className="text-gray-600">Get updates on our latest health initiatives and community events.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 TM HealthX Kenya. All rights reserved. | Designed with integrity by TM HealthX Creatives
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;