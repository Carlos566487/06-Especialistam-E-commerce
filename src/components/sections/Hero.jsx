import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            Lançamento Prism Vision
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-on-background leading-tight tracking-tight">
            Conexão Total,<br/>
            <span className="text-primary">Saúde em Foco</span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Experimente a engenharia de precisão no seu pulso. O Chronos Ultra combina estética refinada com tecnologia de ponta para quem não aceita menos que a excelência.
          </p>

          <div className="space-y-2">
            <p className="text-on-surface-variant line-through text-sm">De R$ 289,00</p>
            <p className="text-3xl font-bold text-on-background">
              Por apenas <span className="text-primary">R$ 187,00</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-3">
              Compre Agora
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="flex items-center gap-4 text-on-surface-variant font-semibold">
              <span className="material-symbols-outlined text-primary">verified_user</span>
              1 ano de garantia
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 rounded-full blur-[100px]"></div>
          <img 
            src="relogio1.jpg" 
            alt="Chronos Ultra Smartwatch" 
            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
