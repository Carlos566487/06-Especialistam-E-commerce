import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-white/20 bg-white/60 backdrop-blur-2xl"
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-20">
        <span className="text-xl font-black tracking-tighter text-slate-900">CHRONOS ULTRA</span>
        
        <div className="hidden md:flex items-center gap-10">
          <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm" href="#funcionalidades">Funcionalidades</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm" href="#saude">Saúde</a>
          <a className="text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm" href="#especificacoes">Especificações</a>
        </div>

        <button className="bg-primary hover:opacity-90 text-on-primary px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 active:scale-95">
          Comprar Agora
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
