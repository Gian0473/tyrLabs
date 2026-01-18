import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
 Dumbbell,
 BarChart3,
 Pill,
 ArrowRight,
 Check,
 Zap,
 Target,
 TrendingUp,
 Activity,
 Brain,
 Sparkles,
 Shield,
 Clock,
 Users,
 ChevronDown
} from 'lucide-react';
import '../styles/Products.css';

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

const categories = [
 { id: 'all', name: 'Todos', icon: Sparkles },
 { id: 'training', name: 'Entrenamiento', icon: Dumbbell },
 { id: 'data', name: 'Datos', icon: BarChart3 },
 { id: 'supplements', name: 'Suplementos', icon: Pill },
];

const products = [
 {
  id: 1,
  category: 'training',
  name: 'Plan de Entrenamiento Personalizado',
  description: 'Programa diseñado específicamente para tus objetivos, nivel y disponibilidad. Incluye progresión mensual y ajustes según tu evolución.',
  features: [
   'Evaluación inicial completa',
   'Rutinas semanales personalizadas',
   'Progresión mensual adaptativa',
   'Soporte por WhatsApp',
   'Videos explicativos de ejercicios'
  ],
  icon: Target,
  popular: true,
  cta: 'Comenzar Plan'
 },
 {
  id: 2,
  category: 'training',
  name: 'Seguimiento y Coaching',
  description: 'Acompañamiento continuo de tu entrenamiento con análisis de técnica, ajustes en tiempo real y motivación constante.',
  features: [
   'Check-ins semanales',
   'Análisis de videos de técnica',
   'Ajustes de rutina en tiempo real',
   'Llamadas de seguimiento',
   'Acceso a comunidad privada'
  ],
  icon: Users,
  popular: false,
  cta: 'Agendar Llamada'
 },
 {
  id: 3,
  category: 'training',
  name: 'Asesoría de Competición',
  description: 'Preparación especializada para competencias de powerlifting, fitness o bodybuilding con periodización específica.',
  features: [
   'Peak week programado',
   'Estrategia de competencia',
   'Manejo de peso corporal',
   'Preparación mental',
   'Acompañamiento en evento'
  ],
  icon: Zap,
  popular: false,
  cta: 'Consultar'
 },
 {
  id: 4,
  category: 'data',
  name: 'Dashboard de Rendimiento',
  description: 'Plataforma digital para visualizar tu progreso con métricas de fuerza, volumen, frecuencia y tendencias a lo largo del tiempo.',
  features: [
   'Gráficos de progresión',
   'Historial de entrenamientos',
   'Métricas de volumen e intensidad',
   'Comparativas mensuales',
   'Exportación de datos'
  ],
  icon: BarChart3,
  popular: true,
  cta: 'Ver Demo'
 },
 {
  id: 5,
  category: 'data',
  name: 'Análisis de Composición Corporal',
  description: 'Seguimiento detallado de tu composición corporal con mediciones periódicas y análisis de tendencias.',
  features: [
   'Mediciones antropométricas',
   'Seguimiento de peso y medidas',
   'Estimación de % de grasa',
   'Fotos de progreso organizadas',
   'Reportes mensuales'
  ],
  icon: Activity,
  popular: false,
  cta: 'Agendar Medición'
 },
 {
  id: 6,
  category: 'data',
  name: 'Planificación Nutricional con Datos',
  description: 'Plan alimenticio basado en tus métricas, objetivos y preferencias con seguimiento de macros y ajustes según progreso.',
  features: [
   'Cálculo de requerimientos',
   'Plan de macros personalizado',
   'Lista de alimentos sugeridos',
   'Ajustes según progreso',
   'Integración con apps de tracking'
  ],
  icon: Brain,
  popular: false,
  cta: 'Calcular Macros'
 },
 // SUPLEMENTOS CON IMÁGENES
 {
  id: 7,
  category: 'supplements',
  name: 'Creatina Platinum',
  description: 'Creatina micronizada de máxima pureza para resultados superiores en fuerza y rendimiento muscular.',
  features: [
   'Micronizada para mejor absorción',
   '5g por porción',
   'Sin aditivos ni rellenos',
   '80 porciones por envase',
   'La más vendida'
  ],
  image: '/creatina_platinum.jpg',
  popular: true,
  cta: 'Comprar Ahora',
  price: '$185.000'
 },
 {
  id: 8,
  category: 'supplements',
  name: 'Creatina Monohidratada',
  description: 'Creatina monohidratada clásica de alta pureza para aumentar fuerza y potencia en tus entrenamientos.',
  features: [
   '100% Monohidrato puro',
   '5g por porción',
   'Sin sabor añadido',
   '60 porciones por envase',
   'Certificado de calidad'
  ],
  image: '/creatina_monohydratada.jpg',
  popular: false,
  cta: 'Comprar Ahora',
  price: '$75.000'
 },
 {
  id: 9,
  category: 'supplements',
  name: 'Creatina CellTech',
  description: 'Fórmula avanzada con creatina y carbohidratos para maximizar la carga muscular y la recuperación.',
  features: [
   'Creatina + Carbohidratos',
   'Sistema de carga rápida',
   'Mejora la hidratación celular',
   'Sabores disponibles',
   'Ideal para volumen'
  ],
  image: '/creatina_celltech.jpg',
  popular: false,
  cta: 'Comprar Ahora',
  price: '$145.000'
 },
 {
  id: 10,
  category: 'supplements',
  name: 'Creatina Animal',
  description: 'Creatina de grado profesional diseñada para atletas de alto rendimiento que buscan resultados extremos.',
  features: [
   'Fórmula profesional',
   'Alta concentración',
   'Para atletas avanzados',
   'Máxima potencia',
   'Resultados comprobados'
  ],
  image: '/creatina_animal.jpg',
  popular: false,
  cta: 'Comprar Ahora',
  price: '$130.000'
 },
 {
  id: 11,
  category: 'supplements',
  name: 'Creatina Nutrex',
  description: 'Creatina de alta calidad con tecnología de absorción mejorada para resultados más rápidos.',
  features: [
   'Absorción mejorada',
   'Sin retención de agua',
   'Fórmula concentrada',
   '60 porciones',
   'Calidad premium'
  ],
  image: '/creatina_nutrex.jpg',
  popular: false,
  cta: 'Comprar Ahora',
  price: '$110.000'
 },
 {
  id: 12,
  category: 'supplements',
  name: 'Proteina BiPro Classic',
  description: 'Proteína de alta calidad con tecnología de absorción mejorada para resultados más rápidos.',
  features: [
   'Absorción mejorada',
   'Sin retención de agua',
   'Fórmula concentrada',
   '60 porciones',
   'Calidad premium'
  ],
  image: '/biproclassic.png',
  popular: true,
  cta: 'Comprar Ahora',
  price: '$110.000'
 },
];

