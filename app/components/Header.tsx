import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';
import '../styles/Header.css';

const navLinks = [
 { name: 'Inicio', path: '/' },
 { name: 'Nosotros', path: '/nosotros' },
 { name: 'Productos', path: '/productos' },
 { name: 'Contacto', path: '/contacto' },
];

export default function Header() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const location = useLocation();

 useEffect(() => {
  const handleScroll = () => {
   setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
  setIsMobileMenuOpen(false);
 }, [location]);

 return (
  <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
   <div className="header__container">
    <Link to="/" className="header__logo w-5 h-5">
     <motion.img
      src="/tyrlabs.svg"
      alt="TYRLABS"
      className="header__logo-img"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
     />
    </Link>

    <nav className="header__nav">
     {navLinks.map((link, index) => (
      <motion.div
       key={link.path}
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1 }}
      >
       <Link
        to={link.path}
        className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''}`}
       >
        {link.name}
        {location.pathname === link.path && (
         <motion.span
          className="header__link-indicator"
          layoutId="activeIndicator"
         />
        )}
       </Link>
      </motion.div>
     ))}
    </nav>

    <motion.a
     href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS."
     target="_blank"
     rel="noopener noreferrer"
     className="header__cta"
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
    >
     Empezar
    </motion.a>

    <button
     className="header__mobile-toggle"
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     aria-label="Toggle menu"
    >
     {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
   </div>

   <AnimatePresence>
    {isMobileMenuOpen && (
     <motion.div
      className="header__mobile-menu"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
     >
      <nav className="header__mobile-nav">
       {navLinks.map((link, index) => (
        <motion.div
         key={link.path}
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: index * 0.1 }}
        >
         <Link
          to={link.path}
          className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
         >
          {link.name}
         </Link>
        </motion.div>
       ))}
       <motion.a
        href="https://wa.me/+57TUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="header__cta header__cta--mobile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
       >
        Empezar Ahora
       </motion.a>
      </nav>
     </motion.div>
    )}
   </AnimatePresence>
  </header>
 );
}
