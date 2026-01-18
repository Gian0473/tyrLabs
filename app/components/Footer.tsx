import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Flame, Instagram, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import '../styles/Footer.css'

const footerLinks = {
 empresa: [
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Productos', path: '/productos' },
  { name: 'Contacto', path: '/contacto' },
 ],
 servicios: [
  { name: 'Entrenamiento', path: '/productos' },
  { name: 'Seguimiento', path: '/productos' },
  { name: 'Suplementos', path: '/productos' },
 ],
};

const socialLinks = [
 {
  name: 'Instagram',
  icon: Instagram,
  url: 'https://www.instagram.com/tyrlabs_co?igsh=dTFmbW80M3FqeDV2'
 },
 {
  name: 'WhatsApp',
  icon: MessageCircle,
  url: 'https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS.'
 },
 {
  name: 'Email',
  icon: Mail,
  url: 'mailto:tyrlabs.co@gmail.com'
 },
];

export default function Footer() {
 return (
  <footer className="footer">
   <div className="footer__glow" />

   <div className="footer__container">
    <div className="footer__top">
     <div className="footer__brand">
      <Link to="/" className="footer__logo">
       <img
        src="/tyrlabs.svg"
        alt="TYRLABS"
        className="footer__logo-img "
       />
      </Link>
      <p className="footer__tagline">
       Transformando el entrenamiento físico en un proceso medible, visible y compartido.
      </p>
      <div className="footer__socials">
       {socialLinks.map((social) => (
        <motion.a
         key={social.name}
         href={social.url}
         target="_blank"
         rel="noopener noreferrer"
         className="footer__social-link"
         whileHover={{ scale: 1.1, y: -2 }}
         whileTap={{ scale: 0.95 }}
         aria-label={social.name}
        >
         <social.icon size={20} />
        </motion.a>
       ))}
      </div>
     </div>

     <div className="footer__links-grid">
      <div className="footer__links-column">
       <h4 className="footer__links-title">Empresa</h4>
       <ul className="footer__links-list">
        {footerLinks.empresa.map((link) => (
         <li key={link.path}>
          <Link to={link.path} className="footer__link">
           {link.name}
           <ArrowUpRight size={14} />
          </Link>
         </li>
        ))}
       </ul>
      </div>

      <div className="footer__links-column">
       <h4 className="footer__links-title">Servicios</h4>
       <ul className="footer__links-list">
        {footerLinks.servicios.map((link) => (
         <li key={link.name}>
          <Link to={link.path} className="footer__link">
           {link.name}
           <ArrowUpRight size={14} />
          </Link>
         </li>
        ))}
       </ul>
      </div>

      <div className="footer__links-column">
       <h4 className="footer__links-title">Contacto</h4>
       <ul className="footer__links-list">
        <li>
         <a href="mailto:tyrlabs.co@gmail.com" className="footer__link">
          tyrlabs.co@gmail.com
         </a>
        </li>
        <li>
         <a href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS." className="footer__link">
          WhatsApp
          <ArrowUpRight size={14} />
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>

    <div className="footer__bottom">
     <p className="footer__copyright">
      © {new Date().getFullYear()} TYRLABS. Todos los derechos reservados.
     </p>
     <div className="footer__bottom-links">
      <Link to="/privacy">Privacidad</Link>
      <Link to="/terms">Términos</Link>
     </div>
    </div>
   </div>
  </footer>
 );
}
