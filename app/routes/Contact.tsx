import { useState } from 'react';
import { motion } from 'framer-motion';
import {
 Mail,
 Phone,
 MapPin,
 Instagram,
 MessageCircle,
 Send,
 Clock,
 CheckCircle,
 ArrowRight,
 Flame
} from 'lucide-react';
import '../styles/Contact.css';

const fadeInUp = {
 initial: { opacity: 0, y: 40 },
 animate: { opacity: 1, y: 0 },
 transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
 animate: {
  transition: {
   staggerChildren: 0.1
  }
 }
};

const contactMethods = [
 {
  icon: MessageCircle,
  title: 'WhatsApp',
  description: 'Respuesta inmediata',
  value: '+57 323 523 7076',
  link: 'https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20información.',
  color: '#25D366'
 },
 {
  icon: Instagram,
  title: 'Instagram',
  description: '@tyrlabs',
  value: 'Síguenos',
  link: 'https://instagram.com/tyrlabs',
  color: '#E4405F'
 },
 {
  icon: Mail,
  title: 'Email',
  description: 'Para consultas formales',
  value: 'tyrlabs.co@gmail.com',
  link: 'mailto:tyrlabs.co@gmail.com',
  color: '#FF3D00'
 }
];

const faqs = [
 {
  question: '¿Cuál es el tiempo de respuesta?',
  answer: 'Por WhatsApp respondemos en menos de 2 horas en horario laboral. Por email, máximo 24 horas.'
 },
 {
  question: '¿Hacen envíos a todo Colombia?',
  answer: 'Sí, enviamos suplementos a todo el país. Envío gratis en Pereira y el Eje Cafetero.'
 },
 {
  question: '¿Puedo agendar una asesoría presencial?',
  answer: 'Claro, si estás en Pereira podemos coordinar una reunión. Escríbenos por WhatsApp.'
 }
];

