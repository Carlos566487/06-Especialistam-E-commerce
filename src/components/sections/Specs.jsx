import React from 'react';
import { motion } from 'framer-motion';

const Specs = () => {
  return (
    <section className="py-24 bg-surface" id="especificacoes">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-background">Especificações de Elite</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Spec Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-[32px] shadow-sm flex flex-col md:flex-row gap-10 items-center overflow-hidden"
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-extrabold text-on-background leading-tight">Design Aeroespacial</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Construído com liga de alumínio de grau aeronáutico, oferecendo resistência extrema e leveza incomparável no seu pulso.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-1.5 bg-surface-container-high rounded-full font-bold text-[10px] text-on-surface-variant uppercase tracking-widest">ULTRA RESISTENTE</span>
                <span className="px-4 py-1.5 bg-surface-container-high rounded-full font-bold text-[10px] text-on-surface-variant uppercase tracking-widest">IP68</span>
              </div>
            </div>
            <img 
              src="relogio3.jpg" 
              alt="Aerospace Grade Build" 
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl"
            />
          </motion.div>

          {/* Battery Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-primary p-10 rounded-[32px] text-on-primary flex flex-col justify-between shadow-xl shadow-primary/20"
          >
            <span className="material-symbols-outlined text-6xl">battery_charging_full</span>
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold">14 Dias</h3>
              <p className="opacity-80 font-medium">Bateria de longa duração com gerenciamento inteligente.</p>
            </div>
          </motion.div>

          {/* Language Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[32px] flex flex-col justify-center items-center text-center space-y-6"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">language</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-on-background">Multilíngue</h3>
              <p className="text-on-surface-variant">Interface em Português e mais 12 idiomas globais.</p>
            </div>
          </motion.div>

          {/* Original Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[32px] flex items-center justify-between overflow-hidden relative"
          >
            <div className="flex-1 space-y-4 relative z-10">
              <h3 className="text-3xl font-extrabold text-on-background">100% Original</h3>
              <p className="text-on-surface-variant max-w-sm">Garantia de autenticidade CHRONOS ENGINEERING com selo oficial.</p>
            </div>
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
              <span className="material-symbols-outlined text-primary text-6xl">verified</span>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
