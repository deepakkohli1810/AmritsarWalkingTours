import React from 'react';
import { Link } from 'react-router-dom';
import { Home, PlusCircle, ArrowRight, Info, HelpCircle, Mail, RefreshCw, Lock, Instagram, Facebook, Youtube } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkblue text-gray-100 font-DMSans py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl md:text-5xl font-semibold font-fredoka text-white tracking-tight">AWT</h2>
          </div>
          <p className="text-lg md:text-lg font-light font-DMSans text-gray-300">Amritsar Walking Tours</p>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-12 text-start md:text-left">
          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold font-fredoka text-white mb-4 tracking-wide">Important Links</h3>
            <ul className="space-y-3 text-3xl font-extralight">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <Home className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <PlusCircle className="w-5 h-5" />
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/suggested-tours" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <ArrowRight className="w-5 h-5" />
                  Suggested Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <Info className="w-5 h-5" />
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold font-fredoka text-white mb-4 tracking-wide">Follow Us</h3>
            <ul className="space-y-3 text-3xl font-extralight">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <FaInstagram className="w-6 h-6" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <FaFacebook className="w-6 h-6" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <FaYoutube className="w-6 h-6" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold font-fredoka text-white mb-4 tracking-wide">Support</h3>
            <ul className="space-y-3 text-3xl font-extralight">
              <li>
                <Link to="/faqs" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <HelpCircle className="w-5 h-5" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <Mail className="w-5 h-5" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <RefreshCw className="w-5 h-5" />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="flex items-center gap-2 hover:text-white text-gray-300 transition duration-200">
                  <Lock className="w-5 h-5" />
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Amritsar Walking Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
