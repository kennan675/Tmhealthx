import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Virtual Clinic', path: '/virtual-clinic' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://i.ibb.co/whQnJf8Y/LOOOGO.png"
              alt="TM HealthX Kenya Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">TM HealthX</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${location.pathname === link.path
                  ? 'text-kenya-green-light bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 bg-kenya-green hover:bg-kenya-green-light text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors glow-green"
              >
                Join Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass rounded-2xl overflow-hidden"
            >
              <div className="py-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-3 text-sm font-medium transition-colors ${location.pathname === link.path
                        ? 'text-kenya-green-light bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="px-4 pt-4">
                  <Link to="/join" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-kenya-green hover:bg-kenya-green-light text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;