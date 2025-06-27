import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-darkblue text-gray-100 font-DMSans py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold font-fredoka text-white mb-2 tracking-tight">AWT</h2>
          <p className="text-lg md:text-lg font-light  font-DMSans text-gray-300">Amritsar Walking Tours</p>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 text-start md:text-left">
          {/* Important Links */}
          <div>
            
            <ul className="space-y-3 text-3xl font-extralight">
              <li><a href="/" className="hover:text-white text-gray-300 transition duration-200">Home</a></li>
              <li><a href="/tours" className="hover:text-white text-gray-300 transition duration-200">Tours</a></li>
              <li><a href="/suggested-tours" className="hover:text-white text-gray-300 transition duration-200">Suggested Tours</a></li>
              <li><a href="/about" className="hover:text-white text-gray-300 transition duration-200">About</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <ul className="space-y-3 text-3xl font-extralight">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300 transition duration-200">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300 transition duration-200">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300 transition duration-200">YouTube</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <ul className="space-y-3 text-3xl font-extralight">
              <li><a href="/faqs" className="hover:text-white text-gray-300 transition duration-200">FAQs</a></li>
              <li><a href="/contact" className="hover:text-white text-gray-300 transition duration-200">Contact</a></li>
              <li><a href="/refund-policy" className="hover:text-white text-gray-300 transition duration-200">Refund Policy</a></li>
              <li><a href="/privacy" className="hover:text-white text-gray-300 transition duration-200">Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-4">
          <p className="text-center text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Amritsar Walking Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
