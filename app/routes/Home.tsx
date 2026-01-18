import { motion } from 'framer-motion';
import {
 ArrowRight,
 Activity,
 BarChart3,
 Pill,
 Target,
 Zap,
 Users,
 TrendingUp
} from 'lucide-react';
import '../styles/Home.css';

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

const services = [
 {
  icon: Activity,
  title: 'Entrenamiento',
  description: 'Programas personalizados diseñados para maximizar tu potencial físico con metodologías basadas en ciencia.',
  color: '#FF3D00'
 },
 {
  icon: BarChart3,
  title: 'Seguimiento & Datos',
  description: 'Monitorea tu progreso con métricas precisas. Visualiza tu evolución y toma decisiones informadas.',
  color: '#FF6B35'
 },
 {
  icon: Pill,
  title: 'Suplementos',
  description: 'Creatina, pre-entrenos y proteínas de alta calidad para potenciar tu rendimiento y recuperación.',
  color: '#FF3D00'
 }
];

const stats = [
 { value: '500+', label: 'Atletas Activos' },
 { value: '10K+', label: 'Entrenamientos' },
 { value: '98%', label: 'Satisfacción' },
 { value: '24/7', label: 'Soporte' }
];

const features = [
 {
  icon: Target,
  title: 'Objetivos Claros',
  description: 'Define metas específicas y alcanzables'
 },
 {
  icon: Zap,
  title: 'Rendimiento Óptimo',
  description: 'Maximiza cada sesión de entrenamiento'
 },
 {
  icon: Users,
  title: 'Comunidad',
  description: 'Conecta con otros atletas disciplinados'
 },
 {
  icon: TrendingUp,
  title: 'Progreso Visible',
  description: 'Evidencia tu evolución con datos reales'
 }
];

