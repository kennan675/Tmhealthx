import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo & Mission */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://i.ibb.co/whQnJf8Y/LOOOGO.png"
                  alt="TM HealthX Kenya Logo"
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold gradient-text">TM HealthX Kenya</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                A youth-led, community-powered health organization transforming health outcomes across Kenya through mobilization, education, empowerment, and transformation.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-kenya-green-light hover:bg-kenya-green/20 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Programs', path: '/programs' },
                  { name: 'Virtual Clinic', path: '/virtual-clinic' },
                  { name: 'Events', path: '/events' },
                  { name: 'Join Us', path: '/join' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-kenya-green-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-kenya-green/20 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-kenya-green-light" />
                  </div>
                  <span className="text-gray-400">Kisumu, Kenya</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-kenya-green/20 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-kenya-green-light" />
                  </div>
                  <span className="text-gray-400">healthxkenya@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-kenya-green/20 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-kenya-green-light" />
                  </div>
                  <span className="text-gray-400">0740814465</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Stay Connected</h3>
                <p className="text-gray-400">Get updates on our latest health initiatives and community events.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-l-full text-white placeholder-gray-500 focus:outline-none focus:border-kenya-green-light"
                />
                <button className="bg-kenya-green hover:bg-kenya-green-light text-white px-6 py-3 rounded-r-full font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 flex items-center justify-center gap-1">
              © 2025 TM HealthX Kenya. All rights reserved. | Made with
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              by TM HealthX Creatives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;