import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'OUR TOURS', path: '/OurTours' },
    { label: 'GALLERY', path: '/Gallery' },
    { label: 'ABOUT US', path: '/AboutUs' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#332D56] text-white  rounded-[4rem] shadow-lg mx-4 mt-4 px-6 py-2 flex items-center justify-between sticky top-0 z-50"
    >
      {/* Logo */}
      <div className="text-2xl lg:text-3xl font-fredoka font-bold text-white">
        AWT
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="cursor-pointer font-thin text-sm hover:text-[#71C0BB] transition duration-300"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/BookNow"
          className="bg-[#4E6688] text-sm px-4 py-1.5 rounded-3xl text-white hover:bg-[#3c5373] transition"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-20 left-4 right-4 bg-[#332D56]  rounded-xl shadow-md px-4 py-4 flex flex-col gap-2 z-50 md:hidden"
          >
            <p className="text-white mb-4">We organise trips for you in Amritsar.</p>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-thin tracking-tight hover:text-[#71C0BB] transition duration-300"
              >
                {item.label}
              </Link>
            ))}
            <p className="text-white text-center mt-8 text-sm">Make some memories with us.</p>

            <Link
              to="/BookNow"
              onClick={() => setIsOpen(false)}
              className="bg-[#4E6688] mt-0 px-4 py-2 rounded-3xl text-white text-center hover:bg-[#3c5373] transition"
            >
              Book Now
            </Link>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