export default function Home() {
 return (
  <main className="home">
   {/* Hero Section */}
   <section className="hero">
    <div className="hero__background">
     <div className="hero__gradient" />
     <div className="hero__grid" />
     <div className="hero__glow" />
    </div>

    <div className="hero__container">
     <motion.div
      className="hero__content"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
     >
      <motion.div className="hero__badge" variants={fadeInUp}>
       <span className="hero__badge-dot" />
       El futuro del entrenamiento
      </motion.div>

      <motion.h1 className="hero__title" variants={fadeInUp}>
       Tu progreso,{' '}
       <span className="hero__title-highlight">medible</span>
       <br />
       y <span className="hero__title-highlight">significativo</span>
      </motion.h1>

      <motion.p className="hero__subtitle" variants={fadeInUp}>
       Tecnología, datos y comunidad para transformar tu entrenamiento
       físico en un proceso sostenible y gestionable.
      </motion.p>

      <motion.div className="hero__actions" variants={fadeInUp}>
       <motion.a
        href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS."
        className="hero__btn hero__btn--primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target='_blank'
       >
        Comenzar Ahora
        <ArrowRight size={18} />
       </motion.a>
       <motion.a
        href="#services"
        className="hero__btn hero__btn--secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Explorar
       </motion.a>
      </motion.div>
     </motion.div>

     <motion.div
      className="hero__visual"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
     >
      <div className="hero__visual-card">
       <div className="hero__visual-header">
        <span className="hero__visual-indicator" />
        Rendimiento en Tiempo Real
       </div>
       <div className="hero__visual-chart">
        <svg viewBox="0 0 300 100" className="hero__chart-svg">
         <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" stopColor="#FF3D00" stopOpacity="0.3" />
           <stop offset="100%" stopColor="#FF3D00" stopOpacity="0" />
          </linearGradient>
         </defs>
         <path
          d="M0,80 Q50,70 80,50 T160,30 T240,45 T300,20"
          fill="none"
          stroke="#FF3D00"
          strokeWidth="2"
          className="hero__chart-line"
         />
         <path
          d="M0,80 Q50,70 80,50 T160,30 T240,45 T300,20 V100 H0 Z"
          fill="url(#chartGradient)"
          className="hero__chart-area"
         />
        </svg>
       </div>
       <div className="hero__visual-stats">
        <div className="hero__visual-stat">
         <span className="hero__visual-stat-value">+27%</span>
         <span className="hero__visual-stat-label">Fuerza</span>
        </div>
        <div className="hero__visual-stat">
         <span className="hero__visual-stat-value">+18%</span>
         <span className="hero__visual-stat-label">Resistencia</span>
        </div>
        <div className="hero__visual-stat">
         <span className="hero__visual-stat-value">-12%</span>
         <span className="hero__visual-stat-label">Grasa</span>
        </div>
       </div>
      </div>
     </motion.div>
    </div>

    <motion.div
     className="hero__stats"
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6, delay: 0.6 }}
    >
     <div className="hero__stats-container">
      {stats.map((stat, index) => (
       <div key={index} className="hero__stat">
        <span className="hero__stat-value">{stat.value}</span>
        <span className="hero__stat-label">{stat.label}</span>
       </div>
      ))}
     </div>
    </motion.div>
   </section>

   {/* Services Section */}
   <section id="services" className="services section">
    <div className="container">
     <motion.div
      className="services__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
     >
      <span className="services__label">Nuestros Servicios</span>
      <h2 className="services__title">
       Todo lo que necesitas para{' '}
       <span className="text-gradient">alcanzar tu máximo</span>
      </h2>
      <p className="services__description">
       Soluciones integrales que combinan tecnología, datos y comunidad
       para un entrenamiento efectivo y sostenible.
      </p>
     </motion.div>

     <div className="services__grid">
      {services.map((service, index) => (
       <motion.div
        key={index}
        className="service-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
       >
        <div
         className="service-card__icon"
         style={{ '--icon-color': service.color } as React.CSSProperties}
        >
         <service.icon size={28} />
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.description}</p>
        <a href="/productos#catalog" className="service-card__link">
         Saber más
         <ArrowRight size={16} />
        </a>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Vision Section */}
   <section className="vision section">
    <div className="vision__background">
     <div className="vision__line vision__line--1" />
     <div className="vision__line vision__line--2" />
     <div className="vision__line vision__line--3" />
    </div>

    <div className="container">
     <div className="vision__grid">
      <motion.div
       className="vision__content"
       initial={{ opacity: 0, x: -40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <span className="vision__label">Nuestra Visión</span>
       <h2 className="vision__title">
        Entrenamiento disciplinado,{' '}
        <span className="text-gradient">resultados extraordinarios</span>
       </h2>
       <p className="vision__text">
        Convertir el entrenamiento físico disciplinado en un proceso medible,
        visible y compartido, apoyado en tecnología, datos y comunidad, para que
        el progreso físico sea sostenible, gestionable y significativo para quienes
        entrenan con constancia a lo largo del tiempo.
       </p>

       <div className="vision__features">
        {features.map((feature, index) => (
         <motion.div
          key={index}
          className="vision__feature"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
         >
          <div className="vision__feature-icon">
           <feature.icon size={20} />
          </div>
          <div className="vision__feature-content">
           <h4>{feature.title}</h4>
           <p>{feature.description}</p>
          </div>
         </motion.div>
        ))}
       </div>
      </motion.div>

      <motion.div
       className="vision__visual"
       initial={{ opacity: 0, x: 40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <div className="vision__card vision__card--main">
        <div className="vision__card-header">
         <span className="vision__card-badge">Misión</span>
        </div>
        <p className="vision__card-text">
         Desarrollar soluciones integrales para el entrenamiento disciplinado,
         que articulen tecnología, datos y comunidad, permitiendo a las personas
         gestionar, comprender y evidenciar su rendimiento físico con mayor control,
         claridad y proyección en el tiempo.
        </p>
       </div>
       <div className="vision__decorative">
        <div className="vision__decorative-circle" />
        <div className="vision__decorative-lines" />
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="cta section">
    <div className="cta__glow" />
    <div className="container">
     <motion.div
      className="cta__content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <h2 className="cta__title">
       ¿Listo para transformar tu{' '}
       <span className="text-gradient">entrenamiento</span>?
      </h2>
      <p className="cta__text">
       Únete a nuestra comunidad y comienza a ver resultados reales respaldados por datos.
      </p>
      <div className="cta__actions">
       <motion.a
        href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS."
        className="cta__btn cta__btn--primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Contactar por WhatsApp
        <ArrowRight size={18} />
       </motion.a>
       <motion.a
        href="https://www.instagram.com/tyrlabs_co?igsh=dTFmbW80M3FqeDV2"
        target="_blank"
        rel="noopener noreferrer"
        className="cta__btn cta__btn--secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Síguenos en Instagram
       </motion.a>
      </div>
     </motion.div>
    </div>
   </section>
  </main>
 );
}