const benefits = [
 {
  icon: TrendingUp,
  title: 'Resultados Medibles',
  description: 'Cada aspecto de tu progreso es cuantificado y visualizado.'
 },
 {
  icon: Clock,
  title: 'Ahorro de Tiempo',
  description: 'Planes optimizados para máximos resultados en el tiempo disponible.'
 },
 {
  icon: Shield,
  title: 'Respaldo Científico',
  description: 'Metodologías basadas en evidencia y estudios actualizados.'
 },
 {
  icon: Users,
  title: 'Comunidad Activa',
  description: 'Conecta con otros atletas comprometidos con la disciplina.'
 }
];

const faqs = [
 {
  question: '¿Cómo empiezo con un plan de entrenamiento?',
  answer: 'Contáctanos por WhatsApp para agendar una evaluación inicial gratuita. Analizaremos tus objetivos, historial y disponibilidad para diseñar el plan perfecto para ti.'
 },
 {
  question: '¿Los suplementos tienen envío a todo Colombia?',
  answer: 'Sí, realizamos envíos a todo el país. Envío gratis en Pereira y el Eje Cafetero. Para otras ciudades, el costo se calcula según destino.'
 },
 {
  question: '¿Puedo combinar servicios de entrenamiento con datos?',
  answer: 'Absolutamente. De hecho, recomendamos la combinación de entrenamiento + dashboard de rendimiento para maximizar tus resultados con información en tiempo real.'
 },
 {
  question: '¿Qué pasa si no veo resultados?',
  answer: 'Nuestro enfoque basado en datos nos permite identificar rápidamente qué ajustar. Si sigues el plan y no hay progreso, ajustamos sin costo adicional hasta encontrar lo que funciona para ti.'
 }
];

