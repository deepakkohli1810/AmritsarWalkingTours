import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Our Tours ', 'Gallery', 'About '];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#332D56] text-white dark:bg-gray-900  dark:text-white rounded-[4rem] shadow-lg mx-4 mt-4 px-6 py-3 flex items-center justify-between sticky top-0 z-50"
    >
      <div className="text-2xl lg:text-3xl md:text-3xl  font-fredoka font-bold  text-[#fff]">AWT </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer font-thin  font-sans  text-s hover:text-[#71C0BB] text- transition duration-300"
          >
            {item}
          </span>
        ))}
      </div>
      
      <button className='bg-[#4E6688] hidden md:flex px-3 py-2 rounded-3xl text-white '>Book Now</button>

      {/* Mobile Menu Button */}
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
      className="absolute top-20 right-4 left-4 width-full bg-[#332D56] dark:bg-gray-800 rounded-xl shadow-md px-4 py-3 flex flex-col gap-1 md:hidden"
    >

        <p className='mb-6 max-w-lg'>We organise trips for you in Amritsar.</p>
      {navItems.map((item) => (
        <span
          key={item}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer hover:text-[#71C0BB] font-semibold text-4xl tracking-tighter transition duration-300"
        >
          {item}
        </span>
      ))}
      <p className='text-center mt-10'>Make some memories with us. </p>
      <button className='bg-[#4E6688]  md:flex px-3 py-2 rounded-3xl text-white '>Get Started</button>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
}
