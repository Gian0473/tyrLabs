import { motion } from 'framer-motion';
import {
 MapPin,
 Flame,
 Code,
 Dumbbell,
 Target,
 Rocket,
 Users,
 TrendingUp,
 Heart,
 Zap,
 BarChart3,
 Globe
} from 'lucide-react';
import '../styles/About.css';

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

const values = [
 {
  icon: Code,
  title: 'Tecnología',
  description: 'Herramientas digitales que transforman datos en decisiones inteligentes para tu entrenamiento.'
 },
 {
  icon: BarChart3,
  title: 'Datos',
  description: 'Métricas precisas que te permiten ver, entender y optimizar cada aspecto de tu progreso.'
 },
 {
  icon: Users,
  title: 'Comunidad',
  description: 'Una red de atletas disciplinados que comparten el mismo compromiso con la excelencia.'
 },
 {
  icon: Heart,
  title: 'Disciplina',
  description: 'El pilar fundamental que convierte la constancia en resultados extraordinarios.'
 }
];

const timeline = [
 {
  year: '2024',
  title: 'El inicio',
  description: 'Nace TYRLABS en Pereira con una visión clara: unir fitness y tecnología.'
 },
 {
  year: '2025',
  title: 'Primeros pasos',
  description: 'Lanzamiento de nuestros servicios de entrenamiento y seguimiento basado en datos.'
 },
 {
  year: '2026',
  title: 'Expansión regional',
  description: 'Llevando nuestra metodología a todo el Eje Cafetero y más allá.'
 },
 {
  year: 'Futuro',
  title: 'Visión nacional',
  description: 'Convertirnos en el referente de entrenamiento inteligente en Colombia.'
 }
];

const stats = [
 { icon: Dumbbell, value: 'Fitness', label: 'Pasión por el entrenamiento' },
 { icon: Code, value: 'Tech', label: 'Innovación constante' },
 { icon: MapPin, value: 'Pereira', label: 'Orgullo regional' },
 { icon: Rocket, value: '100%', label: 'Compromiso total' }
];