export default function Contact() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
 });
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value
  });
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Construir mensaje de WhatsApp
  const message = `*Nuevo mensaje de contacto*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.phone}%0A*Asunto:* ${formData.subject}%0A%0A*Mensaje:*%0A${formData.message}`;

  // Abrir WhatsApp con el mensaje
  window.open(`https://wa.me/+573235237076?text=${message}`, '_blank');

  setIsSubmitted(true);

  // Reset después de 3 segundos
  setTimeout(() => {
   setIsSubmitted(false);
   setFormData({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
   });
  }, 3000);
 };

 return (
  <main className="contact">
   {/* Hero Section */}
   <section className="contact-hero">
    <div className="contact-hero__background">
     <div className="contact-hero__gradient" />
     <div className="contact-hero__grid" />
     <div className="contact-hero__orb contact-hero__orb--1" />
     <div className="contact-hero__orb contact-hero__orb--2" />
    </div>

    <div className="contact-hero__container">
     <motion.div
      className="contact-hero__content"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
     >
      <motion.span className="contact-hero__label" variants={fadeInUp}>
       Contacto
      </motion.span>

      <motion.h1 className="contact-hero__title" variants={fadeInUp}>
       Hablemos de tu{' '}
       <span className="contact-hero__title-highlight">progreso</span>
      </motion.h1>

      <motion.p className="contact-hero__subtitle" variants={fadeInUp}>
       Estamos listos para ayudarte a alcanzar tus objetivos.
       Escríbenos y responderemos lo antes posible.
      </motion.p>
     </motion.div>
    </div>
   </section>

   {/* Contact Methods */}
   <section className="contact-methods section">
    <div className="container">
     <div className="contact-methods__grid">
      {contactMethods.map((method, index) => (
       <motion.a
        key={index}
        href={method.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-method"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
       >
        <div
         className="contact-method__icon"
         style={{ '--method-color': method.color } as React.CSSProperties}
        >
         <method.icon size={28} />
        </div>
        <div className="contact-method__content">
         <h3 className="contact-method__title">{method.title}</h3>
         <p className="contact-method__description">{method.description}</p>
         <span className="contact-method__value">{method.value}</span>
        </div>
        <ArrowRight size={20} className="contact-method__arrow" />
       </motion.a>
      ))}
     </div>
    </div>
   </section>

   {/* Main Contact Section */}
   {/* form */}
   <section className="contact-main section">
    <div className="container">
     <div
     // className="contact-main__grid"
     >
      {/* <motion.div
       className="contact-form-wrapper"
       initial={{ opacity: 0, x: -40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <div className="contact-form__header">
        <h2 className="contact-form__title">
         Envíanos un{' '}
         <span className="text-gradient">mensaje</span>
        </h2>
        <p className="contact-form__description">
         Completa el formulario y te contactaremos por WhatsApp.
        </p>
       </div>

       <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
         <div className="contact-form__group">
          <label htmlFor="name">Nombre completo</label>
          <input
           type="text"
           id="name"
           name="name"
           value={formData.name}
           onChange={handleChange}
           placeholder="Tu nombre"
           required
          />
         </div>
         <div className="contact-form__group">
          <label htmlFor="email">Email</label>
          <input
           type="email"
           id="email"
           name="email"
           value={formData.email}
           onChange={handleChange}
           placeholder="tu@email.com"
           required
          />
         </div>
        </div>

        <div className="contact-form__row">
         <div className="contact-form__group">
          <label htmlFor="phone">Teléfono / WhatsApp</label>
          <input
           type="tel"
           id="phone"
           name="phone"
           value={formData.phone}
           onChange={handleChange}
           placeholder="+57 300 000 0000"
           required
          />
         </div>
         <div className="contact-form__group">
          <label htmlFor="subject">Asunto</label>
          <select
           id="subject"
           name="subject"
           value={formData.subject}
           onChange={handleChange}
           required
          >
           <option value="">Selecciona una opción</option>
           <option value="Entrenamiento">Entrenamiento personalizado</option>
           <option value="Seguimiento">Seguimiento y datos</option>
           <option value="Suplementos">Suplementos</option>
           <option value="Otro">Otro</option>
          </select>
         </div>
        </div>

        <div className="contact-form__group">
         <label htmlFor="message">Mensaje</label>
         <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tus objetivos, preguntas o cómo podemos ayudarte..."
          rows={5}
          required
         />
        </div>

        <motion.button
         type="submit"
         className={`contact-form__submit ${isSubmitted ? 'contact-form__submit--success' : ''}`}
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
         disabled={isSubmitted}
        >
         {isSubmitted ? (
          <>
           <CheckCircle size={20} />
           ¡Mensaje enviado!
          </>
         ) : (
          <>
           <Send size={20} />
           Enviar mensaje
          </>
         )}
        </motion.button>
       </form>
      </motion.div> */}

      {/* Info Side */}
      <motion.div
       className="contact-info"
       initial={{ opacity: 0, x: 40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       {/* Location Card */}
       <div className="contact-info__card">
        <div className="contact-info__card-header">
         <MapPin size={24} />
         <h3>Ubicación</h3>
        </div>
        <p className="contact-info__card-text">
         <strong>Pereira, Risaralda</strong><br />
         Colombia 🇨🇴<br /><br />
         Operamos en todo el Eje Cafetero y enviamos suplementos a nivel nacional.
        </p>
       </div>

       {/* Hours Card */}
       <div className="contact-info__card">
        <div className="contact-info__card-header">
         <Clock size={24} />
         <h3>Horario de atención</h3>
        </div>
        <div className="contact-info__schedule">
         <div className="contact-info__schedule-row">
          <span>Lunes - Viernes</span>
          <span>8:00 AM - 6:00 PM</span>
         </div>
         <div className="contact-info__schedule-row">
          <span>Sábados</span>
          <span>9:00 AM - 2:00 PM</span>
         </div>
         <div className="contact-info__schedule-row contact-info__schedule-row--closed">
          <span>Domingos</span>
          <span>Cerrado</span>
         </div>
        </div>
       </div>

       {/* Quick Contact */}
       <div className="contact-info__quick">
        <Flame size={24} className="contact-info__quick-icon" />
        <p>¿Necesitas respuesta inmediata?</p>
        <motion.a
         href="https://wa.me/+573235237076?text=Hola,%20necesito%20información%20rápida."
         target="_blank"
         rel="noopener noreferrer"
         className="contact-info__quick-btn"
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
        >
         <MessageCircle size={18} />
         WhatsApp directo
        </motion.a>
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* FAQ Mini Section */}
   <section className="contact-faq section">
    <div className="container">
     <motion.div
      className="contact-faq__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <h2 className="contact-faq__title">
       Preguntas{' '}
       <span className="text-gradient">frecuentes</span>
      </h2>
     </motion.div>

     <div className="contact-faq__grid">
      {faqs.map((faq, index) => (
       <motion.div
        key={index}
        className="contact-faq__item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
       >
        <h3>{faq.question}</h3>
        <p>{faq.answer}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Map / Final CTA */}
   <section className="contact-cta section">
    <div className="contact-cta__glow" />
    <div className="container">
     <motion.div
      className="contact-cta__content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <div className="contact-cta__badge">
       <MapPin size={18} />
       Pereira, Colombia
      </div>
      <h2 className="contact-cta__title">
       Únete a la comunidad{' '}
       <span className="text-gradient">TYRLABS</span>
      </h2>
      <p className="contact-cta__text">
       Más de 500 atletas ya confían en nosotros.
       ¿Estás listo para transformar tu entrenamiento?
      </p>
      <div className="contact-cta__actions">
       <motion.a
        href="https://wa.me/+573235237076?text=Hola,%20quiero%20unirme%20a%20TYRLABS."
        target="_blank"
        rel="noopener noreferrer"
        className="contact-cta__btn contact-cta__btn--primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Comenzar ahora
        <ArrowRight size={18} />
       </motion.a>
       <motion.a
        href="https://instagram.com/tyrlabs"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-cta__btn contact-cta__btn--secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        <Instagram size={18} />
        @tyrlabs
       </motion.a>
      </div>
     </motion.div>
    </div>
   </section>
  </main>
 );
}