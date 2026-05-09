import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white/60 backdrop-blur-3xl border border-white/40 p-12 md:p-24 rounded-[48px] shadow-2xl relative overflow-hidden text-center"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-tertiary to-secondary"></div>
        
        <h2 className="text-4xl md:text-6xl font-extrabold text-on-background mb-8 leading-tight">
          Pronto para o Próximo Nível?
        </h2>
        
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          Não perca a oferta exclusiva de lançamento. O estoque é limitado para esta condição especial.
        </p>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white/40 inline-block p-10 rounded-[32px] mb-12 border border-white/60 shadow-inner"
        >
          <p className="text-on-surface-variant line-through text-lg mb-2">R$ 289,00</p>
          <p className="text-6xl font-black text-primary">R$ 187,00</p>
          <p className="text-on-surface-variant mt-4 font-bold uppercase text-xs tracking-[0.3em]">
            12x sem juros no cartão
          </p>
        </motion.div>

        <div>
          <button className="bg-primary text-on-primary px-16 py-7 rounded-full font-extrabold text-2xl hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,88,188,0.3)] transition-all duration-300">
            Quero o meu Chronos Ultra
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-60">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">local_shipping</span>
            <span className="font-bold text-xs tracking-widest">FRETE GRÁTIS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">lock</span>
            <span className="font-bold text-xs tracking-widest">COMPRA SEGURA</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">sync</span>
            <span className="font-bold text-xs tracking-widest">7 DIAS PARA TROCA</span>
          </div>
        </div>
        
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
      </motion.div>
    </section>
  );
};

export default CTA;