export default function About() {
 return (
  <main className="about">
   {/* Hero Section */}
   <section className="about-hero">
    <div className="about-hero__background">
     <div className="about-hero__gradient" />
     <div className="about-hero__grid" />
     <div className="about-hero__orb about-hero__orb--1" />
     <div className="about-hero__orb about-hero__orb--2" />
    </div>

    <div className="about-hero__container">
     <motion.div
      className="about-hero__content"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
     >
      <motion.div className="about-hero__badge" variants={fadeInUp}>
       <MapPin size={16} />
       Pereira, Colombia
      </motion.div>

      <motion.h1 className="about-hero__title" variants={fadeInUp}>
       Jóvenes que unen{' '}
       <span className="about-hero__title-highlight">fuerza</span>
       {' '}y{' '}
       <span className="about-hero__title-highlight">código</span>
      </motion.h1>

      <motion.p className="about-hero__subtitle" variants={fadeInUp}>
       Somos un equipo de Pereira apasionado por el fitness y la tecnología.
       Creemos que el verdadero potencial del cuerpo se desbloquea cuando la
       disciplina se encuentra con la innovación.
      </motion.p>

      <motion.div className="about-hero__stats" variants={fadeInUp}>
       {stats.map((stat, index) => (
        <div key={index} className="about-hero__stat">
         <stat.icon size={24} className="about-hero__stat-icon" />
         <span className="about-hero__stat-value">{stat.value}</span>
         <span className="about-hero__stat-label">{stat.label}</span>
        </div>
       ))}
      </motion.div>
     </motion.div>
    </div>
   </section>

   {/* Story Section */}
   <section className="story section">
    <div className="container">
     <div className="story__grid">
      <motion.div
       className="story__visual"
       initial={{ opacity: 0, x: -40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <div className="story__card">
        <div className="story__card-icon">
         <img
          src="/tyrlabs.svg"
          alt="TYRLABS"
          className=""
         />
        </div>
        <div className="story__card-content">
         <span className="story__card-label">Nuestra esencia</span>
         <h3 className="story__card-title">
          Donde el <span className="text-gradient">hierro</span> se encuentra con el <span className="text-gradient">algoritmo</span>
         </h3>
        </div>
       </div>
       <div className="story__decorative">
        <div className="story__decorative-ring story__decorative-ring--1" />
        <div className="story__decorative-ring story__decorative-ring--2" />
        <div className="story__decorative-ring story__decorative-ring--3" />
       </div>
      </motion.div>

      <motion.div
       className="story__content"
       initial={{ opacity: 0, x: 40 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <span className="story__label">Nuestra Historia</span>
       <h2 className="story__title">
        De Pereira para{' '}
        <span className="text-gradient">el mundo</span>
       </h2>
       <div className="story__text">
        <p>
         TYRLABS nació de una convicción simple pero poderosa: <strong>el entrenamiento
          físico merece la misma precisión y análisis que cualquier disciplina profesional</strong>.
        </p>
        <p>
         Somos un grupo de jóvenes pereiranos que vivimos entre el gimnasio y el código.
         Vimos cómo muchos entrenan duro sin ver resultados claros, sin entender qué funciona
         y qué no. Decidimos cambiar eso.
        </p>
        <p>
         Creamos TYRLABS para que cada repetición cuente, cada progreso se vea, y cada
         atleta —sin importar su nivel— tenga las herramientas para alcanzar su máximo
         potencial. <strong>Empezamos en el Eje Cafetero, pero nuestra visión no tiene fronteras</strong>.
        </p>
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* Values Section */}
   <section className="values section">
    <div className="values__background">
     <div className="values__line values__line--1" />
     <div className="values__line values__line--2" />
    </div>

    <div className="container">
     <motion.div
      className="values__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <span className="values__label">Nuestros Pilares</span>
      <h2 className="values__title">
       Lo que nos{' '}
       <span className="text-gradient">define</span>
      </h2>
      <p className="values__description">
       Cuatro fundamentos que guían cada decisión, cada producto y cada
       interacción con nuestra comunidad.
      </p>
     </motion.div>

     <div className="values__grid">
      {values.map((value, index) => (
       <motion.div
        key={index}
        className="value-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
       >
        <div className="value-card__icon-wrapper">
         <div className="value-card__icon">
          <value.icon size={28} />
         </div>
         <div className="value-card__number">0{index + 1}</div>
        </div>
        <h3 className="value-card__title">{value.title}</h3>
        <p className="value-card__description">{value.description}</p>
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Mission Section */}
   <section className="mission section">
    <div className="container">
     <div className="mission__grid">
      <motion.div
       className="mission__content"
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <div className="mission__card mission__card--vision">
        <div className="mission__card-header">
         <Target size={24} />
         <span>Visión</span>
        </div>
        <p className="mission__card-text">
         Convertir el entrenamiento físico disciplinado en un proceso medible,
         visible y compartido, apoyado en tecnología, datos y comunidad, para que
         el progreso físico sea sostenible, gestionable y significativo para quienes
         entrenan con constancia a lo largo del tiempo.
        </p>
       </div>

       <div className="mission__card mission__card--mission">
        <div className="mission__card-header">
         <Rocket size={24} />
         <span>Misión</span>
        </div>
        <p className="mission__card-text">
         Desarrollar soluciones integrales para el entrenamiento disciplinado, que
         articulen tecnología, datos y comunidad, permitiendo a las personas gestionar,
         comprender y evidenciar su rendimiento físico con mayor control, claridad y
         proyección en el tiempo.
        </p>
       </div>
      </motion.div>

      <motion.div
       className="mission__visual"
       initial={{ opacity: 0, scale: 0.9 }}
       whileInView={{ opacity: 1, scale: 1 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
      >
       <div className="mission__graphic">
        <div className="mission__graphic-center">
         <Flame size={40} />
        </div>
        <div className="mission__graphic-orbit mission__graphic-orbit--1">
         <div className="mission__graphic-dot"><Dumbbell size={16} /></div>
        </div>
        <div className="mission__graphic-orbit mission__graphic-orbit--2">
         <div className="mission__graphic-dot"><Code size={16} /></div>
        </div>
        <div className="mission__graphic-orbit mission__graphic-orbit--3">
         <div className="mission__graphic-dot"><Users size={16} /></div>
        </div>
       </div>
      </motion.div>
     </div>
    </div>
   </section>

   {/* Timeline Section */}
   <section className="timeline section">
    <div className="container">
     <motion.div
      className="timeline__header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <span className="timeline__label">Nuestro Camino</span>
      <h2 className="timeline__title">
       Construyendo el{' '}
       <span className="text-gradient">futuro</span>
      </h2>
     </motion.div>

     <div className="timeline__container">
      <div className="timeline__line" />
      {timeline.map((item, index) => (
       <motion.div
        key={index}
        className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
       >
        <div className="timeline__card">
         <span className="timeline__year">{item.year}</span>
         <h3 className="timeline__item-title">{item.title}</h3>
         <p className="timeline__item-description">{item.description}</p>
        </div>
        <div className="timeline__dot" />
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* Regional Section */}
   <section className="regional section">
    <div className="regional__glow" />
    <div className="container">
     <motion.div
      className="regional__content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <div className="regional__badge">
       <Globe size={18} />
       Expansión Regional
      </div>
      <h2 className="regional__title">
       Del Eje Cafetero{' '}
       <span className="text-gradient">para Colombia</span>
      </h2>
      <p className="regional__text">
       Nacimos en Pereira con raíces profundas en nuestra región. Ahora estamos
       listos para llevar nuestra metodología de entrenamiento inteligente a todo
       el país. Porque el potencial no tiene límites geográficos.
      </p>
      <div className="regional__locations">
       <div className="regional__location regional__location--active">
        <MapPin size={18} />
        <span>Pereira</span>
       </div>
       <div className="regional__location">
        <MapPin size={18} />
        <span>Manizales</span>
       </div>
       <div className="regional__location">
        <MapPin size={18} />
        <span>Armenia</span>
       </div>
       <div className="regional__location regional__location--coming">
        <Zap size={18} />
        <span>Más ciudades pronto</span>
       </div>
      </div>
     </motion.div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="about-cta section">
    <div className="container">
     <motion.div
      className="about-cta__content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
     >
      <h2 className="about-cta__title">
       ¿Quieres ser parte de{' '}
       <span className="text-gradient">TYRLABS</span>?
      </h2>
      <p className="about-cta__text">
       Únete a la comunidad de atletas que están transformando su entrenamiento
       con tecnología y datos.
      </p>
      <div className="about-cta__actions">
       <motion.a
        href="https://wa.me/+573235237076?text=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20TYRLABS."
        className="about-cta__btn about-cta__btn--primary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
       >
        Contáctanos
       </motion.a>
       <motion.a
        href="https://www.instagram.com/tyrlabs_co?igsh=dTFmbW80M3FqeDV2"
        target="_blank"
        rel="noopener noreferrer"
        className="about-cta__btn about-cta__btn--secondary"
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