export default function Products() {
 const [activeCategory, setActiveCategory] = useState('all');
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 const filteredProducts = activeCategory === 'all'
  ? products
  : products.filter(p => p.category === activeCategory);

 return (
  <main className="products">
   {/* Hero Section */}
   <section className="products-hero">
    <div className="products-hero__background">
     <div className="products-hero__gradient" />
     <div className="products-hero__grid" />
     <div className="products-hero__orb products-hero__orb--1" />
     <div className="products-hero__orb products-hero__orb--2" />
    </div>

    <div className="products-hero__container">
     <motion.div
      className="products-hero__content"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
     >
      <motion.span className="products-hero__label" variants={fadeInUp}>
       Productos & Servicios
      </motion.span>

      <motion.h1 className="products-hero__title" variants={fadeInUp}>
       Herramientas para{' '}
       <span className="products-hero__title-highlight">potenciar</span>
       {' '}tu rendimiento
      </motion.h1>

      <motion.p className="products-hero__subtitle" variants={fadeInUp}>
       Entrenamiento personalizado, seguimiento basado en datos y suplementos
       de calidad. Todo lo que necesitas para alcanzar tu máximo potencial.
      </motion.p>

      <motion.div className="products-hero__actions" variants={fadeInUp}>
       <motion.a
        href="#catalog"
        className="products-hero__btn products-hero__btn--primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Ver Catálogo
        <ArrowRight size={18} />
       </motion.a>
       <motion.a
        href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20una%20asesoria."
        className="products-hero__btn products-hero__btn--secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
       >
        Asesoría Gratis
       </motion.a>
      </motion.div>
     </motion.div>
    </div>
   </section>

   {/* Benefits Section */}
   <section className="benefits section">
    <div className="container">
     <div className="benefits__grid">
      {benefits.map((benefit, index) => (
       <motion.div
        key={index}
        className="benefit-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
       >
        <div className="benefit-card__icon">
         <benefit.icon size={24} />
        </div>
        <h3 className="benefit-card__title">{benefit.title}</h3>
        <p className="benefit-card__description">{benefit.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Catalog Section */}
   <section id="catalog" className="catalog section">
    <div className="container">
     <motion.div
      className="catalog__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <span className="catalog__label">Catálogo</span>
      <h2 className="catalog__title">
       Encuentra lo que{' '}
       <span className="text-gradient">necesitas</span>
      </h2>
     </motion.div>

     {/* Category Filter */}
     <motion.div
      className="catalog__filters"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
     >
      {categories.map((category) => (
       <button
        key={category.id}
        className={`catalog__filter ${activeCategory === category.id ? 'catalog__filter--active' : ''}`}
        onClick={() => setActiveCategory(category.id)}
       >
        <category.icon size={18} />
        {category.name}
       </button>
      ))}
     </motion.div>

     {/* Products Grid */}
     <motion.div
      className="catalog__grid"
      layout
     >
      <AnimatePresence mode="popLayout">
       {filteredProducts.map((product, index) => (
        <motion.div
         key={product.id}
         className={`product-card ${product.popular ? 'product-card--popular' : ''} ${product.image ? 'product-card--with-image' : ''}`}
         layout
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
         transition={{ duration: 0.4, delay: index * 0.05 }}
         whileHover={{ y: -8 }}
        >
         {product.popular && (
          <div className="product-card__badge">
           {product.image ? '⭐ Más Vendida' : 'Popular'}
          </div>
         )}

         {/* Si tiene imagen (suplemento), mostrar imagen */}
         {product.image ? (
          <div className="product-card__image-wrapper">
           <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
           />
          </div>
         ) : (
          <div className="product-card__header">
           <div className="product-card__icon">
            {product.icon && <product.icon size={28} />}
           </div>
           <span className="product-card__category">
            {categories.find(c => c.id === product.category)?.name}
           </span>
          </div>
         )}

         {/* Categoría para suplementos */}
         {product.image && (
          <span className="product-card__category product-card__category--supplement">
           {categories.find(c => c.id === product.category)?.name}
          </span>
         )}

         <h3 className="product-card__title">{product.name}</h3>
         <p className="product-card__description">{product.description}</p>

         <ul className="product-card__features">
          {product.features.map((feature, i) => (
           <li key={i}>
            <Check size={16} />
            {feature}
           </li>
          ))}
         </ul>

         <div className="product-card__footer">
          {product.price && (
           <span className="product-card__price">{product.price}</span>
          )}
          <motion.a
           href={`https://wa.me/+573235237076?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`}
           className="product-card__cta"
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           target="_blank"
          >
           {product.cta}
           <ArrowRight size={16} />
          </motion.a>
         </div>
        </motion.div>
       ))}
      </AnimatePresence>
     </motion.div>
    </div>
   </section>

   {/* Process Section */}
   <section className="process section">
    <div className="process__background">
     <div className="process__line" />
    </div>
    <div className="container">
     <motion.div
      className="process__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <span className="process__label">¿Cómo Funciona?</span>
      <h2 className="process__title">
       Tu camino hacia el{' '}
       <span className="text-gradient">progreso</span>
      </h2>
     </motion.div>

     <div className="process__steps">
      {[
       { step: '01', title: 'Contacto', description: 'Escríbenos por WhatsApp y cuéntanos tus objetivos.' },
       { step: '02', title: 'Evaluación', description: 'Analizamos tu situación actual y definimos el camino.' },
       { step: '03', title: 'Plan', description: 'Diseñamos tu plan personalizado con métricas claras.' },
       { step: '04', title: 'Ejecución', description: 'Implementas con nuestro acompañamiento constante.' },
       { step: '05', title: 'Resultados', description: 'Medimos, ajustamos y celebramos tu progreso.' }
      ].map((item, index) => (
       <motion.div
        key={index}
        className="process__step"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
       >
        <div className="process__step-number">{item.step}</div>
        <div className="process__step-content">
         <h3>{item.title}</h3>
         <p>{item.description}</p>
        </div>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* FAQ Section */}
   <section className="faq section">
    <div className="container">
     <motion.div
      className="faq__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <span className="faq__label">FAQ</span>
      <h2 className="faq__title">
       Preguntas{' '}
       <span className="text-gradient">frecuentes</span>
      </h2>
     </motion.div>

     <div className="faq__list">
      {faqs.map((faq, index) => (
       <motion.div
        key={index}
        className={`faq__item ${openFaq === index ? 'faq__item--open' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
       >
        <button
         className="faq__question"
         onClick={() => setOpenFaq(openFaq === index ? null : index)}
        >
         {faq.question}
         <ChevronDown size={20} className="faq__icon" />
        </button>
        <AnimatePresence>
         {openFaq === index && (
          <motion.div
           className="faq__answer"
           initial={{ height: 0, opacity: 0 }}
           animate={{ height: 'auto', opacity: 1 }}
           exit={{ height: 0, opacity: 0 }}
           transition={{ duration: 0.3 }}
          >
           <p>{faq.answer}</p>
          </motion.div>
         )}
        </AnimatePresence>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="products-cta section">
    <div className="products-cta__glow" />
    <div className="container">
     <motion.div
      className="products-cta__content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <h2 className="products-cta__title">
       ¿Listo para{' '}
       <span className="text-gradient">empezar</span>?
      </h2>
      <p className="products-cta__text">
       Agenda una asesoría gratuita y descubre cómo podemos ayudarte
       a alcanzar tus objetivos.
      </p>
      <motion.a
       href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20información."
       className="products-cta__btn"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       target="_blank"
      >
       Contactar por WhatsApp
       <ArrowRight size={18} />
      </motion.a>
     </motion.div>
    </div>
   </section>
  </main>
 );
}