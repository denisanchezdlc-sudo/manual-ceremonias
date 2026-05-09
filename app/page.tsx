"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion"; // <-- AGREGAMOS 'Variants' AQUÍ

// 1. SACAMOS LA ANIMACIÓN AFUERA DE LA FUNCIÓN Y LE PONEMOS EL TIPO ': Variants'
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  
  // Función para deslizar suavemente hacia la oferta
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout-section");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Base de datos de Preguntas Frecuentes con Copy Persuasivo
  const faqItems = [
    {
      pregunta: "¿En qué formato recibo el material?",
      respuesta: "Todo el material es 100% digital. Los manuales se entregan en formato PDF de alta resolución, perfecto para leer en tu celular, tablet o computadora, e incluso para imprimir si así lo prefieres. Los bonos de audio, estos se entregan en formato MP3 de alta calidad."
    },
    {
      pregunta: "¿Sirve si nunca he sido Maestro de Ceremonias?",
      respuesta: "¡Absolutamente! Este material está diseñado pensando tanto en principiantes como en personas con algo de experiencia. Te llevamos de la mano con guiones listos para usar. No necesitas experiencia previa, solo las ganas de dominar el escenario."
    },
    {
      pregunta: "¿Cómo accedo al contenido después de pagar?",
      respuesta: "El acceso es inmediato. Una vez confirmado tu pago, recibirás automáticamente un correo electrónico con tus credenciales de acceso a nuestra plataforma exclusiva de alumnos y los enlaces de descarga. ¡Podrás empezar a estudiar en cuestión de minutos!"
    },
    {
      pregunta: "¿Cómo realizo el pago?",
      respuesta: "Es muy sencillo y rápido. Solo haz clic en cualquiera de los botones de 'DESCARGAR AHORA' en esta página. Serás redirigido a una pasarela de pago totalmente cifrada y segura. Allí podrás elegir tu método de pago preferido (tarjeta, efectivo, PayPal, etc.) y completar tus datos."
    },
    {
      pregunta: "No tengo tarjeta de débito o crédito ... ¿Cómo puedo pagar?",
      respuesta: "¡No te preocupes! Entendemos que no todos usan tarjeta. Dependiendo de tu país, ofrecemos opciones de pago locales en efectivo (OXXO en México, PagoFácil o RapiPago en Argentina, Sencillito en Chile, Efecty en Colombia, PagoEfectivo en Perú, etc.), además de transferencias bancarias o PayPal. Solo selecciona tu país en la página de pago y verás tus opciones."
    },
    {
      pregunta: "¿Si no me gusta y me arrepiento?",
      respuesta: "Tu inversión está totalmente protegida. Confiamos tanto en la calidad de este material que te ofrecemos una Garantía de Satisfacción de 7 Días. Si después de revisar el contenido sientes que no te es útil, puedes solicitar la devolución del 100% de tu dinero con un solo clic. Sin preguntas incómodas. Tu riesgo es cero."
    },
    {
      pregunta: "¿Es seguro comprar por internet?",
      respuesta: "100% seguro. Usamos Hotmart, una de las plataformas de educación y procesamiento de pagos más grandes y confiables del mundo. Tus datos financieros están protegidos por encriptación SSL de nivel bancario, lo que significa que nadie más tiene acceso a tu información de pago."
    },
    {
      pregunta: "¿Es un único pago?",
      respuesta: "¡Sí! Es un único pago de por vida. No hay cargos mensuales, anuales ni suscripciones ocultas. Pagas hoy y obtienes acceso para siempre, incluyendo todas las futuras actualizaciones que le hagamos al material."
    }
  ];

  return (
    <main className="min-h-screen text-neutral-900 font-sans selection:bg-[#d4af37] selection:text-black relative overflow-x-hidden">
      
      {/* VIDEO DE FONDO GLOBAL Y FIJO */}
      <div className="fixed inset-0 w-full h-full z-[-2]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAY GLOBAL */}
      <div className="fixed inset-0 bg-[#FCF7EF]/85 backdrop-blur-md z-[-1]"></div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border-2 border-[#d4af37] bg-white rounded-full px-3 md:px-4 py-1.5 mb-6 shadow-sm">
            <span className="text-[#b08d28] text-[10px] sm:text-xs md:text-sm font-extrabold tracking-widest uppercase">
              🎤 Para Maestros de Ceremonias y Animadores
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 md:mb-6 text-neutral-950 tracking-tight">
            Domina el Escenario en Tu Próximo Evento: <span className="text-[#b08d28]">El Guion Exacto</span>
          </h1>
          <p className="text-neutral-800 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed font-bold">
            Deja de improvisar y empieza a cobrar como un profesional. Obtén los guiones paso a paso para Bodas, 15 Años y más, aunque nunca hayas tomado un micrófono.
          </p>
          
          {/* BOTÓN HERO */}
          <motion.button 
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group bg-neutral-950 border-2 border-[#d4af37] text-[#d4af37] font-extrabold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-xl w-full md:w-auto transition-shadow shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.5)]"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
            <span className="relative">QUIERO DESCARGAR EL MANUAL AHORA</span>
          </motion.button>

          <p className="mt-4 md:mt-5 text-xs sm:text-sm text-neutral-800 font-extrabold flex items-center justify-center md:justify-start">
            <span className="mr-2 text-[#b08d28] text-lg md:text-xl">✓</span> Entrega Digital Inmediata vía Email
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-auto md:aspect-square mt-8 md:mt-0"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl overflow-hidden"
          >
            <Image 
              src="/mockup-3d.png" 
              alt="Mockup 3D Manual de Ceremonias" 
              fill 
              className="object-contain p-4" 
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. AGITACIÓN (PUNTOS DE DOLOR) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 relative z-10"
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-black mb-3 md:mb-4 text-neutral-950 tracking-tight">
          ¿Te preocupa quedarte en blanco<br className="hidden md:block" /> frente a 100 personas?
        </h2>
        <p className="text-center text-neutral-800 text-base md:text-lg mb-8 md:mb-12 font-bold px-2">
          No hay nada peor que el silencio incómodo cuando todos te están mirando.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 p-5 md:p-10 rounded-2xl md:rounded-3xl space-y-3 md:space-y-4 shadow-xl">
          {[
            "Miedo a que el evento se sienta aburrido, desorganizado o 'amateur'.",
            "¿Te quedas en blanco al tomar el micrófono?",
            "¿No sabes qué decir en momentos clave de la ceremonia?",
            "¿Sientes que no conectas con el público?",
            "¿Quieres cobrar más por tus servicios?"
          ].map((dolor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/95 border border-neutral-100 p-4 md:p-5 rounded-xl flex items-center gap-3 md:gap-4 hover:border-[#d4af37]/50 transition-colors shadow-sm group cursor-default"
            >
              <span className="text-xl md:text-2xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0">😰</span>
              <p className="text-neutral-900 font-bold text-sm sm:text-base">{dolor}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. PROPUESTA DE VALOR */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-auto md:aspect-square bg-white/90 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden order-2 md:order-1">
           <Image 
             src="/pdf-abierto.png" 
             alt="PDF Abierto Manual de Ceremonias" 
             fill 
             className="object-contain p-4 md:p-6" 
           />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 text-neutral-950 tracking-tight">
            Tu Copiloto Secreto para <span className="text-[#b08d28]">Cada Ceremonia</span>
          </h2>
          <p className="text-neutral-800 text-base md:text-lg mb-4 md:mb-6 font-medium leading-relaxed">
            No te estoy vendiendo solo un "libro". Te estoy vendiendo <strong className="text-neutral-950 font-black">seguridad</strong>. Imagina tener en tu celular o impreso en tu carpeta el guion exacto de lo que debes decir.
          </p>
          <p className="text-neutral-800 text-base md:text-lg mb-8 md:mb-10 font-medium leading-relaxed">
            Este es un <strong className="text-neutral-950 font-black">Manual Digital (PDF)</strong> diseñado para ser consultado rápido. Sin relleno, solo las palabras exactas que funcionan para emocionar, divertir y dirigir a la audiencia.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {["Listo para imprimir", "Formato móvil", "Acceso de por vida", "Lenguaje sencillo"].map((check, i) => (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                key={i} 
                className="bg-white/95 p-3 md:p-4 rounded-xl flex items-center gap-3 border border-neutral-100 shadow-sm cursor-default"
              >
                <span className="text-[#b08d28] font-black text-lg md:text-xl">✓</span>
                <span className="text-sm sm:text-base font-bold text-neutral-900">{check}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. PARA QUIÉN ES */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-16 md:py-24 px-4 text-center relative z-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 tracking-tight">¿Para Quién es Este Manual?</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
          className="h-1.5 bg-[#d4af37] mx-auto mt-4 md:mt-6 mb-10 md:mb-16 rounded-full shadow-sm"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -10 }} className="bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/60 hover:border-[#d4af37]/50 transition-all shadow-xl group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FCF7EF] border-2 border-[#d4af37] rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">🧑‍🏫</div>
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-neutral-950">Novatos y Principiantes</h3>
            <p className="text-neutral-800 font-medium text-sm md:text-base">Tienes talento pero te falta estructura. Quieres lanzarte al ruedo pero el miedo escénico te paraliza al no saber qué decir.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/60 hover:border-[#d4af37]/50 transition-all shadow-xl group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FCF7EF] border-2 border-[#d4af37] rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">💿</div>
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-neutral-950">DJs y Animadores</h3>
            <p className="text-neutral-800 font-medium text-sm md:text-base">Ya pones la música, ahora quieres cobrar el doble por ser también el Maestro de Ceremonias del evento.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/60 hover:border-[#d4af37]/50 transition-all shadow-xl group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FCF7EF] border-2 border-[#d4af37] rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mx-auto mb-4 md:mb-6 shadow-sm group-hover:scale-110 transition-transform">🤝</div>
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-neutral-950">Familiares y Amigos</h3>
            <p className="text-neutral-800 font-medium text-sm md:text-base">"¡Tú hablas bonito!" Te pidieron que dirijas la boda de tu mejor amigo y no quieres arruinar su día especial.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 5. MÓDULOS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-black mb-2 md:mb-4 text-neutral-950 tracking-tight">Lo Que Tendrás en Tus Manos</h2>
        <p className="text-center text-[#b08d28] font-bold text-xs sm:text-sm tracking-widest uppercase mb-8 md:mb-12 animate-pulse">Haz clic en cada módulo para ver el contenido detallado</p>
        
        <div className="space-y-3 md:space-y-4">
          {[
            {
              titulo: "Módulo 1: BODAS - Civil y Recepción",
              items: [
                "Guion Maestro para Boda Civil y Religiosa: Ingresos, firmas y presentación oficial.",
                "Dirección del Vals Principal y el Brindis de Honor paso a paso.",
                "Momentos Festivos: Baile sorpresa, lanzamiento de ramo y liga.",
                "Manejo de tiempos entre el banquete y la apertura de la pista de baile."
              ]
            },
            {
              titulo: "Módulo 2: 15 AÑOS - Magia y Tradición",
              items: [
                "El Ingreso Triunfal y presentación de la Guardia de Honor / Chambelanes.",
                "Ceremonias Simbólicas: Cambio de zapatillas, coronación de tiara y última muñeca.",
                "Dinámicas emotivas: Ceremonia de las 15 velas y las 15 rosas.",
                "Estructura del Vals principal y palabras de agradecimiento de los padres."
              ]
            },
            {
              titulo: "Módulo 3: GRADUACIONES - Escolar y Superior",
              items: [
                "Apertura solemne, ingreso de autoridades académicas y graduados.",
                "Acto Central: Protocolo para la entrega de diplomas e imposición de medallas.",
                "Juramentación ética profesional y el acto simbólico del cambio de borla.",
                "Cierre eufórico: Lanzamiento de birretes y brindis de honor."
              ]
            },
            {
              titulo: "Módulo 4: HITOS DE VIDA - 18 Años, Bodas de Oro y Cumpleaños",
              items: [
                "18 Años: Transición a la vida adulta, ingreso triunfal y cruce de espadas.",
                "Bodas de Oro/Plata: Protocolo de renovación de votos y vals de aniversario.",
                "Cumpleaños de Adultos: Palabras de bienvenida, brindis solemne y semblanza.",
                "Juegos y dinámicas de interacción (Baile del espejo, juego del zapato, etc.)."
              ]
            },
            {
              titulo: "Módulo 5: BAUTIZOS - El Primer Sacramento",
              items: [
                "Apertura y bienvenida: Cómo crear un ambiente tierno y familiar.",
                "Ingreso de la familia y presentación solemne de los padrinos.",
                "Brindis de honor y palabras de los padres.",
                "El rito tradicional del corte de pelo."
              ]
            },
            {
              titulo: "Módulo 6: AUTORIDAD ESCÉNICA - Dominio Total del Evento",
              items: [
                "Mentalidad profesional: La diferencia entre un simple animador y un verdadero MC.",
                "Lenguaje corporal y postura de poder: Cómo moverte y dónde pararte en el escenario.",
                "Manejo de crisis: Frases de rescate ante fallas técnicas, retrasos o públicos difíciles.",
                "Profesionalización: Cómo posicionar tu marca, estructurar tus servicios y cobrar lo que realmente vales."
              ]
            },
            {
              titulo: "Módulo 7: VOZ PROFESIONAL - Proyección y Dicción",
              items: [
                "Respiración diafragmática: El secreto para hablar por horas sin fatiga ni daño vocal.",
                "Protocolos de calentamiento rápido pre-evento y recuperación post-evento.",
                "Técnicas de dicción avanzada: Ejercicios para una articulación y claridad cristalina.",
                "Control de tonos, pausas estratégicas y la 'montaña rusa emocional' de la voz."
              ]
            },
            {
              titulo: "Módulo 8: ANIMACIÓN Y CONTROL - El Alma de la Fiesta",
              items: [
                "La Magia de la Animación: Más de 300 frases comprobadas para romper el hielo e interactuar.",
                "Transiciones perfectas para cambiar de ritmo musical sin perder la energía de la pista.",
                "Tips psicológicos para leer el ambiente y conectar instantáneamente con audiencias apagadas.",
                "Frases exclusivas adaptadas por género musical: Cumbia, Reggaetón, Salsa y Éxitos."
              ]
            }
          ].map((modulo, index) => (
            <details key={index} className="group bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl overflow-hidden shadow-lg hover:border-[#d4af37]/50 transition-colors" open={index === 0}>
              <summary className="cursor-pointer p-4 md:p-6 font-black text-base sm:text-lg md:text-xl flex justify-between items-center text-neutral-950 hover:text-[#b08d28] bg-white transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xl md:text-2xl">📖</span> {modulo.titulo}
                </div>
                <span className="text-[#b08d28] group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▼</span>
              </summary>
              <div className="p-4 md:p-6 border-t border-neutral-100 space-y-3 md:space-y-4 bg-white/95">
                {modulo.items.map((item, idx) => (
                  <p key={idx} className="flex items-start gap-2 md:gap-3 font-semibold text-neutral-800 text-sm md:text-base">
                    <span className="text-[#b08d28] font-black text-base md:text-lg mt-0.5 flex-shrink-0">✓</span> 
                    {item}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </motion.section>

      {/* 6. AUTOR */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 max-w-5xl mx-auto relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/60 overflow-hidden flex flex-col md:flex-row shadow-2xl hover:shadow-[#d4af37]/20 transition-shadow duration-500">
          <div className="relative w-full md:w-2/5 h-[300px] sm:h-[400px] md:h-auto bg-white border-b md:border-b-0 md:border-r border-neutral-100 overflow-hidden">
            <Image 
              src="/foto-denis.jpg" 
              alt="Denis Sánchez Maestro de Ceremonias" 
              fill 
              className="object-cover object-top" 
            />
          </div>
          <div className="p-6 sm:p-8 md:p-12 w-full md:w-3/5">
            <h2 className="text-2xl sm:text-3xl font-black mb-4 md:mb-6 text-neutral-950 tracking-tight">¿Quién está detrás de este manual?</h2>
            <p className="text-neutral-800 mb-4 font-medium leading-relaxed text-sm md:text-base">
              Hola, soy <strong className="text-neutral-950 font-black">Denis Sánchez</strong>. Durante más de 10 años he sostenido un micrófono frente a audiencias de todo tipo, desde bodas íntimas hasta eventos corporativos de 500 personas.
            </p>
            <p className="text-neutral-800 mb-6 md:mb-8 font-medium leading-relaxed text-sm md:text-base">
              He condensado mi experiencia, mis errores y mis mayores aciertos en este manual. Mi misión no es solo que "hables", sino que <span className="text-[#b08d28] font-black">conectes</span> y te sientas con la autoridad de un verdadero líder en el escenario.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl md:text-4xl font-black text-[#d4af37] drop-shadow-sm">10+</p>
                <p className="text-[10px] md:text-xs text-neutral-600 font-bold uppercase tracking-widest mt-1">Años Exp.</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-[#d4af37] drop-shadow-sm">500+</p>
                <p className="text-[10px] md:text-xs text-neutral-600 font-bold uppercase tracking-widest mt-1">Eventos</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. TESTIMONIOS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 relative z-10"
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-black mb-10 md:mb-16 text-neutral-950 tracking-tight">Lo que dicen quienes ya lo descargaron</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div whileHover={{ y: -10 }} className="bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/60 flex flex-col justify-between shadow-xl cursor-default">
            <div>
              <div className="text-[#d4af37] mb-3 md:mb-4 text-xl md:text-2xl tracking-widest">★★★★★</div>
              <p className="text-neutral-800 font-medium italic mb-6 md:mb-8 leading-relaxed text-sm md:text-base">"Literalmente salvó mi evento. Me pidieron ser el MC de la boda de mi hermana dos días antes. Descargué el manual, imprimí las hojas de boda y todo salió perfecto."</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-950 text-[#d4af37] rounded-full flex items-center justify-center font-black border-2 border-[#d4af37] flex-shrink-0">CR</div>
              <div>
                <p className="font-black text-neutral-950 text-sm md:text-base">Carlos Rivera</p>
                <p className="text-[10px] md:text-xs text-neutral-500 font-bold uppercase tracking-wider">Comentario de Facebook</p>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-2xl border-2 border-[#d4af37] transform md:-translate-y-4 shadow-2xl flex flex-col justify-between cursor-default">
            <div>
              <div className="text-[#d4af37] mb-3 md:mb-4 text-xl md:text-2xl tracking-widest">★★★★★</div>
              <p className="text-neutral-800 font-medium italic mb-6 md:mb-8 leading-relaxed text-sm md:text-base">"Soy DJ y quería ofrecer el servicio completo. Con los guiones de 15 años ahora cobro un extra y los clientes quedan encantados. Se pagó solo con el primer evento."</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-950 text-[#d4af37] rounded-full flex items-center justify-center font-black border-2 border-[#d4af37] flex-shrink-0">DJ</div>
              <div>
                <p className="font-black text-neutral-950 text-sm md:text-base">DJ Mike T.</p>
                <p className="text-[10px] md:text-xs text-neutral-500 font-bold uppercase tracking-wider">Mensaje de Instagram</p>
              </div>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/60 flex flex-col justify-between shadow-xl cursor-default">
            <div>
              <div className="text-[#d4af37] mb-3 md:mb-4 text-xl md:text-2xl tracking-widest">★★★★★</div>
              <p className="text-neutral-800 font-medium italic mb-6 md:mb-8 leading-relaxed text-sm md:text-base">"Muy práctico. Nada de teoría aburrida, va directo a lo que tienes que decir. Los guiones de brindis son oro puro."</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-950 text-[#d4af37] rounded-full flex items-center justify-center font-black border-2 border-[#d4af37] flex-shrink-0">AL</div>
              <div>
                <p className="font-black text-neutral-950 text-sm md:text-base">Ana Lucía M.</p>
                <p className="text-[10px] md:text-xs text-neutral-500 font-bold uppercase tracking-wider">WhatsApp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. OFERTA Y CHECKOUT */}
      <motion.section 
        id="checkout-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="bg-neutral-950 border-4 border-[#d4af37] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.4)]">
          <div className="bg-gradient-to-r from-[#b5952f] via-[#d4af37] to-[#b5952f] text-neutral-950 text-[10px] sm:text-xs md:text-base font-black tracking-widest uppercase py-2 md:py-4 animate-pulse">
            Oferta Especial Por Tiempo Limitado
          </div>
          <div className="p-5 sm:p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 md:mb-10 text-white tracking-tight">Todo esto te llevas <span className="text-[#d4af37]">hoy</span>:</h2>
            
            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-left">
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">📄</span>
                  <span className="font-black text-sm sm:text-base md:text-lg text-white">Manual de Ceremonias (PDF)</span>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$47 USD</span>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">🎁</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#d4af37] font-black uppercase tracking-wider mb-0.5 md:mb-1">Gratis - Bono #1</p>
                    <p className="font-black text-sm sm:text-base md:text-lg text-white">Pack de Frases y "Guapeos"</p>
                  </div>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$15 USD</span>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">🎧</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#d4af37] font-black uppercase tracking-wider mb-0.5 md:mb-1">Gratis - Bono #2</p>
                    <p className="font-black text-sm sm:text-base md:text-lg text-white">Pistas rítmicas para animadores</p>
                  </div>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$20 USD</span>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">👑</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#d4af37] font-black uppercase tracking-wider mb-0.5 md:mb-1">Gratis - Bono #3</p>
                    <p className="font-black text-sm sm:text-base md:text-lg text-white">Manual Avanzado: Autoridad Escénica</p>
                  </div>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$35 USD</span>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">🗣️</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#d4af37] font-black uppercase tracking-wider mb-0.5 md:mb-1">Gratis - Bono #4</p>
                    <p className="font-black text-sm sm:text-base md:text-lg text-white">Manual de Ejercicios: Voz de Autoridad</p>
                  </div>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$25 USD</span>
              </div>
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border border-[#d4af37]/30 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[#d4af37] text-2xl md:text-3xl drop-shadow-md">⭐</span>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#d4af37] font-black uppercase tracking-wider mb-0.5 md:mb-1">Gratis - Bono #5</p>
                    <p className="font-black text-sm sm:text-base md:text-lg text-white">Soporte Prioritario VIP 24/7</p>
                  </div>
                </div>
                <span className="text-neutral-400 line-through decoration-red-500 font-bold text-sm md:text-base self-end sm:self-auto">$40 USD</span>
              </div>
            </div>

            <div className="border-t border-[#d4af37]/30 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-10 gap-4 md:gap-0">
              <p className="text-lg md:text-2xl text-neutral-300 font-medium text-center md:text-left">
                Valor Total: <br className="block sm:hidden"/> 
                <span className="line-through decoration-red-500 font-bold text-neutral-500 ml-2 md:ml-0">$182 USD</span>
              </p>
              <div className="text-center md:text-right">
                <p className="text-xs md:text-sm text-white font-bold uppercase tracking-widest mb-1">Solo por hoy:</p>
                <motion.p 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#d4af37] drop-shadow-md"
                >
                  $32 USD
                </motion.p>
              </div>
            </div>

            {/* BOTÓN CHECKOUT */}
            <motion.a 
              href="https://pay.hotmart.com/D65473920B?offDiscount=TMC50"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group bg-gradient-to-r from-[#b5952f] via-[#FCE38A] to-[#b5952f] text-neutral-950 font-black text-lg sm:text-xl md:text-2xl py-4 md:py-6 px-4 md:px-10 rounded-xl w-full shadow-[0_0_30px_rgba(212,175,55,0.6)] block text-center"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-500 ease-in-out"></span>
              <span className="relative tracking-wide">DESCARGAR AHORA</span>
              <span className="block text-[10px] sm:text-xs md:text-sm font-bold mt-1 md:mt-2 text-neutral-900 relative tracking-wide">🔒 Acceso Inmediato y Pago Seguro</span>
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* 9. GARANTÍA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="pb-12 md:pb-20 px-4 max-w-3xl mx-auto relative z-10"
      >
        <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/60 flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 shadow-2xl">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-6xl md:text-7xl text-[#d4af37]"
          >
            🛡️
          </motion.div>
          <div>
            <h3 className="text-xl md:text-2xl font-black mb-2 text-neutral-950 tracking-tight">Garantía de 7 Días</h3>
            <p className="text-neutral-800 font-medium leading-relaxed text-sm md:text-base">Descarga el manual, léelo y úsalo. Si sientes que no te da la seguridad que prometemos para pararte frente a un público, simplemente envíanos un email y te devolvemos el 100% de tu dinero. Sin preguntas incómodas.</p>
          </div>
        </div>
      </motion.section>

      {/* 10. FAQ */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="py-12 md:py-20 px-4 max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-black mb-8 md:mb-10 text-neutral-950 tracking-tight">Preguntas Frecuentes</h2>
        <div className="space-y-3 md:space-y-4">
          {faqItems.map((faq, i) => (
            <details key={i} className="group bg-white/90 backdrop-blur-xl border border-white/60 rounded-xl shadow-lg hover:border-[#d4af37]/50 transition-colors">
              <summary className="cursor-pointer p-4 md:p-6 font-black flex justify-between items-center text-neutral-950 hover:text-[#b08d28] transition-colors text-sm sm:text-base md:text-lg">
                <span className="pr-4">{faq.pregunta}</span>
                <span className="bg-[#FCF7EF] w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[#d4af37] border border-neutral-200 group-open:rotate-180 transition-transform flex-shrink-0 text-xs md:text-base">▼</span>
              </summary>
              <div className="p-4 md:p-6 pt-0 text-neutral-800 font-medium text-sm md:text-base leading-relaxed">
                {faq.respuesta}
              </div>
            </details>
          ))}
        </div>
      </motion.section>

      {/* 11. CONTACTO WHATSAPP */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="pb-12 md:pb-20 px-4 max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-neutral-950 border-2 border-[#d4af37] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_10px_30px_rgba(212,175,55,0.2)] gap-8">
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2 md:mb-4">
              ¿TIENES MÁS <span className="text-[#d4af37]">PREGUNTAS?</span>
            </h2>
            <p className="text-neutral-300 text-sm md:text-lg mb-6 md:mb-8 font-medium">
              Escríbeme ahora mismo por WhatsApp y resolveré todas tus dudas.
            </p>
            
            {/* BOTÓN WHATSAPP */}
            <motion.a 
              // REEMPLAZA EL NÚMERO ABAJO POR TU WHATSAPP REAL (con código de país, ej: 51 para Perú)
              href="https://wa.me/51934665194?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20Manual%20de%20Ceremonias"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-black text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-xl transition-colors shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full md:w-auto"
            >
              {/* Ícono SVG de WhatsApp para que cargue rapidísimo */}
              <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              ¡TENGO UNA PREGUNTA!
            </motion.a>
          </div>
          
          {/* ÍCONO 3D GIGANTE WHATSAPP */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0"
          >
             <Image 
               src="/whatsapp-3d.png" 
               alt="Contacto WhatsApp" 
               fill 
               className="object-contain drop-shadow-[0_10px_20px_rgba(37,211,102,0.2)]" 
             />
          </motion.div>
          
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-white/60 bg-white/90 backdrop-blur-lg py-8 md:py-10 text-center text-neutral-700 text-xs md:text-sm px-4 font-medium relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <p className="font-black text-neutral-950 text-sm md:text-base">© 2026 Tu Manual de Ceremonias - Todos los derechos reservados.</p>
        <p className="text-[10px] md:text-xs max-w-2xl mx-auto opacity-80 leading-relaxed">
          Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </footer>

    </main>
  );
}